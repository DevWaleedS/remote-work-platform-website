// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./ReviewSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewBox from "./ReviewBox.jsx";
import { DemoImage } from "../../../assets/Img/index.js";

let ReviewSwiper = ({ DataReviewSwiper }) => {
	const isLoopEnabled = DataReviewSwiper?.length >= 5;

	return (
		<div className='our-review '>
			<div className='container'>
				<div
					className='all p-main'
					data-aos='fade-up'
					data-aos-once='true'
					data-aos-delay='600'>
					<Swiper
						effect={"fade"}
						slidesPerView={2}
						spaceBetween={40}
						slidesPerGroup={1}
						loop={isLoopEnabled} // Enable loop only if enough slides
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						breakpoints={{
							200: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
						}}
						navigation={false}
						modules={[Pagination, Navigation, Autoplay]}
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
										text={"ارشح هذه المنصة لكل من يبحث عن النجاح"}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</div>
	);
};
export default ReviewSwiper;
