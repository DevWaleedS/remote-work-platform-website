import React from "react";

import DOMPurify from "dompurify";
import { IoCheckmarkSharp } from "react-icons/io5";

import "./PackagesFeatures.css";

const PackagesFeatures = ({ packageFeatures }) => {
	return (
		<div>
			{packageFeatures?.map(
				(plan, index) =>
					plan?.selected && (
						<h2 className='package_plan_title' key={index}>
							<IoCheckmarkSharp className='package_plan_icon' />

							<span
								style={{
									color: [
										"مجانا رحلة تجارية الى الامارات",
										"مجانا رحلة تجارية الى الصين",
										"مجانا رحلة تجارية الى الأمارات",
									].includes(plan?.name)
										? "#1dbbbe"
										: "#011723",
									fontWeight: "400",
									display: "inline-block",
									width: "100%",
									lineHeight: "1.6",
									whiteSpace: [
										"مجانا رحلة تجارية الى الامارات",
										"مجانا رحلة تجارية الى الصين",
										"مجانا رحلة تجارية الى الأمارات",
									].includes(plan?.name)
										? undefined
										: "normal",
								}}>
								<>
									{plan?.name}{" "}
									{plan?.description ? (
										<div
											className='business_plan__description'
											dangerouslySetInnerHTML={{
												__html: DOMPurify.sanitize(plan?.description),
											}}
										/>
									) : null}
								</>
							</span>
						</h2>
					)
			)}
		</div>
	);
};

export default PackagesFeatures;
