// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";
import { MdCircle } from "react-icons/md";

import "swiper/css";
import "swiper/css/effect-creative";

import "./ReviewSwiper.css";

//----
import ReviewBox from "./ReviewBox.jsx";
import { DemoImage } from "../../../assets/Img/index.js";
import MainTitle from "../../MainTitle/MainTitle.jsx";

const reviewsArray = [
	{
		id: 1,
		reviewText:
			"مع   منصة المعرفة للعمل عن بُعد، وجدت شريكًا حقيقيًا يدعمني في كل خطوة في رحلتي العملية. من اللحظة التي قدمت فيها طلبي، شعرت بالاهتمام الكامل والتواصل المستمر. كان فريقهم محترفًا للغاية، وقدموا لي نصائح واقعية ومفيدة قادتني لاتخاذ أفضل القرارات و. بدونهم، ما كنت لأحقق هذا النجاح في استثماري. أوصي بهم لأي شخص يبحث عن خبرة واحترافية حقيقية.",
		name: "محمد عبد العزيز",
		company: "مؤسس شركة الأمل",
	},
	{
		id: 2,
		name: "وليد صلاح ",
		reviewText: "ارشح هذه المنصة  لكل من يبحث عن النجاح",
		company: "مهندس برمجيات",
	},
];

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
						<h3 className='why-title mt-3'>
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
							loop={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: [0, 0, -400],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							grabCursor={true}
							slidesPerView={1}
							navigation={false}
							centeredSlides={false}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							modules={[Autoplay, EffectCreative]}
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

							{reviewsArray?.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<ReviewBox
											Img={DemoImage}
											ownerName={item.name}
											companyName={item.company}
											text={item.reviewText}
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
