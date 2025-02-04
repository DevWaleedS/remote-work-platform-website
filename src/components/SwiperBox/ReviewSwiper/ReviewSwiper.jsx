// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
import { MdCircle } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReviewSwiper.css";

//----
import ReviewBox from "./ReviewBox.jsx";
import { DemoImage } from "../../../assets/Img/index.js";
import MainTitle from "../../MainTitle/MainTitle.jsx";

let ReviewSwiper = ({ DataReviewSwiper }) => {
	return (
		<div className='our-review '>
			<div className='container'>
				<section className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-5'>
					<div
						className='our-review_text-content'
						data-aos='fade-up'
						data-aos-once='true'>
						<MainTitle text={"تقييمات عملاؤنا"} />
						<h3 class='why-title mt-3'>
							استمع إلى عملائنا كيف ساعدناهم في تحقيق أهدافهم بنجاح واحترافية
						</h3>
						<p className='why-text'>
							نحن فخورون بعملائنا الراضين الذين يشاركوننا تجاربهم الإيجابية.
							نؤمن أن أفضل دليل على جودة خدماتنا هو رضا عملائنا وثقتهم بنا.
							اكتشف ما يقوله عملاؤنا عن الاستشارات والخدمات التي نقدمها، وكيف
							ساعدناهم في تحقيق أهدافهم بطريقة سلسة وموثوقة. انضم إلى مجموعة
							عملائنا السعداء وكن جزءًا من رحلتنا المتميزة
						</p>
					</div>

					<div
						className='our-review_img-content position-relative'
						data-aos='fade-up'
						data-aos-once='true'
						data-aos-delay='600'>
						<MdCircle className='circle-icon top' />

						<Swiper
							effect={"fade"}
							slidesPerView={1}
							loop={true}
							// autoplay={{
							// 	delay: 2000,
							// 	disableOnInteraction: false,
							// }}
							navigation={false}
							centeredSlides={false}
							freeMode={true}
							modules={[Autoplay, FreeMode]}
							className='swiper-review '>
							{/*{DataReviewSwiper.length
							? DataReviewSwiper.map((el) => {
									return (
										<SwiperSlide key={el?.id}>
											<ReviewBox
												Img={el?.store?.logo}
												text={el?.comment_text}
											/>
										</SwiperSlide>
									);
							  })
							: null}*/}

							{Array.from({ length: 5 })?.map((_, index) => {
								return (
									<SwiperSlide key={index}>
										<ReviewBox
											Img={DemoImage}
											ownerName='محمد عبد العزيز'
											companyName='مؤسس شركة الأمل'
											text={"ارشح هذه المنصة لكل من يبحث عن النجاح"}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
						<MdCircle className='circle-icon bottom' />
					</div>
				</section>
			</div>
		</div>
	);
};
export default ReviewSwiper;
