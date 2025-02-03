import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import LoadingPage from "./LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";

const ShowAllProductsButton = ({ navigateTo, isLoading }) => {
	const navigate = useNavigate();

	// to handle scroll to top
	const goUpWindow = () => {
		window.scroll(0, 0);
	};
	if (isLoading) {
		return <LoadingPage />;
	}

	return (
		<div className='col-12'>
			<div
				className='more-service-btn'
				onClick={() => {
					navigate(navigateTo);
					goUpWindow();
				}}>
				المزيد من المنتجات
				<HiOutlineArrowNarrowLeft />
			</div>
		</div>
	);
};

export default ShowAllProductsButton;
