import React, { useState } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

// Import Styles Files
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import {
	FloatingWhatsappIcon,
	FooterOverlay,
	Header,
	LoadingPage,
	NotFoundPage,
	WhatWeOfferDetails,
} from "../components";
import { Home } from "./index";

// RTK Query
import { useGetHomePageDataQuery } from "../RTK/Api/homeApi";
import { FooterLogo } from "../assets/Img";

const Blog = React.lazy(() => import("./Blog"));

const BlogDetail = React.lazy(() => import("./BlogDetail"));
const WebsitePages = React.lazy(() => import("./WebsitePages"));

const AboutUs = React.lazy(() => import("./AboutUs/AboutUs"));
const Services = React.lazy(() => import("./Services/Services"));
const PackagesPage = React.lazy(() => import("./PackagesPage/PackagesPage"));

const SuccessCheckOut = React.lazy(
	() => import("../components/PaymentStatus/SuccessCheckout")
);
const FailedCheckout = React.lazy(
	() => import("../components/PaymentStatus/FailedCheckout")
);

const ContactUs = React.lazy(() => import("./ContactUs/ContactUs"));
const Faqs = React.lazy(() => import("./Faqs/Faqs"));

const AllPages = () => {
	// to handle pagination of stores
	const [pageTarget, setPageTarget] = useState(1);
	const [displayStores, setUseDisplayStores] = useState(12);

	// const {
	// 	data: homePageData,
	// 	isLoading,
	// 	isFetching,
	// } = useGetHomePageDataQuery({
	// 	page: pageTarget,
	// 	number: displayStores,
	// });

	return (
		<>
			<div className='w-100 overflow-hidden'>
				<BrowserRouter
					future={{
						v7_startTransition: true,
						v7_relativeSplatPath: true,
					}}>
					{/*					<Header homeFooter={homePageData?.footer} />*/}
					<Header />

					<ToastContainer
						rtl
						draggable
						closeOnClick
						pauseOnHover
						autoClose={5000}
						pauseOnFocusLoss
						position='top-right'
						newestOnTop={false}
						hideProgressBar={false}
						theme='colored'
						style={{ fontSize: "14px", color: "#000", whiteSpace: "normal" }}
					/>

					<Routes>
						<Route
							path=''
							element={
								<Suspense fallback={<LoadingPage />}>
									{/*<Home
										isFetching={isFetching}
										homePageData={homePageData}
										homeLoadingData={isLoading}
										pageTarget={pageTarget}
										setPageTarget={setPageTarget}
										displayStores={displayStores}
										setUseDisplayStores={setUseDisplayStores}
									/>*/}

									<Home
										pageTarget={pageTarget}
										setPageTarget={setPageTarget}
										displayStores={displayStores}
										setUseDisplayStores={setUseDisplayStores}
									/>
								</Suspense>
							}
						/>
						<Route
							path='/about-us'
							element={
								<Suspense fallback={<LoadingPage />}>
									<AboutUs />
								</Suspense>
							}
						/>

						<Route
							path='/services'
							element={
								<Suspense fallback={<LoadingPage />}>
									<Services />
								</Suspense>
							}
						/>
						<Route
							path='/success'
							element={
								<Suspense>
									<SuccessCheckOut />
								</Suspense>
							}
						/>
						<Route
							path='/failed'
							element={
								<Suspense>
									<FailedCheckout />
								</Suspense>
							}
						/>

						<Route
							path='/packages'
							element={
								<Suspense fallback={<LoadingPage />}>
									<PackagesPage />
								</Suspense>
							}
						/>
						<Route
							path='/blog'
							element={
								<Suspense fallback={<LoadingPage />}>
									<Blog />
								</Suspense>
							}
						/>
						<Route
							path='/post/:id/:title'
							element={
								<Suspense fallback={<LoadingPage />}>
									<BlogDetail />
								</Suspense>
							}
						/>

						<Route
							path='/Page/:id/:title'
							element={
								<Suspense fallback={<LoadingPage />}>
									<WebsitePages />
								</Suspense>
							}
						/>
						<Route
							path='/whatWeOffer/:title'
							element={<WhatWeOfferDetails />}
						/>

						<Route
							path='/contact-us'
							element={
								<Suspense>
									<ContactUs />
								</Suspense>
							}
						/>

						<Route
							path='/faqs'
							element={
								<Suspense fallback={<LoadingPage />}>
									<Faqs />
								</Suspense>
							}
						/>

						<Route path='*' element={<NotFoundPage />} />
					</Routes>

					{/*<FooterOverlay

						registrationMarketer={homePageData?.registration_marketer}
						linkWebsite={homePageData?.website_socialmedia}
						
						homeFooter={homePageData?.footer}
					/>*/}

					<FooterOverlay logoFooter={FooterLogo} />
				</BrowserRouter>

				<FloatingWhatsappIcon logo={FooterLogo} />
			</div>
		</>
	);
};

export default AllPages;
