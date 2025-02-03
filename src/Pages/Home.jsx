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
				<title> منصة مُدَار: ابدأ متجرك الإلكتروني الآن </title>
				<meta
					name='description'
					content='مع منصة مُدَار، حول فكرتك إلى متجر إلكتروني ناجح بسهولة. استفد من حلولنا الشاملة للتجارة الإلكترونية، بداية من إنشاء متجرك الإلكتروني وإعداده حتى التغليف والشحن.'
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
