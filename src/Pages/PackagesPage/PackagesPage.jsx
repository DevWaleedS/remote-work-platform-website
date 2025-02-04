import React from "react";
import { SubscribePackages } from "../../components";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PagesTitle/PageTitle";

const PackagesPage = () => {
	return (
		<>
			<Helmet>
				<title>منصة المعرفة للعمل عن بُعد | باقات الاشراك</title>
				<meta
					name='description'
					content='استكشف مجموعتنا الواسعة من الخدمات المصممة خصيصًا لتمكين متجرك الإلكتروني من النجاح والتألق في عالم التجارة الإلكترونية. من التصميم البصري المبتكر إلى الحلول اللوجستية المتقدمة'
				/>
			</Helmet>
			<div className='our-package'>
				<div className='all'>
					<PageTitle title={"باقات الاشراك"} />

					<SubscribePackages />
				</div>
			</div>
		</>
	);
};

export default PackagesPage;
