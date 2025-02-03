import React, { useEffect } from "react";

// third party
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router-dom";

import PageTitle from "../../components/PagesTitle/PageTitle";
import "./BusinessStorePage.css";

import CommonQuestion from "../Faqs/CommonQuestion";
import { useGetSubscribePackagesQuery } from "../../RTK/Api/subscribePackagesApi";
import TemplateFeatures from "./TemplateFeatures";

const BusinessStorePage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: packages } = useGetSubscribePackagesQuery();
	const currentPackage =
		packages && Array.isArray(packages)
			? packages?.find((pack) => Number(pack?.id) === Number(id))
			: null;

	// If currentPackage is found, filter out the selected plans
	const packagePlan = currentPackage?.plans?.filter((plan) => plan?.selected);

	// navigate to auth merchant by default
	const navigateToMerchantRegister = () => {
		window.location.href = "https://store.atlbha.com/auth/merchant";
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section className='px-2 px-lg-5'>
			<PageTitle title={currentPackage?.name} />
			<div className='content '>
				<div className='bg d-flex justify-content-center mb-5 '>
					<img
						src={currentPackage?.image}
						alt={currentPackage?.name}
						loading='lazy'
						className='rounded-3 business_plan__image  '
					/>
				</div>

				<TemplateFeatures />

				<div className='business_plan__content '>
					<>
						<h3 className='business_plan__title'>يحصل المشترك على :</h3>
						<div className='row  gap-3 '>
							{packagePlan?.map((item) => (
								<div
									className='business_plan_boxes text-center col-xl-4 col-lg-2  col-md-12  '
									key={item.id}>
									<h3 className=' d-flex justify-content-center align-items-center business_plan__name '>
										{item?.name}
									</h3>
									<div
										className='business_plan__description'
										dangerouslySetInnerHTML={{
											__html: DOMPurify.sanitize(item?.description),
										}}></div>
								</div>
							))}
						</div>
					</>
				</div>

				<div className='mb-5 flex-wrap d-flex justify-content-center gap-2 gap-lg-4 w-100'>
					<>
						{currentPackage?.trip ? (
							<button
								onClick={() => navigate(`/business-trips/${id}`)}
								className='business_plan_btn business_trip_dubai'>
								{currentPackage?.trip?.title}
							</button>
						) : currentPackage?.courses?.length > 0 ? (
							<button
								onClick={() => navigate(`/package-courses/${id}`)}
								className='business_plan_btn business_trip_dubai'>
								الدورات التدريبية + وورش العمل (المجانية)
							</button>
						) : null}

						<button
							onClick={() => navigateToMerchantRegister()}
							className='business_plan_btn'>
							الإشتراك في {currentPackage?.name}
						</button>
					</>
				</div>

				<div className=''>
					<h3 className='business_plan__title mb-0'>الأسئلة الشائعة</h3>
					<CommonQuestion />
				</div>
			</div>
		</section>
	);
};

export default BusinessStorePage;
