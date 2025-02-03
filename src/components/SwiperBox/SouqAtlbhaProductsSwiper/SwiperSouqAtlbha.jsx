import React from "react";

import "../ProductSwiper/SwiperProduct.css";

const SwiperSouqAtlbha = ({ Img, Name, short_description, Mark, Url }) => {
	return (
		<>
			<div className='swiper-product'>
				<a href={Url} target='_blank' className='box' rel='noreferrer'>
					<div className='box-img'>
						<img width='100%' height='100%' src={Img} alt='' loading='lazy' />
					</div>

					<div className='soq-product-content'>
						<div className=' head-content'>
							<h6>{Name}</h6>
						</div>
						<p className='product-description'>{short_description}</p>
						<p className='products-price in-home-page d-flex justify-content-end'>
							{Mark} <span className='currency'>ر.س </span>
						</p>
					</div>
				</a>
			</div>
		</>
	);
};

export default SwiperSouqAtlbha;
