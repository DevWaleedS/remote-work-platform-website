import React from "react";
import { HomeBox } from "../components";
import { Helmet } from "react-helmet-async";

const Home = ({
	isFetching,
	homePageData,
	homeLoadingData,
	setUseDisplayStores,
	displayStores,
	setPageTarget,
	pageTarget,
}) => {
	return (
		<>
			<Helmet>
				<title> مُدَار: منصتك الذكية لإدارة الموظفين عن بُعد</title>
				<meta
					name='description'
					content='حوّل إدارة فريقك مع مُدَار، منصتك الشاملة لإدارة الموظفين عن
									بُعد! 🚀 تابع الأداء، نظّم المهام، وأدِر الرواتب والتواصل من
									مكان واحد بكل سهولة.'
				/>
			</Helmet>
			<HomeBox
				isFetching={isFetching}
				homePageData={homePageData}
				homeLoadingData={homeLoadingData}
				pageTarget={pageTarget}
				setPageTarget={setPageTarget}
				displayStores={displayStores}
				setUseDisplayStores={setUseDisplayStores}
			/>
		</>
	);
};

export default Home;
