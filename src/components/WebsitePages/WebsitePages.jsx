import React from "react";

// third party
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";

// Components
import LoadingBox from "../LoadingBox/LoadingBox";
import PageTitle from "../../components/PagesTitle/PageTitle";
import Questions from "../../Pages/CommercialFlights/CommercialFlightsContent/Questions";

import "./WebsitePages.css";

const WebsitePages = ({
	pageId,
	Name,
	shortDescription,
	Description,
	Loading,
}) => {
	return (
		<>
			<Helmet>
				<title>شركة المعرفة لتقنية المعلومات | {Name} </title>
				<meta name='description' content={shortDescription} />
			</Helmet>
			<div className='atlbha-academy'>
				<div className='container'>
					{Loading ? (
						<LoadingBox />
					) : (
						<>
							<PageTitle title={Name} />
							<div className='content'>
								<p
									className={
										Name === "الدورات التدريبية"
											? "academy-content"
											: "policy-content"
									}
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(Description),
									}}
								/>
								{pageId === "1159" ? (
									<Questions activeTab='dubai' />
								) : pageId === "1159" ? (
									<Questions activeTab='china' />
								) : null}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default WebsitePages;
