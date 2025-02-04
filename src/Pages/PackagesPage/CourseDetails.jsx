import React, { useEffect } from "react";

// third party
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

// components
import PageTitle from "../../components/PagesTitle/PageTitle";

// RTK QUERY
import { useGetSubscribePackagesQuery } from "../../RTK/Api/subscribePackagesApi";

function CourseDetails() {
	const navigate = useNavigate();
	const location = useLocation();
	let url = location?.pathname?.split("/");

	let packId = url[2];
	let courseId = url[3];

	const { data: packages } = useGetSubscribePackagesQuery();

	const currentPackage =
		packages && Array.isArray(packages)
			? packages?.find((pack) => Number(pack?.id) === Number(packId))
			: null;

	// If currentPackage is found, filter out the selected plans
	const currentCourse = currentPackage?.courses?.find(
		(course) => Number(course?.id) === Number(courseId)
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// navigate to auth/merchant
	const backToPackageDetailsPage = () => {
		navigate(`/business-store/${packId}`);
	};

	return (
		<>
			<Helmet>
				<title>منصة المعرفة للعمل عن بُعد | {`${currentCourse?.name}`} </title>
				<meta name='description' content={`${currentCourse?.name}`} />
			</Helmet>

			<>
				<div className='course__details_page'>
					<div className='container'>
						<PageTitle title={currentCourse?.name} />
						<div className='course-box'>
							<div className='course_img'>
								<img
									width='100%'
									height='100%'
									loading='lazy'
									alt={currentCourse?.name}
									src={currentCourse?.image}
								/>
							</div>

							<h1 className='course_title'>{currentCourse?.name}</h1>
							<div className='description_wrapper'>
								<p
									className='description_content'
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(currentCourse?.description),
									}}
								/>
								<div className='btn-wrapper '>
									<button
										className='subscribe_btn'
										onClick={() => backToPackageDetailsPage()}>
										الرجوع للباقة
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</>
	);
}

export default CourseDetails;
