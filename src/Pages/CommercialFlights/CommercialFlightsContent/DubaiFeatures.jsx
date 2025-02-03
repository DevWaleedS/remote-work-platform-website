import React from "react";

// third party
import DOMPurify from "dompurify";
import { useLocation, useNavigate } from "react-router-dom";

const DubaiFeatures = ({ packageCourses, packageTrips, id }) => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<>
			{location.pathname === `/business-trips/${id}`
				? packageTrips?.details?.map((trip) => (
						<div className='box' key={trip?.id}>
							<h3>{trip?.title} </h3>
							<div
								className='cont'
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(trip?.description),
								}}
							/>
						</div>
				  ))
				: packageCourses?.map((course) => (
						<>
							<div
								className='course__wrapper'
								key={course?.id}
								onClick={() =>
									navigate(`/courses-details/${id}/${course?.id}`)
								}>
								<>
									<img
										src={course?.image}
										alt={course?.name}
										loading='lazy'
										className='course__img'
									/>
									<h3 className='course__title'>{course?.name} </h3>
								</>
							</div>
						</>
				  ))}
		</>
	);
};

export default DubaiFeatures;
