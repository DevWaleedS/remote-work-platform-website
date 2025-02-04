import React from "react";
import { Helmet } from "react-helmet-async";

// Components

import PageTitle from "../../components/PagesTitle/PageTitle";
import CommonQuestion from "./CommonQuestion";

function Faqs() {
	return (
		<>
			<Helmet>
				<title>منصة المعرفة للعمل عن بُعد | الأسئلة الشائعة</title>
				<meta name='الأسئلة الشائعة' content='الأسئلة الشائعة' />
			</Helmet>
			<div className='faqs-page'>
				<div className='container'>
					<PageTitle title={"الأسئلة الشائعة"} />
					<CommonQuestion />
				</div>
			</div>
		</>
	);
}

export default Faqs;
