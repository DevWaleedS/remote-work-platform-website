import React from "react";
import PageTitle from "../../components/PagesTitle/PageTitle";
import Questions from "../CommercialFlights/CommercialFlightsContent/Questions";
import Features from "../CommercialFlights/CommercialFlightsContent/Features";
import { useLocation, useParams } from "react-router-dom";
import { useGetSubscribePackagesQuery } from "../../RTK/Api/subscribePackagesApi";

const BusinessTripDubai = () => {
	const { id } = useParams();
	const location = useLocation();

	const { data: packages } = useGetSubscribePackagesQuery();

	const currentPackage =
		packages && Array.isArray(packages)
			? packages?.find((pack) => Number(pack?.id) === Number(id))
			: null;

	const packageCourses = currentPackage?.courses;
	const packageTrips = currentPackage?.trip;

	return (
		<section className='commercial-flights px-3 px-lg-5'>
			<PageTitle
				title={
					location.pathname === "/business-trips"
						? "الرحلات التجارية"
						: "الدورات التدريبية وورش العمل المجانية"
				}
			/>
			<div
				className={`${
					location.pathname === "/business-trips" ? "" : "w-100"
				} content`}>
				<Features
					id={id}
					packageCourses={packageCourses || []}
					packageTrips={packageTrips || []}
				/>

				{location.pathname === "/business-trips" ? (
					<Questions activeTab={"dubai"} />
				) : null}
			</div>
		</section>
	);
};

export default BusinessTripDubai;
