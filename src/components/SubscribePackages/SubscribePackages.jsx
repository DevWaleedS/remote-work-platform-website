import React from "react";

import "./SubscribePackages.css";
import PackagesInfo from "./PackagesInfo";
import { useGetSubscribePackagesQuery } from "../../RTK/Api/subscribePackagesApi";
import LoadingPage from "../LoadingPage/LoadingPage";
import MainTitle from "../MainTitle/MainTitle";

const SubscribePackages = () => {
	const { data: packages, isLoading } = useGetSubscribePackagesQuery();

	const highestPricedPackage = packages
		?.filter((item) => item?.status === "نشط")
		?.reduce((max, item) => {
			// Calculate the price considering the discount
			const priceWithDiscount =
				item.discount > 0
					? item.yearly_price - item.discount
					: item.yearly_price;

			// Determine if the current item should be the new max
			return priceWithDiscount >
				(max
					? max.discount > 0
						? max.yearly_price - max.discount
						: max.yearly_price
					: 0)
				? item
				: max;
		}, null);

	return (
		<>
			<div className='package-box '>
				<MainTitle text={"باقات الأشتراك"} />
				{isLoading ? (
					<LoadingPage />
				) : (
					<div className='all'>
						<PackagesInfo
							isLoading={isLoading}
							packages={packages || []}
							highestPricedPackage={highestPricedPackage}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default SubscribePackages;
