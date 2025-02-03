import React from "react";
import "./MainTitle.css";
const MainTitle = ({ text }) => {
	return (
		<>
			<div className='main-title justify-content-center justify-content-md-start'>
				<h3>{text}</h3>
			</div>
		</>
	);
};

export default MainTitle;
