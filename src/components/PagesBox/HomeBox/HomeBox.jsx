import React from "react";

// Third party
import { useNavigate } from "react-router-dom";

// Components
import {
	ReviewSwiper,
	PartnerSwiper,
	WhatWeOffer,
	FeaturedStores,
	SubscribePackages,
	HeroBanners,
	WhyAtlbha,
} from "../../index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// css styles
import "./HomeBox.css";

// Icons
import { MainTitle } from "../../index";
import WhyUs from "../../whyUs/WhyUs";

const HomeBox = ({
	homePageData,

	isFetching,
	setUseDisplayStores,
}) => {
	const navigate = useNavigate();

	// ------------------------------------------------------------------

	return (
		<>
			{/* ============= Hero Banners ===================== */}
			<HeroBanners homePageData={homePageData} navigate={navigate} />

			{/* ============= What We Offer ===================== */}
			<WhatWeOffer />

			{/* ============= Why Atlbha ===================== */}
			<WhyAtlbha />

			{/* ============= Our Packages ===================== */}
			<div className='our-package '>
				<div className='container'>
					<MainTitle text={"باقات مُدَار"} />
					<SubscribePackages />
				</div>
			</div>

			<WhyUs />

			{/* ============= Our Partners ===================== */}
			{homePageData?.partners?.length > 0 ? (
				<>
					<MainTitle text={"شركاء النجاح"} />
					<PartnerSwiper PartnerDataSwiper={homePageData?.partners} />
				</>
			) : null}

			{/* ============= Featured Stores ===================== */}
			{homePageData?.content_section4?.length > 0 ? (
				<FeaturedStores
					isFetching={isFetching}
					homePageData={homePageData}
					setUseDisplayStores={setUseDisplayStores}
				/>
			) : null}

			{/* ============= Our Reviews ===================== */}
			{homePageData?.comment?.length > 0 ? (
				<>
					<MainTitle text={"قالوا عنا"} />
					<ReviewSwiper DataReviewSwiper={homePageData?.comment} />
				</>
			) : null}
		</>
	);
};

export default HomeBox;
