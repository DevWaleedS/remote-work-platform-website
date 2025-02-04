import React from "react";

import DOMPurify from "dompurify";
import { IoCheckmarkSharp } from "react-icons/io5";

import "./PackagesFeatures.css";

const packageFeatures = [
	{
		id: 1,
		name: "متابعة الأداء",
		description: "متابعة الأداء للموظفين وتقييمهم بسهولة.",
	},
	{
		id: 2,
		name: "تقييم الأداء",
		description: "تقييم الأداء للموظفين بسهولة.",
	},

	{
		id: 3,
		name: "تقييم الأداء",
		description: "تقييم الأداء للموظفين بسهولة.",
	},
];

const PackagesFeatures = () => {
	return (
		<div>
			{packageFeatures?.map((plan, index) => (
				<h2 className='package_plan_title' key={index}>
					<IoCheckmarkSharp className='package_plan_icon' />

					<span
						style={{
							color: "#b6be34",
							fontWeight: "400",
							display: "inline-block",
							width: "100%",
							lineHeight: "1.6",
							whiteSpace: "normal",
						}}>
						<>
							{plan?.name}{" "}
							{plan?.description ? (
								<div
									style={{
										color: "#000",
										fontWeight: "300",
										display: "inline-block",
										width: "100%",
										lineHeight: "1.6",
										whiteSpace: "normal",
									}}
									className='business_plan__description'
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(plan?.description),
									}}
								/>
							) : null}
						</>
					</span>
				</h2>
			))}
		</div>
	);
};

export default PackagesFeatures;
