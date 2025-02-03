import * as React from "react";
import { LoadingIcon } from "../../assets/Icons";

const LoadingWebSite = ({ height }) => {
	return (
		<div
			style={{
				height: height ? height : "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<LoadingIcon style={{ width: "50px" }} />
		</div>
	);
};

export default LoadingWebSite;
