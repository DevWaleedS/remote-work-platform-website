import React from "react";
import "./PartnerBox.css";
const PartnerBox = ({ Img }) => {
	return (
		<div className='partner-box'>
			<div className='box-img'>
				<img width='100%' height='100%' src={Img} alt='' loading='lazy' />
			</div>
		</div>
	);
};

export default PartnerBox;
