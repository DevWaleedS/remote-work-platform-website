import React from "react";
import DOMPurify from "dompurify";
import { FaQuoteRight, FaStar } from "react-icons/fa6";

const ReviewBox = ({ text, Img, ownerName, companyName }) => {
	return (
		<div className='review-box'>
			<FaQuoteRight className='quote-icon' />
			<p
				className='review-text'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(text),
				}}
			/>
			<div className='owner-info-box d-flex justify-content-between align-items-center'>
				<div className='d-flex justify-content-start align-items-center'>
					<img className='rounded-circle' src={Img} alt='' loading='lazy' />
					<div className='d-flex flex-column '>
						<h3>{ownerName}</h3>
						<h6>{companyName}</h6>
					</div>
				</div>

				<div className='d-flex justify-content-end align-items-center gap-1'>
					{[...Array(5)].map((_, index) => (
						<FaStar key={index} className='star-icon' />
					))}
				</div>
			</div>
		</div>
	);
};

export default ReviewBox;
