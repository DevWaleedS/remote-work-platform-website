import React from "react";

// third party
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";

const FooterAboutUs = ({ aboutUsPage, goUpWindow }) => {
	const navigate = useNavigate();

	return (
		<li className='text-center text-lg-end about-us-box'>
			<h4
				onClick={() => {
					navigate(
						aboutUsPage`/page/${aboutUsPage?.id}/${encodeURIComponent(
							aboutUsPage?.title
								.replace(/[^a-zA-Z0-9\u0621-\u064A]+/g, "-")
								.toLowerCase()
						)}`
					);

					goUpWindow();
				}}
				className=''>
				{aboutUsPage?.title}
			</h4>

			<p
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(aboutUsPage?.page_content),
				}}
				onClick={() => {
					navigate(
						`/page/${aboutUsPage.id}/${encodeURIComponent(
							aboutUsPage.title
								.replace(/[^a-zA-Z0-9\u0621-\u064A]+/g, "-")
								.toLowerCase()
						)}`
					);

					goUpWindow();
				}}
				className='about-us-content text-lg-end'
			/>
		</li>
	);
};

export default FooterAboutUs;
