import React, { useRef } from "react";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const ProductCard = ({
	items,
	product,
	setIsOpenPopup,
	isOpenPopup,
	setIdProduct,
}) => {
	const swiperRefs = useRef(new Map());

	const isLoopEnabled = items?.length >= 5;

	return (
		<>
			<div
				className='new-product-card'
				data-aos='fade-right'
				data-aos-once='true'>
				<Swiper
					className='soq-product-swiper'
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, EffectFade]}
					effect='fade'
					loop={isLoopEnabled} // Enable loop only if enough slides
					slidesPerView={1}
					onSwiper={(swiper) => swiperRefs?.current?.set(product.id, swiper)}>
					{[
						{
							id: "cover-" + product.id,
							image: product.cover,
						},
						...product.images,
					].map((img) => (
						<SwiperSlide key={img.id}>
							<div className='img-box'>
								<img src={img.image} alt={product.name} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className='text-box'>
					<h2 className='title'>{product.name}</h2>
					<p className='description'>{product.short_description}</p>
					<ul className='price'>
						<li>{product.selling_price} ر.س</li>
					</ul>
					<button
						className='display-more-btn btn'
						onClick={() => {
							setIsOpenPopup(!isOpenPopup);
							setIdProduct(product.id);
						}}>
						شراء المنتج
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
