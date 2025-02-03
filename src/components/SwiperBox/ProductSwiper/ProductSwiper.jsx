import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./ProductSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperProduct from "./SwiperProduct";

let ProductSwiper = React.memo(({ productSwiperData }) => {
	const swiperRefLocal = useRef();

	const isLoopEnabled = productSwiperData?.length >= 5;

	const handleMouseEnter = () => {
		swiperRefLocal?.current?.swiper?.autoplay?.stop();
	};

	const handleMouseLeave = () => {
		swiperRefLocal?.current?.swiper?.autoplay?.start();
	};

	return (
		<div
			className='h-100'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<Swiper
				ref={swiperRefLocal}
				spaceBetween={25}
				slidesPerGroup={1}
				centeredSlides={false}
				loopfillgroupwithblank='true'
				loop={isLoopEnabled} // Enable loop only if enough slides
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					400: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 6,
					},
				}}
				navigation={false}
				modules={[Pagination, Navigation, Autoplay]}
				className='mySwiper products_swiper'>
				{productSwiperData?.map((el) => {
					return (
						<SwiperSlide key={el.id} id={el.id}>
							<SwiperProduct
								Img={el.cover}
								Name={el.name}
								Evaluate={el.productRating}
								Mark={el.selling_price}
								Url={el.url}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
});
export default ProductSwiper;
