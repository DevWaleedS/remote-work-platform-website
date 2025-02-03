import React from "react";
import { useNavigate } from "react-router-dom";

const FooterHelpLinks = ({ goUpWindow }) => {
	const navigate = useNavigate();

	return (
		<li className='text-center text-lg-end '>
			<h4 className=''>المساعدة</h4>
			<ul className='text-center text-lg-end '>
				<li
					onClick={() => {
						navigate("/faqs");
						goUpWindow();
					}}
					className='main-footer-link'>
					الأسئلة الشائعة
				</li>
				<li
					onClick={() => {
						navigate("/contact-us");
						goUpWindow();
					}}
					className='main-footer-link'>
					تواصل معنا
				</li>
			</ul>
		</li>
	);
};

export default FooterHelpLinks;
