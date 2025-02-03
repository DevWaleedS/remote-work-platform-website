import React, { useState, useContext, useEffect } from "react";

// third party
import { toast } from "react-toastify";

// MUI
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// Context
import AppContext from "../../../Context/AppContext";

// Icons
import { IoIosArrowDown } from "react-icons/io";
import { CloseIcon, OK, OKBlack, RedStar } from "../../../assets/Icons";

import "../../../index.css";
import { useNavigate } from "react-router-dom";

// RTK Query
import { useSendRegisterRequestMutation } from "../../../RTK/Api/registerFormApi";
import { useGetPackagesQuery } from "../../../RTK/Api/selectoresApis/selectPackagesApi";
import { useGetCountriesQuery } from "../../../RTK/Api/selectoresApis/selectCountriesApi";
import { useGetAreasByCountryIdQuery } from "../../../RTK/Api/selectoresApis/selectCitiesApi";
import { useGetSpecializationsQuery } from "../../../RTK/Api/selectoresApis/specializationsApi";
import { useGetNationalitiesQuery } from "../../../RTK/Api/selectoresApis/selectNationalitiesApi";
import {
	useLoginWithMadfuMutation,
	useCreateOrderWithMadfuMutation,
} from "../../../RTK/Api/checkoutByMadfuApi";
import LoadingWebSite from "../../../components/LoadingBox/LoadingwebSite";

function RegisterForm() {
	const navigate = useNavigate();

	// to open this page in the top
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// -----------------------------------------------------------------------------
	const [isKSA, setIsKSA] = useState("");
	const [remaining, setRemaining] = useState(true);
	const [btnLoading, setBtnLoading] = useState(false);
	const [paymentType, setPaymentType] = useState("madfuPayment");
	const [merchantReference, setMerchantReference] = useState(null);
	const [registerValues, setRegisterValues] = useState({
		package_id: localStorage?.getItem("packageId") || "",
		fullName: "",
		nationality_id: "",
		country_id: "",
		city_id: "",
		phonenumber: "",
		email: "",
		specialization_id: "",
		brokerCode: "",
	});

	// Handle select payment type
	const handleChange = (event) => {
		setPaymentType(event.target.value);
	};
	// handle onchange values
	const handleRegisterValues = (event) => {
		const { name, value } = event.target;

		setRegisterValues((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	// To handle errors
	const [registerErrors, setRegisterErrors] = useState({
		package_id: "",
		fullName: "",
		nationality: "",
		country: "",
		city: "",
		phonenumber: "",
		email: "",
		specialization: "",
		brokerCode: "",
	});

	const resetRegisterErrors = () => {
		setRegisterErrors({
			package_id: "",
			fullName: "",
			nationality: "",
			country: "",
			city: "",
			phonenumber: "",
			email: "",
			specialization: "",
			brokerCode: "",
		});
	};

	// ------------------------------------------------------------------------------
	const contextStore = useContext(AppContext);
	const {
		setOpenBankAccountInfoModal,
		registrationPolicyModal,
		setRegistrationPolicyModal,
		setRegistrationPolicy,
		precautionsModal,
		setPrecautionsModal,
		registrationPolicy,
		setPrecautions,
		precautions,
		activeTab,
	} = contextStore;

	// selectors apis
	const { data: packages } = useGetPackagesQuery();
	const { data: countries } = useGetCountriesQuery();
	const { data: nationalities } = useGetNationalitiesQuery();
	const { data: specializations } = useGetSpecializationsQuery();
	const { data: areas } = useGetAreasByCountryIdQuery(
		registerValues?.country_id || 1
	);

	// to get the current key of country
	const countriesKey =
		countries?.find(
			(country) => country?.id === parseInt(registerValues?.country_id)
		) || "";

	/**
	 *  	 TO HANDLE THE REG_EXPRESS
	 *  --------------------------------------------------------------------------- */

	// TO HANDLE THE REG_EXPRESS
	const FULL_NAME_REGEX = /^[\p{L}\p{M}'-]+(?:\s[\p{L}\p{M}'-]+){2,}$/u;
	const PHONE_REGEX = /^(5\d{8})$/;
	const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

	const [validFullName, setValidFullName] = useState(false);
	const [fullNameFocus, setFullNameFocus] = useState(false);
	const [validPhoneNumber, setValidPhoneNumber] = useState(false);
	const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	// TO HANDLE VALIDATION FOR OWNER NAME
	useEffect(() => {
		const fullNameValidation = FULL_NAME_REGEX.test(registerValues?.fullName);
		setValidFullName(fullNameValidation);
	}, [registerValues?.fullName]);

	// TO HANDLE VALIDATION STORE PHONE NUMBER
	useEffect(() => {
		const phoneNumberValidation = PHONE_REGEX.test(registerValues?.phonenumber);
		setValidPhoneNumber(phoneNumberValidation);
	}, [registerValues?.phonenumber]);

	// TO HANDLE VALIDATION FOR EMAIL
	useEffect(() => {
		const emailValidation = EMAIL_REGEX.test(registerValues?.email);
		setValidEmail(emailValidation);
	}, [registerValues?.email]);

	// -----------------------------------------------------------------------------------------------------

	// get package by filter it by using package_id
	const packageInfo = packages?.find(
		(pack) => pack.id === registerValues.package_id
	);

	// handle Send Register Request
	const [sendRegisterRequest, { isLoading }] = useSendRegisterRequestMutation();
	const handleSendRegisterRequest = async () => {
		resetRegisterErrors();
		setBtnLoading(true);

		// send data to api
		let formData = new FormData();
		formData.append("type", activeTab);
		formData.append("package_id", registerValues?.package_id);
		formData.append("name", registerValues?.fullName);
		formData.append("nationality_id", registerValues?.nationality_id);
		formData.append("country_id", registerValues?.country_id);
		registerValues?.city_id &&
			formData.append("area_id", registerValues?.city_id);
		formData.append("email", registerValues?.email);
		formData.append(
			"phonenumber",
			`${countriesKey?.country_code}${registerValues?.phonenumber}`
		);
		formData.append("specialization_id", registerValues?.specialization_id);
		formData.append("brokerCode", registerValues?.brokerCode);

		try {
			const response = await sendRegisterRequest({
				credentials: formData,
			});

			// Handle response
			if (
				response.data?.success === true &&
				response.data?.data?.status === 200
			) {
				// if (
				// 	response?.data?.data?.response?.IsSuccess === true &&
				// 	response?.data?.data?.response?.Message ===
				// 		"Invoice Created Successfully!"
				// ) {
				// 	window.location.href =
				// 		response?.data?.data?.response?.Data?.PaymentURL;
				// } else {
				// 	toast.success(response?.data?.message?.ar, {
				// 		theme: "light",
				// 	});
				// 	navigate("/commercial_flights/features");
				// }

				/* handle if user select kas as his country and payment type is madfu Payment */
				if (paymentType === "madfuPayment" && isKSA === +1) {
					handleLoginWithMadu();
					setMerchantReference(response.data?.data?.response?.madfu_id);
				} else {
					setOpenBankAccountInfoModal(true);
					setBtnLoading(false);
					setPrecautions(false);
					setRegistrationPolicy(false);
				}
			} else {
				setBtnLoading(false);
				setRegisterErrors({
					package_id: response?.data?.message?.en?.package_id?.[0],
					fullName: response?.data?.message?.en?.name?.[0],
					nationality: response?.data?.message?.en?.nationality_id?.[0],
					country: response?.data?.message?.en?.country_id?.[0],
					city: response?.data?.message?.en?.area_id?.[0],
					phonenumber: response?.data?.message?.en?.phonenumber?.[0],
					email: response?.data?.message?.en?.email?.[0],
					specialization: response?.data?.message?.en?.specialization_id?.[0],
					brokerCode: response?.data?.message?.en?.specialization_id?.[0],
					packages: response?.data?.message?.en?.package_id?.[0],
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
		formData.append("uuid", registerValues?.country_id);
		formData.append("store_id", registerValues?.nationality_id);
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
		setBtnLoading(false);
		const guestOrderData = {
			CustomerMobile: registerValues?.phonenumber.startsWith("+966")
				? registerValues?.phonenumber.slice(4)
				: registerValues?.phonenumber.startsWith("00966")
				? registerValues?.phonenumber.slice(5)
				: registerValues?.phonenumber,
			CustomerName: registerValues?.fullName,
			Lang: "",
		};

		const orderDetails = [
			{
				productName: packageInfo?.name,
				SKU: packageInfo?.price,
				productImage: "product image url",
				count: 1,
				totalAmount: packageInfo?.price,
			},
		];

		const orderInfo = {
			Taxes: 0,
			ActualValue: packageInfo?.price,
			Amount: packageInfo?.price,
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
				setPrecautions(false);
				setRegistrationPolicy(false);
				window.location.href = response.data.data.data.checkoutLink;
			} else {
				toast.error(response?.data?.message?.ar, { theme: "colored" });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='tab'>
			{remaining && (
				<div className='register-remaining'>
					<h6>متبقي 4 مقاعد</h6>
					<CloseIcon onClick={() => setRemaining(false)} />
				</div>
			)}
			<div className='title'>
				<h1 className='register'>
					نموذج التسجيل في البرنامج التدريبي <br />
					{activeTab === "china"
						? "	( الرحلة التجارية إلى الصين)"
						: "		( الرحلة التجارية إلى دبي)"}
				</h1>
			</div>
			<div className='register-form'>
				{/*  باقة الاشتراك*/}
				<div className='input-group'>
					<label htmlFor='package'>
						باقة الإشتراك <RedStar />
					</label>
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<Select
							displayEmpty
							IconComponent={IoIosArrowDown}
							name='package_id'
							onChange={handleRegisterValues}
							value={registerValues.package_id}
							renderValue={(selected) => {
								if (registerValues.package_id === "") {
									return (
										<span className='text-[14px] font-normal font-Tajawal text-[#C6C6C6]'>
											اختر الباقة
										</span>
									);
								}
								const result = packages?.filter(
									(item) => item?.id === parseInt(selected)
								)[0];

								return (
									<div
										className='d-flex justify-content-between align-items-center '
										style={{ paddingLeft: "8px" }}>
										<span style={{ fontWeight: "bold" }}>{result?.title}</span>
									</div>
								);
							}}>
							{packages?.map((item) => (
								<MenuItem
									className='item_select d-flex justify-content-between '
									value={item?.id}
									key={item?.id}>
									<span className=''>{item?.title}</span>
								</MenuItem>
							))}
						</Select>
					</FormControl>

					{/* Handle errors and validation messages */}
					<span style={{ fontSize: "14px", color: "#fc012cff" }}>
						{registerErrors?.package_id && registerErrors?.package_id}
					</span>
				</div>

				{/* Full Name */}
				<div className='input-group'>
					<label htmlFor='package'>
						الاسم ثلاثي <RedStar />
					</label>
					<input
						type='text'
						name='fullName'
						onChange={handleRegisterValues}
						value={registerValues.fullName}
						aria-invalid={!validFullName ? "true" : "false"}
						aria-describedby='fullName'
						onFocus={() => setFullNameFocus(true)}
						onBlur={() => setFullNameFocus(false)}
						placeholder='ادخل الإسم'
						className={`input_style ${
							!validFullName && fullNameFocus ? "input_error" : ""
						}`}
						style={{
							width: "100%",
							height: "45px",
							border: "none",
							fontSize: "14px",
							fontWeight: "400",
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-start",
							borderBottom: "1px solid #C6C6C6",
						}}
					/>
					{/* Handle errors and validation messages */}
					<span style={{ fontSize: "14px", color: "#fc012cff" }}>
						{fullNameFocus && !validFullName && "يرجي ادخال الاسم الثلاثي!"}
					</span>
				</div>

				{/* الجنسية */}
				<div className='input-group'>
					<label htmlFor='package'>
						الجنسية <RedStar />
					</label>
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<Select
							displayEmpty
							name='nationality_id'
							value={registerValues?.nationality_id}
							onChange={handleRegisterValues}
							inputProps={{ "aria-label": "Without label" }}
							IconComponent={IoIosArrowDown}
							renderValue={(selected) => {
								if (registerValues.nationality_id === "") {
									return (
										<span className='text-[14px] font-normal font-Tajawal text-[#C6C6C6]'>
											اختر الجنسية
										</span>
									);
								}
								const result = nationalities?.filter(
									(item) => item?.id === selected
								)[0];

								return result?.nationality_name;
							}}>
							{nationalities?.map((item) => (
								<MenuItem
									className='item_select'
									value={item?.id}
									key={item?.id}>
									{item?.nationality_name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				{/* الدولة */}
				<div className='input-group'>
					<label htmlFor='package'>
						الدولة <RedStar />
					</label>
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<Select
							displayEmpty
							name='country_id'
							value={registerValues.country_id}
							inputProps={{ "aria-label": "Without label" }}
							IconComponent={IoIosArrowDown}
							onChange={handleRegisterValues}
							renderValue={(selected) => {
								if (registerValues.country_id === "") {
									return (
										<span className='text-[14px] font-normal font-Tajawal text-[#C6C6C6]'>
											اختر الدولة
										</span>
									);
								}

								const result = countries?.filter(
									(item) => item?.id === parseInt(selected)
								)[0];
								setIsKSA(result?.id);
								return result?.country_name;
							}}>
							{countries?.map((item) => (
								<MenuItem
									className='item_select d-flex justify-content-between'
									value={item?.id}
									key={item?.id}>
									<span>{item?.country_name}</span>
									<span>{item?.country_code}</span>
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				{/* المنطقة */}
				{isKSA === +1 && (
					<div className='input-group'>
						<label htmlFor='package'>
							المنطقة <RedStar />
						</label>
						<FormControl sx={{ m: 1, minWidth: 120 }}>
							<Select
								name='city_id'
								value={registerValues?.city_id}
								onChange={handleRegisterValues}
								displayEmpty
								inputProps={{ "aria-label": "Without label" }}
								IconComponent={IoIosArrowDown}
								renderValue={(selected) => {
									if (registerValues.city_id === "") {
										return (
											<span className='text-[14px] font-normal font-Tajawal text-[#C6C6C6]'>
												اختر المنطقة
											</span>
										);
									}
									const result = areas?.filter(
										(item) => item?.id === selected
									)[0];

									return result?.area_name;
								}}>
								{areas?.map((item) => (
									<MenuItem
										className='item_select'
										value={item?.id}
										key={item?.id}>
										{item?.area_name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
				)}

				{/* رقم الجوال*/}
				<div className='input-group'>
					<label htmlFor='package'>
						رقم الجوال <RedStar />
					</label>
					<div
						style={{
							width: "100%",
							height: "45px",
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							border: "none",
							borderBottom: "1px solid #C6C6C6",
						}}>
						<input
							type='tel'
							name='phonenumber'
							onChange={handleRegisterValues}
							value={registerValues.phonenumber}
							placeholder='أدخل رقم الجوال'
							aria-invalid={validPhoneNumber ? "false" : "true"}
							aria-describedby='phonenumber'
							onFocus={() => setPhoneNumberFocus(true)}
							onBlur={() => setPhoneNumberFocus(true)}
							className={` input_style `}
						/>
						{/* Country key */}
						<div className=''>{countriesKey?.country_code}</div>
					</div>

					{/* Handle errors and validation messages */}
					<span style={{ fontSize: "14px", color: "#fc012cff" }}>
						{phoneNumberFocus &&
							registerValues.phonenumber.trim() === "" &&
							"يرجي ادخال رقم الجوال!"}
						{registerErrors.phonenumber && registerErrors.phonenumber}
					</span>
				</div>

				{/* البريد الإلكتروني */}
				<div className='input-group'>
					<label htmlFor='package'>
						البريد الإلكتروني <RedStar />
					</label>
					<input
						type='email'
						name='email'
						onChange={handleRegisterValues}
						value={registerValues.email}
						aria-invalid={validEmail ? "false" : "true"}
						aria-describedby='email'
						onFocus={() => setEmailFocus(true)}
						onBlur={() => setEmailFocus(true)}
						placeholder='ادخل البريد الإلكتروني'
						className={` input_style `}
						style={{
							width: "100%",
							height: "45px",
							border: "none",
							fontSize: "14px",
							fontWeight: "400",
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-start",
							borderBottom: "1px solid #C6C6C6",
						}}
					/>

					{/* Handle errors and validation messages */}
					<span style={{ fontSize: "14px", color: "#fc012cff" }}>
						{emailFocus &&
							registerValues.email.trim() === "" &&
							"يرجي ادخال  البريد الإلكتروني!"}
						{registerErrors.email && registerErrors.email}
					</span>
				</div>

				{/* الاهتمام والتخصص  */}
				<div className='input-group'>
					<label htmlFor='package'>
						الاهتمام والتخصص <RedStar />
					</label>
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<Select
							displayEmpty
							IconComponent={IoIosArrowDown}
							name='specialization_id'
							onChange={handleRegisterValues}
							value={registerValues.specialization_id}
							renderValue={(selected) => {
								if (registerValues.specialization_id === "") {
									return (
										<span className='text-[14px] font-normal font-Tajawal text-[#C6C6C6]'>
											اختر الاهتمام أو التخصص الذي يناسبك
										</span>
									);
								}
								const result = specializations?.filter(
									(item) => item?.id === parseInt(selected)
								);

								return result[0]?.specialization;
							}}>
							{specializations?.map((item) => (
								<MenuItem
									className='item_select'
									value={item?.id}
									key={item?.id}>
									{item?.specialization}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					{/* Handle errors and validation messages */}
					<span style={{ fontSize: "14px", color: "#fc012cff" }}>
						{registerErrors?.nationality && registerErrors?.nationality}
					</span>
				</div>

				<div className='input-group'>
					<label htmlFor='package'>كود الوسيط</label>
					<input
						type='text'
						name='brokerCode'
						onChange={handleRegisterValues}
						value={registerValues.brokerCode}
						placeholder='ادخل  كود الوسيط '
						style={{
							height: "45px",
							borderBottom: "1px solid #C6C6C6",
						}}
						className={` input_style `}
					/>
				</div>
				{isKSA === +1 && (
					<div className='input-group'>
						<label htmlFor='payment'>
							طريقة الدفع
							<RedStar />
						</label>
						<FormControl>
							<RadioGroup
								id='payment'
								aria-labelledby='demo-radio-buttons-group-label'
								name='radio-buttons-group'
								value={paymentType}
								onChange={handleChange}>
								<FormControlLabel
									sx={{
										"& .MuiButtonBase-root": {
											"&.Mui-checked": {
												color: "#1dbbbe",
											},
										},
									}}
									value='madfuPayment'
									name='madfuPayment'
									control={<Radio />}
									label='الدفع الآجل (مدفوع)'
								/>
								<FormControlLabel
									sx={{
										"& .MuiButtonBase-root": {
											"&.Mui-checked": {
												color: "#1dbbbe",
											},
										},
									}}
									value='cashPayment'
									name='cashPayment'
									control={<Radio />}
									label='الدفع عبر الحساب البنكي'
								/>
							</RadioGroup>
						</FormControl>
					</div>
				)}

				<div className='flex flex-column'>
					<p>قبل الاشتراك يجب الموافقة على السياسة والشروط</p>
					<div className='condition'>
						<button
							type='button'
							onClick={() =>
								setRegistrationPolicyModal(!registrationPolicyModal)
							}>
							سياسة التسجيل في البرنامج التدريبي
						</button>
						{registrationPolicy ? <OK /> : <OKBlack />}
					</div>
					<div className='condition'>
						<button onClick={() => setPrecautionsModal(!precautionsModal)}>
							احتياطات أثناء السفر {activeTab === "china" ? "للصين" : "لدبي"}
						</button>
						{precautions ? <OK /> : <OKBlack />}
					</div>
				</div>

				<button
					type='button'
					onClick={handleSendRegisterRequest}
					disabled={
						isLoading || !precautions || !registrationPolicy || btnLoading
					}>
					{btnLoading ? <LoadingWebSite /> : "التسجيل و الدفع"}
				</button>
			</div>
		</div>
	);
}

export default RegisterForm;
