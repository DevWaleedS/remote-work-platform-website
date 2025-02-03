import React from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "../PagesTitle/PageTitle";

import "./WhatWeOffer.css";
const WhatWeOfferDetails = () => {
	const whatWeOfferData = JSON.parse(localStorage.getItem("WhatWeOfferInfo"));

	return (
		<>
			<Helmet>
				<title>مُدَار | {whatWeOfferData?.title} </title>
				<meta name='description' content={whatWeOfferData?.description} />
			</Helmet>
			<div className='atlbha-academy'>
				<div className='container'>
					<>
						<PageTitle title={whatWeOfferData?.title} />
						<div className='content WhatWeOfferDetails'>
							<div className='box-img'>
								<img
									width='100%'
									height='100%'
									src={whatWeOfferData.icon}
									alt={whatWeOfferData.alt}
									loading='lazy'
								/>
							</div>
							<p className='academy-content policy-content'>
								{whatWeOfferData?.description}
							</p>
						</div>
					</>
				</div>
			</div>
		</>
	);
};

export default WhatWeOfferDetails;
