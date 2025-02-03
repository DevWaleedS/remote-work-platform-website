import React from "react";
import "./LoadingPage.css";
import { Logo } from "../../assets/Img";

function LoadingPage() {
	return (
		<div className='loading'>
			<div className='logo'>
				<img width='100%' height='100%' src={Logo} alt='logo' />
			</div>
		</div>
	);
}

export default LoadingPage;
