import React from "react";
import { Helmet } from "react-helmet-async";

import { useLocation, useParams } from "react-router-dom";
import { ProductsBox } from "../components";

const ProductsPage = () => {
	const { id, title } = useParams();
	const location = useLocation();

	const isSpecial = location?.search.slice(1) === "special";

	const pageTitle = title
		? title.replace(/-/g, " ")
		: isSpecial
		? "المنتجات المميزة"
		: "سوق الجملة";

	return (
		<>
			<Helmet>
				<title>مُدَار | {pageTitle}</title>
				<meta name='description' content={pageTitle} />
			</Helmet>

			<ProductsBox id={id} isSpecial={isSpecial} />
		</>
	);
};

export default ProductsPage;
