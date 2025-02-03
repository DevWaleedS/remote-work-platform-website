import React from "react";
import { Button } from "react-bootstrap";
import { SuccessCheckoutIcon } from "../../assets/Icons";

const SuccessCheckout = () => {
	return (
		<div className='container'>
			<div
				className='d-flex justify-content-center flex-column align-items-center'
				style={{ width: "100%", height: "90vh", margin: "0 auto" }}>
				<SuccessCheckoutIcon style={{ marginBottom: "20px", width: "150px" }} />
				<h1>شكراً لك</h1>
				<p style={{ fontSize: "22px" }}>تم الاشتراك في الخدمة بنجاح</p>
				<Button
					href='/'
					style={{ backgroundColor: "#1dbbbe", color: "#fff", border: "none" }}>
					الصفحة الرئيسية
				</Button>
			</div>
		</div>
	);
};

export default SuccessCheckout;
