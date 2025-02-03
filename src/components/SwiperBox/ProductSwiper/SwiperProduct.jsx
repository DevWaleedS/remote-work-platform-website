import React from "react";
import "./SwiperProduct.css";
import { AiFillStar } from "react-icons/ai";

const SwiperProduct = ({ Img, Name, Evaluate, Mark, Url }) => {
	return (
		<>
			<div className='swiper-product' data-aos='fade-down' data-aos-once='true'>
				<a href={Url} target='_blank' className='box' rel='noreferrer'>
					<div className='box-img'>
						<img
							width='100%'
							height='100%'
							src={Img}
							alt={Name}
							loading='lazy'
						/>
					</div>

					<div className='content'>
						<hr />
						<h6>{Name}</h6>
						<div className='info'>
							<span>
								{Number(Evaluate).toFixed(1)}
								<AiFillStar />
							</span>
							<bdi>{Mark} ر.س</bdi>
						</div>
					</div>
				</a>
			</div>
		</>
	);
};

export default SwiperProduct;
