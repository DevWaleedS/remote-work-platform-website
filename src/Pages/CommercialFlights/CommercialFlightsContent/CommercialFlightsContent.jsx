import React from "react";

import { Outlet, NavLink } from "react-router-dom";

import { HandIcon } from "../../../assets/Img";

const CommercialFlightsContent = () => {
	return (
		<div className='content'>
			<div className='row w-100'>
				<div className='col-lg-2 col-12 mb-lg-0 mb-5 px-lg-2 px-0 position-relative'>
					<div className='options'>
						<div
							className='nav flex-column nav-pills'
							id='v-pills-tab'
							role='tablist'
							aria-orientation='vertical'>
							<NavLink className='nav-link' to='features'>
								<img
									width='auto'
									height='auto'
									src={HandIcon}
									alt='hand-icon'
								/>{" "}
								البرنامج التدريبي
							</NavLink>
							<NavLink className='nav-link' to='packages'>
								<img
									width='auto'
									height='auto'
									src={HandIcon}
									alt='hand-icon'
								/>{" "}
								باقات الاشتراك
							</NavLink>
							<NavLink className='nav-link' to='registerForm'>
								<img
									width='auto'
									height='auto'
									src={HandIcon}
									alt='hand-icon'
								/>{" "}
								التسجيل والاشتراك
							</NavLink>
							<NavLink className='nav-link' to='questions'>
								<img
									width='auto'
									height='auto'
									src={HandIcon}
									alt='hand-icon'
								/>
								الأسئلة الشائعة
							</NavLink>
						</div>
					</div>
				</div>
				<div className='col-lg-10 col-12 px-lg-2 px-0'>
					<div className='tab-content'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommercialFlightsContent;
