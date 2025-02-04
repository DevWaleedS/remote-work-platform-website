import React, { useEffect, useState } from "react";

// third party
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";

// RTK QUERY
import { useGetServicesQuery } from "../../RTK/Api/servicesApi";

// components
import OrderService from "./OrderService";
import PageTitle from "../../components/PagesTitle/PageTitle";

// MUI
import { Pagination, Select, MenuItem } from "@mui/material";

// Icons
import { Star } from "../../assets/Icons";
import { IoIosArrowDown } from "react-icons/io";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LoadingPage } from "../../components";

function Services() {
	const [selectedId, setSelectedId] = useState(0);
	const [openOrderServiceModal, setOpeOrderServiceModal] = useState(false);
	const [pageNumber, setPageNumber] = useState(16);
	const [currentPage, setCurrentPage] = useState(1);

	const { data: servicesData, isLoading } = useGetServicesQuery({
		pageNumber,
		currentPage,
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleOpenOrderServiceModal = () => {
		setOpeOrderServiceModal(true);
	};

	const handleServiceClick = (serviceId) => {
		setSelectedId(serviceId === selectedId ? 0 : serviceId);
	};

	return (
		<>
			<Helmet>
				<title>مُدَار | خدماتنا</title>
				<meta
					name='description'
					content='استكشف مجموعتنا الواسعة من الخدمات المصممة خصيصًا لتمكين متجرك الإلكتروني من النجاح والتألق في عالم التجارة الإلكترونية. من التصميم البصري المبتكر إلى الحلول اللوجستية المتقدمة'
				/>
			</Helmet>
			<div className='services'>
				<div className='container'>
					<PageTitle title={"خدماتنا"} />

					{isLoading ? (
						<LoadingPage />
					) : (
						<>
							<div className='boxes' data-aos-once='true' data-aos='fade-up'>
								{/*{servicesData?.Services?.map((service) => (
									<div
										key={service?.id}
										role='button'
										tabIndex={0}
										onClick={() => handleServiceClick(service?.id)}
										onKeyDown={(e) =>
											e.key === "Enter" && handleServiceClick(service?.id)
										}
										className={`${
											service?.id === selectedId ? "selected" : ""
										} box-${service?.id} box`}
										aria-expanded={service?.id === selectedId}>
										<div className='star-icon'>
											<Star />
										</div>
										<p className='service-title'>{service?.name}</p>
										<div className='arrow'>
											<KeyboardArrowDownIcon />
										</div>

										{service?.id === selectedId && (
											<div className='detalis'>
												<div
													className='desc'
													dangerouslySetInnerHTML={{
														__html: DOMPurify.sanitize(service?.description),
													}}
												/>
												<div className='services-btn-container d-flex justify-content-between align-items-center gap-2 mb-3 px-3'>
													<button
														onClick={handleOpenOrderServiceModal}
														className='order-service-btn d-flex justify-content-center align-items-center'
														aria-label='طلب الخدمة'>
														طلب الخدمة
													</button>
													<div className='service-price d-flex justify-content-center align-items-center'>
														{service?.price}{" "}
														<span className='currency'>ر.س</span>
													</div>
												</div>
											</div>
										)}
									</div>
								))}*/}
								{Array.from({ length: 12 })?.map((_, index) => (
									<div
										key={index}
										role='button'
										tabIndex={0}
										onClick={() => handleServiceClick(index)}
										onKeyDown={(e) =>
											e.key === "Enter" && handleServiceClick(index)
										}
										className={`${
											index === selectedId ? "selected" : ""
										} box-${index} box`}
										aria-expanded={index === selectedId}>
										<div className='star-icon'>
											<Star />
										</div>
										<p className='service-title'>اسم الخدمة</p>
										<div className='arrow'>
											<KeyboardArrowDownIcon />
										</div>

										{index === selectedId && (
											<div className='detalis'>
												<div
													className='desc'
													dangerouslySetInnerHTML={{
														__html: DOMPurify.sanitize("محتوى الخدمة"),
													}}
												/>
												<div className='services-btn-container d-flex justify-content-between align-items-center gap-2 mb-3 px-3'>
													<button
														onClick={handleOpenOrderServiceModal}
														className='order-service-btn d-flex justify-content-center align-items-center'
														aria-label='طلب الخدمة'>
														طلب الخدمة
													</button>
													<div className='service-price d-flex justify-content-center align-items-center'>
														1000 <span className='currency'>ر.س</span>
													</div>
												</div>
											</div>
										)}
									</div>
								))}
							</div>
							{servicesData?.Services.length > 0 || !isLoading ? (
								<div
									className='btn-container-row mb-4'
									style={{
										justifyContent:
											servicesData?.page_count > servicesData?.current_page
												? null
												: "center",
									}}>
									<div className='row-per-page-box'>
										<i>
											<IoIosArrowDown style={{ width: "22px" }} />
										</i>
										عدد الصفوف
										<Select
											value={pageNumber}
											onChange={(event) => {
												setPageNumber(event.target.value);
												setCurrentPage(1);
											}}
											aria-label='عدد الصفوف في الصفحة'>
											{[10, 16, 20, 30, 50, 60, 80, 100].map((item) => (
												<MenuItem key={item} value={item}>
													{item}
												</MenuItem>
											))}
										</Select>
									</div>

									{servicesData?.page_count > servicesData?.current_page &&
									!isLoading ? (
										<Pagination
											count={servicesData.page_count}
											page={currentPage}
											onChange={(event, value) => {
												setCurrentPage(value);
											}}
											aria-label='تصفح الصفحات'
										/>
									) : null}
								</div>
							) : null}
						</>
					)}
				</div>
			</div>

			<OrderService
				id={selectedId}
				openOrderServiceModal={openOrderServiceModal}
				setOpeOrderServiceModal={setOpeOrderServiceModal}
			/>
		</>
	);
}

export default Services;
