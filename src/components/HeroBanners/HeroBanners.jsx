import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroBanners = ({ homePageData, navigate }) => {
	// navigate to auth/login by default
	const navigateToMerchantRegister = () => {
		window.location.href = "https://store.atlbha.com/compare-packages";
	};

	const slides = [
		homePageData?.slider1,
		// homePageData?.slider1,
		// homePageData?.slider1,
	].filter(Boolean);

	const isLoopEnabled = slides.length >= 2; // Enable loop only if enough slides

	return (
		<div className='hero'>
			<Swiper
				effect='fade'
				loop={isLoopEnabled} // Dynamically enable loop
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				modules={[Pagination, EffectFade, Autoplay]}
				className='my_hero_swiper'>
				{slides.map((slide, index) => (
					<SwiperSlide key={index} className='my_hero_swiper_slide'>
						<div
							className='swiper_image'
							style={{
								backgroundImage: `url(${slide})`,
								cursor: index > 0 ? "pointer" : "default",
							}}>
							<div className='content'>
								<h1>مُدَار: منصتك الذكية لإدارة الموظفين عن بُعد</h1>

								<p>
									حوّل إدارة فريقك مع مُدَار، منصتك الشاملة لإدارة الموظفين عن
									بُعد! 🚀 تابع الأداء، نظّم المهام، وأدِر الرواتب والتواصل من
									مكان واحد بكل سهولة.
								</p>
								<button
									className='bt-main'
									onClick={navigateToMerchantRegister}>
									اشترك الآن
								</button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroBanners;
