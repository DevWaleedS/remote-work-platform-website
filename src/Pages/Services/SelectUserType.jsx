import React from "react";

const SelectUserType = ({ userType, setUserType }) => {
	const usersData = [
		{ id: 1, type_ar: "نعم لدي حساب ", type_en: "has store" },
		{ id: 2, type_ar: "لا ليس لدي حساب", type_en: "doesn't have a store" },
	];

	const handleSelectUserType = (e) => {
		setUserType(Number(e.target.value));
	};

	const userTypeData = usersData?.map((data) => (
		<li className='item' key={data?.id}>
			<label className='select-user-type-header'>
				<div className='d-flex flex-row align-items-center'>
					<span className='input-radio'>
						<span className='body'>
							<input
								type='radio'
								className='input'
								name='select_user_type'
								value={data?.id}
								checked={Number(userType) === Number(data?.id)}
								onChange={(e) => handleSelectUserType(e)}
							/>
							<span className='input-radio-circle' />
						</span>
					</span>
					<span>{data?.type_ar}</span>
				</div>
			</label>
		</li>
	));
	return (
		<div className='select-user-type text-end mb-5'>
			<h4 className='text-end '>
				هل لديك حساب لدي{" "}
				<span className='atlbha-title'>شركة المعرفة لتقنية المعلومات</span>
			</h4>

			<ul className=' d-flex justify-content-start align-items-center gap-2'>
				{userTypeData}
			</ul>
		</div>
	);
};

export default SelectUserType;
