import React from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PagesTitle/PageTitle";
import { WhyAtlbha } from "../../components";
import WhyUs from "../../components/whyUs/WhyUs";

const AboutUs = () => {
	return (
		<>
			<Helmet>
				<title>شركة المعرفة لتقنية المعلومات | من نحن</title>
				<meta
					name='description'
					content='استكشف مجموعتنا الواسعة من الخدمات المصممة خصيصًا لتمكين متجرك الإلكتروني من النجاح والتألق في عالم التجارة الإلكترونية. من التصميم البصري المبتكر إلى الحلول اللوجستية المتقدمة'
				/>
			</Helmet>
			<div className='services'>
				<div className='container'>
					<PageTitle title={"من نحن"} />
				</div>
				<WhyAtlbha hideBtn={true} />

				<WhyUs />
			</div>
		</>
	);
};

export default AboutUs;
