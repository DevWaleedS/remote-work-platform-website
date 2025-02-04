import React, { useEffect, useState } from "react";

// third party
import { useScrollYPosition } from "react-use-scroll-position";

// components
import FooterLogo from "./FooterLogo";
import FooterInfo from "./FooterInfo";
import FooterAboutUs from "./FooterAboutUs";

// css styles
import "./FooterOverlay.css";

import FooterHelpLinks from "./FooterHelpLinks";
import BackToTop from "./BackToTop";
import AllRightsReserved from "./AllRightsReserved";

const links = [
	{
		id: 1,
		title: "سياسة الخصوصية",
	},
	{
		id: 2,
		title: "الشروط والأحكام",
	},
	{
		id: 3,
		title: "سياسة الاستخدام",
	},
];
const FooterOverlay = ({
	ourwork_category,
	linkWebsite,
	homeFooter,

	logoFooter,
}) => {
	const scrolly = useScrollYPosition();
	const [showup, setShowup] = useState(false);

	useEffect(() => {
		if (scrolly >= 500) {
			setShowup(true);
		} else {
			setShowup(false);
		}
	}, [scrolly]);

	// handle open page in top position
	let goUpWindow = () => {
		window.scroll(0, 0);
	};

	const handleSubscribe = (e) => {
		e.preventDefault();
	};

	// We use this filter to get all pages about category معلومات
	const information = homeFooter?.filter((page) =>
		page?.pageCategory?.filter((category) => category?.name === "معلومات")
	);

	return (
		<>
			<footer className='main-footer'>
				<div className='container flex-column flex-lg-row  align-items-center align-items-lg-start '>
					{/* footer logo */}
					<FooterLogo logoFooter={logoFooter} linkWebsite={linkWebsite} />

					<nav className='box-right'>
						<ul>
							<FooterInfo
								title='معلومات'
								links={links}
								information={information}
								goUpWindow={goUpWindow}
							/>

							{/* Footer Help Links */}
							<FooterHelpLinks goUpWindow={goUpWindow} />
						</ul>

						<form
							onSubmit={(e) => handleSubscribe(e)}
							className='subscribe-form'>
							<input type='text' placeholder=' النشرة البريدية' />
							<button>الإشتراك</button>
						</form>
					</nav>
				</div>

				<AllRightsReserved />

				<BackToTop showup={showup} />
			</footer>
		</>
	);
};

export default FooterOverlay;
