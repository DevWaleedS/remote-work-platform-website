import React from "react";
import "./PartnerBox.css";
const PartnerBox = ({ Img }) => {
	return (
		<div className='partner-box text-center'>
			<img className=' img-fluid' src={Img} alt='' loading='lazy' />
		</div>
	);
};

export default PartnerBox;
