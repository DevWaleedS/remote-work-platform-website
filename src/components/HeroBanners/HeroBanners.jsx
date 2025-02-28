import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Banner01, Banner02 } from "../../assets/Img";

const HeroBanners = ({ homePageData, navigate }) => {
	// navigate to auth/login by default
	const navigateToMerchantRegister = () => {
		window.location.href = "https://client-admin.b2030.net/register";
	};

	const slides = [
		{ id: 1, image: Banner01 },
		{ id: 2, image: Banner02 },
		{ id: 3, image: Banner01 },
	].filter(Boolean);

	const isLoopEnabled = slides.length >= 2; // Enable loop only if enough slides

	return (
		<div className='hero'>
			<Swiper
				effect='fade'
				loop={isLoopEnabled} // Dynamically enable loop
				autoplay={{
					delay: 4000,
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
								backgroundImage: `url(${slide.image})`,
							}}>
							<div className='content'>
								<h1>شركة المعرفة لتقنية المعلومات</h1>

								<h2 style={{}}>منصتك الذكية لإدارة الموظفين عن بُعد</h2>

								<p>
									حوّل إدارة فريقك مع شركة المعرفة لتقنية المعلومات، منصتك
									الشاملة لإدارة الموظفين عن بُعد! 🚀 تابع الأداء، نظّم المهام،
									وأدِر الرواتب والتواصل من مكان واحد بكل سهولة.
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
