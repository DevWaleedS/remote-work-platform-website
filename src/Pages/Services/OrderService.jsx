import React, { useState, useEffect, useMemo } from "react";

// third party
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import UserInfo from "./UserInfo";
import SelectUserType from "./SelectUserType";
import RenderPaymentsList from "./RenderPaymentsList";
import OrderServiceInfo from "./OrderServiceInfo";
import LoadingWebSite from "../../components/LoadingBox/LoadingwebSite";

// Css styles
import "../../index.css";
import "./OrderService.css";

// RTK Query

import {
	useApplyServicesCouponMutation,
	useCreateOrderWithMadfuMutation,
	useGetServiceByIdQuery,
	useLoginWithMadfuMutation,
	useServiceCheckoutMutation,
	useShowServiceOrderQuery,
} from "../../RTK/Api/servicesApi";

import { LoadingIcon } from "../../assets/Icons";
import RenderServicesCouponInput from "./RenderServicesCouponInput";

function OrderService({ openOrderServiceModal, setOpeOrderServiceModal, id }) {
	const navigate = useNavigate();

	// to open this page in the top
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { data: getServiceById, isLoading: loadingService } =
		useGetServiceByIdQuery({ id });

	// -----------------------------------------------------------------------------
	const date = Date.now();
	const [userType, setUserType] = useState(1);
	const [btnLoading, setBtnLoading] = useState(false);
	const [merchantReference, setMerchantReference] = useState(null);
	// coupon
	const [showCoupon, setShowCoupon] = useState(false);
	const [loadingCoupon, setLoadingCoupon] = useState(false);
	const [coupon, setCoupon] = useState(null);
	const [couponError, setCouponError] = useState(null);

	const [data, setData] = useState({
		name: "",
		store_domain: "",
		phone_number: "",
		email: "",
		service_id: [],
		paymentype_id: "",
	});

	useEffect(() => {
		if (getServiceById) {
			setData((prevData) => ({
				...prevData,
				service_id: [
					{
						value: getServiceById.id,
						label: getServiceById.name,
						price: getServiceById.price,
					},
				],
			}));
		}
	}, [getServiceById]);

	// using this effect to handle merchantReference if paymentSelect is madfu...
	useEffect(() => {
		if (+data?.paymentype_id === 5) {
			setMerchantReference(`service_reference_${date.toString().slice(-5)}`);
		} else {
			setMerchantReference(null);
		}
	}, [data?.paymentype_id]);

	// To handle errors
	const [checkOutErrors, setCheckOutErrors] = useState({
		name: "",
		store_domain: "",
		phone_number: "",
		email: "",
		service_id: "",
		paymentype_id: "",
	});

	const resetErrors = () => {
		setCheckOutErrors({
			name: "",
			store_domain: "",
			phone_number: "",
			email: "",
			service_id: "",
			paymentype_id: "",
		});
	};
	// ------------------------------------------------------------------------------

	// handle apply code
	const [
		applyServicesCoupon,
		{ data: cartAfterCoupon, isLoading: applyServicesCouponLoading },
	] = useApplyServicesCouponMutation();
	const handleApplyDiscountCoupon = async () => {
		setLoadingCoupon(true);
		setCouponError(null);

		// data that send to api..
		let formData = new FormData();
		formData.append("code", coupon);
		formData.append("name", data?.name);
		formData.append("store_domain", data?.store_domain);
		formData.append("email", data?.email);
		data?.service_id?.forEach((service, index) =>
			formData.append(`service_id[${index}]`, service?.value)
		);

		// make request...
		try {
			const response = await applyServicesCoupon({
				body: formData,
			});

			// Handle response
			if (
				response.data?.success === true &&
				response.data?.data?.status === 200
			) {
				setCoupon("");

				if (
					response?.data?.message?.en === "The coupon is invalid" ||
					response?.data?.message?.en === "The coupon is already used"
				) {
					toast.error(
						response?.data?.message?.ar
							? response.data.message.ar
							: response.data.message.en,
						{
							theme: "light",
						}
					);
				} else {
					toast.success(
						response?.data?.message?.ar
							? response.data.message.ar
							: response.data.message.en,
						{
							theme: "light",
						}
					);
				}

				setLoadingCoupon(false);
			} else {
				setBtnLoading(false);
				setLoadingCoupon(false);

				setCheckOutErrors({
					name: response?.data?.message?.en?.name?.[0],
					store_domain: response?.data?.message?.en?.store_domain?.[0],
					email: response?.data?.message?.en?.email?.[0],
					phone_number: response?.data?.message?.en?.phone_number?.[0],
					service_id: response?.data?.message?.en?.service_id?.[0],
					paymentype_id: response?.data?.message?.en?.paymentype_id?.[0],
				});

				// Handle display errors using toast notifications
				toast.error(
					response?.data?.message?.ar
						? response.data.message.ar
						: response.data.message.en,
					{
						theme: "light",
					}
				);
			}
		} catch (error) {
			console.error("Error changing appLyDiscountCoupon:", error);
		}
	};

	const { data: showServiceOrder, isLoading: showServiceOrderLoading } =
		useShowServiceOrderQuery({ id: cartAfterCoupon?.data?.websiteorder?.id });

	// handle Send Register Request
	const [serviceCheckout, { isLoading }] = useServiceCheckoutMutation();
	const handleServiceCheckoutRequest = async () => {
		resetErrors();
		setBtnLoading(true);

		// send data to api
		let formData = new FormData();
		formData.append("name", data?.name);
		formData.append("store_domain", data?.store_domain);
		formData.append("email", data?.email);
		formData.append("paymentype_id", data?.paymentype_id);

		if (cartAfterCoupon?.data?.websiteorder?.id) {
			formData.append("order_id", cartAfterCoupon?.data?.websiteorder?.id);
		}

		// handle set package_reference is the payment id is madfu
		if (+data?.paymentype_id === 5) {
			formData.append("service_reference", merchantReference);
		}

		data?.service_id?.forEach((service, index) =>
			formData.append(`service_id[${index}]`, service?.value)
		);
		if (data?.phone_number) {
			formData.append("phone_number", `+966${data?.phone_number}`);
		}

		try {
			const response = await serviceCheckout({
				body: formData,
			});

			// Handle response
			if (
				response.data?.success === true &&
				response.data?.data?.status === 200
			) {
				if (
					response.data?.data?.payment?.IsSuccess === true &&
					response.data?.data?.payment?.Message ===
						"Invoice Created Successfully!"
				) {
					window.location.href = response.data?.data?.payment?.Data?.PaymentURL;
					/* handle if user select kas as his country and payment type is madfu Payment */
				} else if (+data?.paymentype_id === 5) {
					handleLoginWithMadu();
				} else {
					navigate("/success");
					setBtnLoading(false);
				}
			} else {
				setBtnLoading(false);
				setCheckOutErrors({
					name: response?.data?.message?.en?.name?.[0],
					store_domain: response?.data?.message?.en?.store_domain?.[0],
					email: response?.data?.message?.en?.email?.[0],
					phone_number: response?.data?.message?.en?.phone_number?.[0],
					service_id: response?.data?.message?.en?.service_id?.[0],
					paymentype_id: response?.data?.message?.en?.paymentype_id?.[0],
				});

				Object.entries(response?.data?.message?.en)?.forEach(
					([key, message]) => {
						toast.error(message?.[0], { theme: "light" });
					}
				);
			}
		} catch (error) {
			console.error("Error changing sendRegisterRequest:", error);
		}
	};

	// handle checkout with madfu
	const [loginWithMadfu] = useLoginWithMadfuMutation();
	const handleLoginWithMadu = async () => {
		const formData = new FormData();
		formData.append("uuid", data?.phone_number);
		formData.append("store_id", "atlbhaPlatform");
		try {
			const response = await loginWithMadfu({
				body: formData,
			});

			if (
				response.data?.success === true &&
				response.data?.data?.status === 200
			) {
				handleCreateOrderWithMadfu(response.data.data.data.token);
			} else {
				setBtnLoading(false);
				toast.error(response?.data?.message?.ar, { theme: "colored" });
			}
		} catch (error) {
			console.error("Error changing checkOutCart:", error);
		}
	};

	// handle create order with madfu
	const [createOrderWithMadfu] = useCreateOrderWithMadfuMutation();
	const handleCreateOrderWithMadfu = async (token) => {
		const guestOrderData = {
			CustomerMobile: data?.phone_number,
			CustomerName: data?.name,
			Lang: "",
		};

		const orderDetails = data?.service_id?.map((item) => ({
			productName: item?.label,
			SKU: item?.value,
			productImage: "",
			count: parseInt(1),
			totalAmount: item?.price,
		}));

		const orderInfo = {
			Taxes: 0,
			ActualValue: grandTotal,
			Amount: grandTotal,
			MerchantReference: merchantReference,
		};

		// data that send  to api...
		const formData = new FormData();
		formData.append("token", token);
		formData.append("guest_order_data", JSON.stringify(guestOrderData));
		formData.append("order", JSON.stringify(orderInfo));
		formData.append("order_details", JSON.stringify(orderDetails));
		formData.append("url", "https://atlbha.com");

		try {
			const response = await createOrderWithMadfu({ body: formData });
			if (
				response.data?.success === true &&
				response.data?.data?.status === 200
			) {
				setBtnLoading(false);

				window.location.href = response.data.data.data.checkoutLink;
			} else {
				setBtnLoading(false);
				toast.error(response?.data?.message?.ar, { theme: "colored" });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnChangeData = (e) => {
		const { name, value } = e.target;
		setData((prevData) => {
			return { ...prevData, [name]: value };
		});
	};
	const resetValues = () => {
		setData({
			name: "",
			store_domain: "",
			phone_number: "",
			email: "",
			service_id: [],
			paymentype_id: "",
		});
	};
	const handleCloseOrderServiceModal = () => {
		setOpeOrderServiceModal(false);
		resetValues();
		setUserType(1);
		setBtnLoading(false);
	};

	// Calculate the total price of selected services
	const totalSelectedServicesPrice = useMemo(() => {
		if (cartAfterCoupon?.websiteorder?.coupon) {
			return (
				showServiceOrder?.total_price ??
				data?.service_id?.reduce((total, service) => total + service.price, 0)
			);
		} else {
			return data?.service_id?.reduce(
				(total, service) => total + service.price,
				0
			);
		}
	}, [data?.service_id, showServiceOrder, cartAfterCoupon]);

	// Calculate the grand total (including the main service price)
	const grandTotal = useMemo(() => {
		return totalSelectedServicesPrice;
	}, [totalSelectedServicesPrice]);

	return (
		<>
			{openOrderServiceModal ? (
				<div
					className='popup  overflow-y-lg-auto'
					onClick={handleCloseOrderServiceModal}>
					<div
						className='popup-content order-service-popup-content '
						onClick={(e) => e.stopPropagation()}>
						<button
							onClick={handleCloseOrderServiceModal}
							className='close-btn'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M15.2806 14.2193C15.3502 14.289 15.4055 14.3717 15.4432 14.4628C15.4809 14.5538 15.5003 14.6514 15.5003 14.7499C15.5003 14.8485 15.4809 14.9461 15.4432 15.0371C15.4055 15.1281 15.3502 15.2109 15.2806 15.2806C15.2109 15.3502 15.1281 15.4055 15.0371 15.4432C14.9461 15.4809 14.8485 15.5003 14.7499 15.5003C14.6514 15.5003 14.5538 15.4809 14.4628 15.4432C14.3717 15.4055 14.289 15.3502 14.2193 15.2806L7.99993 9.06024L1.78055 15.2806C1.63982 15.4213 1.44895 15.5003 1.24993 15.5003C1.05091 15.5003 0.860034 15.4213 0.719304 15.2806C0.578573 15.1398 0.499512 14.949 0.499512 14.7499C0.499512 14.5509 0.578573 14.36 0.719304 14.2193L6.93962 7.99993L0.719304 1.78055C0.578573 1.63982 0.499512 1.44895 0.499512 1.24993C0.499512 1.05091 0.578573 0.860034 0.719304 0.719304C0.860034 0.578573 1.05091 0.499512 1.24993 0.499512C1.44895 0.499512 1.63982 0.578573 1.78055 0.719304L7.99993 6.93962L14.2193 0.719304C14.36 0.578573 14.5509 0.499512 14.7499 0.499512C14.949 0.499512 15.1398 0.578573 15.2806 0.719304C15.4213 0.860034 15.5003 1.05091 15.5003 1.24993C15.5003 1.44895 15.4213 1.63982 15.2806 1.78055L9.06024 7.99993L15.2806 14.2193Z'></path>
							</svg>
						</button>
						<section className='checkout-packages-page' open={true}>
							<>
								<div className='checkout-page'>
									<div className='block'>
										<div className='container'>
											{loadingService ? (
												<LoadingWebSite />
											) : (
												<>
													<div className='checkout-package__title mb-5'>
														<h2 className='title__one'>
															إشترك الآن وعزز من نجاح مشروعك
														</h2>
														<h4 className='title__two'>
															احصل على مميزات مهمّة ومفيدة
														</h4>
													</div>

													<SelectUserType
														userType={userType}
														setUserType={setUserType}
													/>

													<>
														{userType === Number(1) ? (
															<section className='pt-1 pt-lg-5'>
																<div className='note text-center'>
																	يرجي تسجيل الدخول إلي حسابك ثم الدخول إلى قسم
																	خدمات المنصة .
																</div>
																<a
																	href={`https://store.atlbha.com/PlatformServices`}
																	className='display-more-btn btn'>
																	تسجل الدخول والإنتقال إلي خدمات المنصة
																</a>
																<div className='have-account'>
																	<span className=''>ليس لديك حساب؟ </span>
																	<a
																		className=''
																		href='https://store.atlbha.com/auth/merchant'>
																		التسجيل في المنصه
																	</a>
																</div>
															</section>
														) : (
															<div className='row'>
																<div className='col-12 col-lg-6 mb-4 mb-lg-0'>
																	<div className='card'>
																		<div className='card-body'>
																			<UserInfo
																				data={data}
																				setData={setData}
																				errors={checkOutErrors}
																				setErrors={setCheckOutErrors}
																				handleOnChangeData={handleOnChangeData}
																			/>
																		</div>
																	</div>
																</div>
																<div className='col-12 col-lg-6 mb-4 mb-lg-0 '>
																	<div className='card '>
																		<div className='card-body '>
																			<OrderServiceInfo
																				grandTotal={grandTotal}
																				cartAfterCoupon={showServiceOrder}
																				selectedServices={data?.service_id}
																				loadingService={
																					loadingService ||
																					showServiceOrderLoading
																				}
																				setOpeOrderServiceModal={
																					setOpeOrderServiceModal
																				}
																			/>

																			<RenderServicesCouponInput
																				coupon={coupon}
																				setCoupon={setCoupon}
																				showCoupon={showCoupon}
																				couponError={couponError}
																				setShowCoupon={setShowCoupon}
																				loadingCoupon={loadingCoupon}
																				setCouponError={setCouponError}
																				isLoading={applyServicesCouponLoading}
																				handleApplyDiscountCoupon={
																					handleApplyDiscountCoupon
																				}
																			/>
																		</div>

																		<div className='card-body pt-0 '>
																			<RenderPaymentsList
																				data={data}
																				setData={setData}
																				handleOnChangeData={handleOnChangeData}
																				paymentMethodError={
																					checkOutErrors?.paymentype_id
																				}
																			/>
																			<button
																				onClick={handleServiceCheckoutRequest}
																				className='checkout-btn text-center'
																				disabled={btnLoading || isLoading}>
																				{btnLoading || isLoading ? (
																					<LoadingIcon
																						style={{
																							width: "35px",
																							height: "35px",
																						}}
																					/>
																				) : (
																					"تأكيد الطلب"
																				)}
																			</button>
																		</div>
																	</div>
																</div>
															</div>
														)}
													</>
												</>
											)}
										</div>
									</div>
								</div>
							</>
						</section>
					</div>
				</div>
			) : null}
		</>
	);
}

export default OrderService;
