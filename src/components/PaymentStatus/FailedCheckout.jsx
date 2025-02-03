import React from "react";
import { Button } from "react-bootstrap";
import { FailedCheckoutIcon } from "../../assets/Icons";

const FailedCheckout = () => {
	return (
		<div className='container'>
			<div
				className='d-flex justify-content-center flex-column align-items-center'
				style={{ width: "100%", height: "90vh", margin: "0 auto" }}>
				<FailedCheckoutIcon style={{ marginBottom: "20px", width: "150px" }} />
				<h1>مع الآسف</h1>
				<p style={{ fontSize: "22px" }}>
					فشلت عملية الدفع يرجى المحاولة لاحقاً
				</p>
				<Button
					href='/'
					style={{ backgroundColor: "#1dbbbe", color: "#fff", border: "none" }}>
					الصفحة الرئيسية
				</Button>
			</div>
		</div>
	);
};

export default FailedCheckout;
