import React, { useContext, useEffect } from "react";

import { StarIcon } from "../../../assets/Icons";
import AppContext from "../../../Context/AppContext";
import DubaiFeatures from "./DubaiFeatures";
import { useLocation } from "react-router-dom";

function Features({ packageTrips, packageCourses, id }) {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const contextStore = useContext(AppContext);
	const { activeTab } = contextStore;

	return (
		<div className='tab'>
			<div className='title'>
				{location.pathname === `/business-trips/${id}` ? (
					<h1>{packageTrips?.title}</h1>
				) : (
					<h1>الدورات التدريبية وورش العمل المجانية</h1>
				)}

				{activeTab === "china" ? <StarIcon /> : null}
			</div>

			{location.pathname === `/business-trips/${id}` ? (
				<p
					className='desc'
					dangerouslySetInnerHTML={{ __html: packageTrips.description }}
				/>
			) : null}

			{location.pathname === `/business-trips/${id}` ? (
				<div className='business_flights_features'>
					<DubaiFeatures packageTrips={packageTrips} id={id} />
				</div>
			) : (
				<div className='course_box_info'>
					<DubaiFeatures packageCourses={packageCourses} id={id} />
				</div>
			)}
		</div>
	);
}

export default Features;
