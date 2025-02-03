import React from "react";
import { StartBox } from "../components/";
import { Helmet } from "react-helmet-async";

const Start = () => {
	return (
		<>
			<Helmet>
				<title>مُدَار | كيف أبدأ</title>
				<meta
					name='description'
					content='ابدأ مع مُدَار بوابتك للتجارة الإلكترونية'
				/>
			</Helmet>
			<StartBox />
		</>
	);
};

export default Start;
