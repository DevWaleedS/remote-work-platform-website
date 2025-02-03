import React from "react";
import "./ReviewBox.css";
import DOMPurify from "dompurify";

const ReviewBox = ({ text, Img }) => {
	return (
		<div className='review-box'>
			<div className='box-img'>
				<img width='100%' height='100%' src={Img} alt='' loading='lazy' />
			</div>
			<h5
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(text),
				}}
			/>
		</div>
	);
};

export default ReviewBox;
