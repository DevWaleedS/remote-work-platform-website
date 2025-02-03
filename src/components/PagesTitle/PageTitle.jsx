import React from "react";

import "./PageTitle.css";
import { Link } from "react-router-dom";
import { BrandsBg } from "../../assets/Img";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function PageTitle({ title }) {
	return (
		<div className='page-title'>
			<h4>{title}</h4>
			<div className='page-sub-title'>
				<Link to={"/"}>الرئيسية</Link>
				<KeyboardArrowLeftIcon />
				<span>{title}</span>
			</div>
		</div>
	);
}

export default PageTitle;
