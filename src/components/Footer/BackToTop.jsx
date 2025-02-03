import React from "react";

import { HiChevronDoubleLeft } from "react-icons/hi";

const BackToTop = ({ showup }) => {
	return (
		<div
			className={showup === true ? "go-up show " : "go-up"}
			onClick={() => {
				window.scroll(0, 0);
			}}>
			<span>
				<HiChevronDoubleLeft />
			</span>
		</div>
	);
};

export default BackToTop;
