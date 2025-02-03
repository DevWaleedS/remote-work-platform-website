import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "../ProductSwiper/ProductSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PopupNotification from "../../Popup/PopupNotification";
import ProductCard from "../../Products/ProductCard";

const SouqAtlbhaSwiper = React.memo(({ productSwiperData }) => {
	const swiperRefLocal = useRef();

	const [isOpenPopup, setIsOpenPopup] = useState(false);
	const [idProduct, setIdProduct] = useState(null);

	const handleMouseEnter = () => {
		swiperRefLocal?.current?.swiper?.autoplay?.stop();
	};

	const handleMouseLeave = () => {
		swiperRefLocal?.current?.swiper?.autoplay?.start();
	};

	// Check if the number of slides is enough for loop mode
	const isLoopEnabled = productSwiperData?.length >= 5;

	return (
		<div
			className='all'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<Swiper
				ref={swiperRefLocal}
				spaceBetween={30}
				slidesPerGroup={1}
				centeredSlides={false}
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
						slidesPerView: 5,
					},
				}}
				navigation={false}
				modules={[Pagination, Navigation, Autoplay]}
				className='mySwiper mySwiper_products_swiper'>
				{productSwiperData?.map((product) => {
					return (
						<SwiperSlide key={product.id} id={product.id}>
							<ProductCard
								product={product}
								key={product.id}
								setIsOpenPopup={setIsOpenPopup}
								isOpenPopup={isOpenPopup}
								setIdProduct={setIdProduct}
								items={productSwiperData}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<PopupNotification
				isOpenPopup={isOpenPopup}
				setIsOpenPopup={setIsOpenPopup}
				idProduct={idProduct}
			/>
		</div>
	);
});

export default SouqAtlbhaSwiper;
