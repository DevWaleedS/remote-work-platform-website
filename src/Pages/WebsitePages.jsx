import React from "react";

import { WebsitePages } from "../components";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import { useGetWebsitePageByIdQuery } from "../RTK/Api/websitePageApi";
import { useParams } from "react-router-dom";

const YourPolicy = () => {
	const { id } = useParams();

	const { data: websitePage, isLoading } = useGetWebsitePageByIdQuery({
		id,
	});

	if (isLoading) {
		return <LoadingPage />;
	}

	return (
		<>
			<WebsitePages
				pageId={id}
				Loading={isLoading}
				Name={
					websitePage?.seo_title
						? websitePage?.seo_title
						: websitePage?.title || ""
				}
				Description={websitePage?.page_content || ""}
				shortDescription={
					websitePage?.seo_desc
						? websitePage?.seo_desc
						: websitePage?.page_desc || ""
				}
			/>
		</>
	);
};

export default YourPolicy;
