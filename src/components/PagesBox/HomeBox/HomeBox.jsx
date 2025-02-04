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

// components
import WhyUs from "../../whyUs/WhyUs";

/*{
		homePageData,
		isFetching,
		setUseDisplayStores,
	}*/
const HomeBox = () => {
	const navigate = useNavigate();

	// ------------------------------------------------------------------

	return (
		<>
			{/* ============= Hero Banners ===================== */}
			<HeroBanners navigate={navigate} />
			{/*			<HeroBanners homePageData={homePageData} navigate={navigate} />*/}

			{/* ============= What We Offer ===================== */}
			<WhatWeOffer />

			{/* ============= Why Atlbha ===================== */}
			<WhyAtlbha />

			{/* ============= Our Partners ===================== */}
			{/*{homePageData?.partners?.length > 0 ? (
				<>
					<PartnerSwiper PartnerDataSwiper={homePageData?.partners} />
				</>
			) : null}
*/}

			<PartnerSwiper />

			<WhyUs />

			{/* ============= Our Packages ===================== */}
			<div className='our-package '>
				<div className='container'>
					<SubscribePackages />
				</div>
			</div>

			{/*{homePageData?.content_section4?.length > 0 ? (
				<FeaturedStores
					isFetching={isFetching}
					homePageData={homePageData}
					setUseDisplayStores={setUseDisplayStores}
				/>
			) : null}*/}

			<FeaturedStores />

			{/* ============= Our Reviews ===================== */}
			{/*{homePageData?.comment?.length > 0 ? (
				<>
					<ReviewSwiper DataReviewSwiper={homePageData?.comment} />
				</>
			) : null}*/}

			<ReviewSwiper />
		</>
	);
};

export default HomeBox;
