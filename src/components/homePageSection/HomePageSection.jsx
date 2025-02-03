import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import NotFoundData from "../NotFoundData/NotFoundData";
import SouqAtlbhaSwiper from "../SwiperBox/SouqAtlbhaProductsSwiper/SouqAtlbhaSwiper";
import ShowAllProductsButton from "../ShowAllProductsButton";

const HomePageSection = ({
	sectionTitle,
	sliderData,
	isLoading,
	navigateTo,
}) => {
	return (
		<div className='stores-info '>
			<div className='container'>
				<MainTitle text={sectionTitle} />

				{sliderData?.length > 0 ? (
					<SouqAtlbhaSwiper productSwiperData={sliderData} />
				) : (
					<NotFoundData />
				)}

				{sliderData?.length >= 5 && (
					<ShowAllProductsButton
						isLoading={isLoading}
						navigateTo={navigateTo}
					/>
				)}
			</div>
		</div>
	);
};

export default HomePageSection;
