import React, { useState } from "react";

// third party
import axios from "axios";
import { Helmet } from "react-helmet-async";

// components
import PageTitle from "../../components/PagesTitle/PageTitle";
import { toast } from "react-toastify";
import { CallIcon, EmailIcon, SendIcon } from "../../assets/Icons";
import { ContactUsImg } from "../../assets/Img";

import "./ContactUs.css";

const ContactUs = () => {
	const [contactUsInfo, setContactUsInfo] = useState({
		name: "",
		email: "",
		title: "",
		content: "",
	});
	const handleOnChangeContactInfo = (e) => {
		const { name, value } = e.target;
		setContactUsInfo((prevState) => {
			return { ...prevState, [name]: value };
		});
	};
	// -----------------------------------------------------------------------------------

	//  Handle Errors
	const [contactErrors, setContactErrors] = useState({
		name: "",
		email: "",
		title: "",
		content: "",
	});
	const resetErrors = () => {
		setContactErrors({
			name: "",
			email: "",
			title: "",
			content: "",
		});
	};

	const resetContactUsInfo = () => {
		setContactUsInfo({
			name: "",
			email: "",
			title: "",
			content: "",
		});
	};
	// -----------------------------------------------------------------------------------

	// Add ContactUs Info FUNCTION
	const AddContactUsInfo = () => {
		resetErrors();
		let formData = new FormData();
		formData.append("name", contactUsInfo?.name);
		formData.append("email", contactUsInfo?.email);
		formData.append("title", contactUsInfo?.title);
		formData.append("content", contactUsInfo?.content);

		axios
			.post("https://backend.atlbha.com/api/atlobhaContactAdd", formData)
			.then((res) => {
				if (res?.data?.success === true && res?.data?.data?.status === 200) {
					// display modal with message
					toast.success(res?.data?.message?.ar);

					// reset inputs
					resetContactUsInfo();
				} else {
					setContactErrors({
						name: res?.data?.message?.en?.name?.[0],
						email: res?.data?.message?.en?.email?.[0],
						title: res?.data?.message?.en?.title?.[0],
						content: res?.data?.message?.en?.content?.[0],
					});

					toast.error(res?.data?.message?.en?.name?.[0]);
					toast.error(res?.data?.message?.en?.email?.[0]);
					toast.error(res?.data?.message?.en?.title?.[0]);
					toast.error(res?.data?.message?.en?.content?.[0]);
				}
			});
	};
	return (
		<>
			<Helmet>
				<title>مُدَار | تواصل معنا</title>
				<meta
					name='description'
					content='ابدأ مع مُدَار بوابتك للتجارة الإلكترونية'
				/>
			</Helmet>
			<div className='contact-us-page'>
				<div className='container'>
					<PageTitle title={" اتصل بنا"} />
					<div className='content'>
						<div className='contact-info text-center'>
							<h3> تواصل معنا بكل سهولة </h3>
							<p className='text-center'>
								نحن سعداء أن نستقبل استفساراتكم واقتراحاتكم لنقدم لكم خدمة مميزة
							</p>
						</div>

						<section className=' section-wrapper d-flex justify-content-center align-items-center gap-5 bg-white p-5 '>
							<form
								action='#'
								className='contact-form d-flex flex-column gap-3'>
								<div className='input-group d-flex flex-column gap-1'>
									<label> الاسم يالكامل </label>
									<input
										name='name'
										value={contactUsInfo?.name}
										onChange={handleOnChangeContactInfo}
										type='text'
										placeholder=' ادخل اسمك الكامل '
									/>
									{contactErrors?.name && (
										<div
											className={"wrong-text w-100"}
											style={{
												color: "red",
												fontSize: "16px",
											}}>
											{contactErrors?.name}
										</div>
									)}
								</div>

								<div className='input-group d-flex flex-column gap-1'>
									<label>البريد الالكتروني</label>
									<input
										name='email'
										value={contactUsInfo?.email}
										onChange={handleOnChangeContactInfo}
										type='email'
										placeholder='ادخل البريد الالكتروني'
									/>
									{contactErrors?.email && (
										<div
											className={"wrong-text w-100"}
											style={{
												color: "red",
												fontSize: "16px",
											}}>
											{contactErrors?.email}
										</div>
									)}
								</div>
								<div className='input-group d-flex flex-column gap-1'>
									<label>عنوان الرسالة</label>
									<input
										name='title'
										value={contactUsInfo?.title}
										onChange={handleOnChangeContactInfo}
										type='text'
										placeholder=' ادخل عنوان الرسالة'
									/>
									{contactErrors?.title && (
										<div
											className={"wrong-text w-100"}
											style={{
												color: "red",
												fontSize: "16px",
											}}>
											{contactErrors?.title}
										</div>
									)}
								</div>
								<div className='input-group d-flex flex-column gap-1 '>
									<label>تفاصيل الرسالة</label>
									<input
										name='content'
										value={contactUsInfo?.content}
										onChange={handleOnChangeContactInfo}
										type='text'
										placeholder=' ادخل تفاصيل الرسالة'
									/>
									{contactErrors?.content && (
										<div
											className={"wrong-text w-100"}
											style={{
												color: "red",
												fontSize: "16px",
											}}>
											{contactErrors?.content}
										</div>
									)}
								</div>
								<button
									disabled={
										!contactUsInfo?.nama &&
										!contactUsInfo?.email &&
										!contactUsInfo?.title &&
										!contactUsInfo?.content
											? true
											: false
									}
									onClick={AddContactUsInfo}
									type='button'>
									ارسال الطلب
								</button>
							</form>
							<div className=' d-flex flex-column justify-content-center  gap-5'>
								<SendIcon />

								<EmailIcon />

								<CallIcon />
							</div>
							<div className='contact-img-wrapper'>
								<img src={ContactUsImg} alt='contact-us' />
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
