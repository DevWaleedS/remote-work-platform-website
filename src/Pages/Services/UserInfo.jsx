import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import "./UserInfo.css";

import { useGetServicesSelectorQuery } from "../../RTK/Api/selectoresApis/selectServicesApi";

const animatedComponents = makeAnimated();

const UserInfo = ({ errors, data, handleOnChangeData, setErrors }) => {
	const { data: servicesSelector } = useGetServicesSelectorQuery();

	const options = servicesSelector?.map((ser) => ({
		value: ser?.id,
		label: ser?.name,
		price: ser?.price,
	}));

	return (
		<div className='select-user-type text-end mb-5'>
			<h2 className='mb-3'>بيانات العميل</h2>

			<div className='d-flex justify-content-start align-items-center gap-2'>
				<div className='row'>
					<div className=' col-12 mb-3 input-group'>
						<div className='mb-1'>
							<label className='user-info-label'>الاسم بالكامل </label>
							<span className='text-danger'>*</span>
						</div>

						<input
							className='w-100 input'
							required
							type='text'
							name='name'
							placeholder='ادخل الاسم بالكامل'
							value={data?.name}
							onChange={(e) => {
								handleOnChangeData(e);
								setErrors({ ...errors, name: "" });
							}}
						/>

						{errors?.name && (
							<span
								style={{ fontSize: "0.85rem", fontWeight: "500" }}
								className='text-danger'>
								{errors?.name}
							</span>
						)}
					</div>

					<div className='col-12 mb-3  input-group'>
						<div className='mb-1'>
							<label className='user-info-label'>البريد الالكتروني </label>
							<span className=' text-danger'>*</span>
						</div>

						<input
							required
							className='w-100 input '
							type='email'
							name='email'
							placeholder='example@gmail.com'
							value={data?.email}
							onChange={(e) => {
								handleOnChangeData(e);
								setErrors({ ...errors, email: "" });
							}}
						/>

						{errors?.email && (
							<span
								style={{ fontSize: "0.85rem", fontWeight: "500" }}
								className='text-danger'>
								{errors?.email}
							</span>
						)}
					</div>

					<div className='col-12 mb-3  input-group'>
						<div className='mb-1'>
							<label className='user-info-label'>رابط المتجر </label>
						</div>

						<input
							required
							className='w-100 input '
							type='url'
							name='store_domain'
							placeholder='www.example.com'
							value={data?.store_domain}
							onChange={(e) => {
								handleOnChangeData(e);
								setErrors({ ...errors, store_domain: "" });
							}}
						/>

						{errors?.store_domain && (
							<span
								style={{ fontSize: "0.85rem", fontWeight: "500" }}
								className='text-danger'>
								{errors?.store_domain}
							</span>
						)}
					</div>

					<div className='col-12 input-group mb-4'>
						<div className='mb-1'>
							<label className='user-info-label'>رقم الجوال </label>
							<span className=' text-danger'>*</span>
						</div>

						<div className='w-100 user-info-phone-number'>
							<input
								required
								className={`${data?.phone_number ? "text-start" : "text-end"} `}
								type='tel'
								name='phone_number'
								maxLength={9}
								placeholder='ادخل رقم الجوال بدون المفتاح'
								value={data?.phone_number}
								onChange={(e) => {
									const numericValue = e.target.value.replace(
										/[\u0660-\u0669]/g,
										(char) => {
											return char.charCodeAt(0) - 0x0660;
										}
									);
									handleOnChangeData({
										target: {
											name: "phone_number",
											value: numericValue,
										},
									});

									setErrors({ ...errors, phone_number: "" });
								}}
							/>

							<span className='key_code'>966</span>
						</div>
						{errors?.phone_number && (
							<span
								style={{ fontSize: "0.85rem", fontWeight: "500" }}
								className='text-danger'>
								{errors?.phone_number}
							</span>
						)}
					</div>

					<div className='col-12 mb-3 '>
						<div className='mb-1'>
							<label className='user-info-label'>اختر الخدمات المطلوبة</label>
							<span className='text-danger'>*</span>
						</div>

						<Select
							placeholder='اختر الخدمات '
							closeMenuOnSelect={false}
							components={animatedComponents}
							isMulti
							options={options}
							value={data.service_id}
							onChange={(selectedOptions) => {
								handleOnChangeData({
									target: { name: "service_id", value: selectedOptions },
								});

								setErrors({ ...errors, service_id: "" });
							}}
							name='service_id'
						/>

						{errors?.service_id && (
							<span
								style={{ fontSize: "0.85rem", fontWeight: "500" }}
								className='text-danger'>
								{errors?.service_id}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
