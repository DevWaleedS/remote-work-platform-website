import React from "react";
import { Skeleton } from "@mui/material";

const styleSkeleton = {
	width: "212px",
	height: "200px",
	"@media(max-width:768px)": {
		width: "200px",
	},
};

const SkeletonLoading = () => {
	return (
		<>
			{Array(12)
				.fill(null)
				.map((_, index) => (
					<div
						key={index}
						className='col-6 col-md-4 col-lg-3 col-xl-2 overflow-hidden'>
						<section className=' overflow-hidden'>
							<div>
								<Skeleton animation='wave' sx={styleSkeleton} />
								<div
									className=' d-flex flex-column justify-content-center align-items-center'
									style={{ marginTop: "-26px" }}>
									<Skeleton width={160} height={8} variant='text' />
									<Skeleton width={120} height={6} variant='text' />
								</div>
							</div>
						</section>
					</div>
				))}
		</>
	);
};

export default SkeletonLoading;
