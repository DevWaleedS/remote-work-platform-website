import React, { Fragment } from "react";

// css styles
import "./SubscribePackages.css";

// components
import PackagesFeatures from "./PackagesFeatures";

const PackagesInfo = ({ isLoading, packages, highestPricedPackage }) => {
	// navigate to auth merchant by default
	const navigateToMerchantRegister = () => {
		window.location.href = "/";
	};

	console.log(packages);

	return (
		<>
			<div className='content-package '>
				{packages?.map((pack) => (
					<Fragment key={pack?.id}>
						{pack?.status === "نشط" ? (
							<div
								data-aos='fade-up-left'
								data-aos-once='true'
								className={`py-4 box ${
									pack === highestPricedPackage ? "top-package" : ""
								}`}>
								<div>
									<h3>{pack?.name}</h3>
									<h2 className='gap-1 d-flex justify-content-center align-items-baseline'>
										{pack?.discount > 0 ? (
											pack?.yearly_price - pack?.discount === 0 ? (
												<>
													<span className='price'>مجاناً</span>
												</>
											) : (
												<>
													<span className='price'>
														{pack?.yearly_price - pack?.discount}
														<span className='currency pe-1'>ر.س</span>
													</span>
													<span className='discount-price '>
														{pack?.yearly_price}{" "}
														<span className='currency '>ر.س</span>
													</span>
												</>
											)
										) : (
											<span className='price'>
												{pack?.yearly_price}{" "}
												<span className='currency'>ر.س</span>
											</span>
										)}
										<p className='package-type'>
											/{" "}
											{pack?.periodtype === "year"
												? "سنوياََ"
												: pack?.periodtype === "6months"
												? "6 أشهر"
												: pack?.periodtype === "3months"
												? "3 أشهر"
												: pack?.periodtype === "month"
												? "شهرياََ"
												: pack?.periodtype === "2weeks"
												? "14 يوم"
												: ""}
										</p>
									</h2>
								</div>

								<div className=' w-100 d-flex flex-column align-items-start'>
									<ul>
										<PackagesFeatures packageFeatures={pack?.plans || []} />
									</ul>
								</div>

								<button
									onClick={() => {
										navigateToMerchantRegister();
									}}>
									ابدأ الآن
								</button>
							</div>
						) : null}
					</Fragment>
				))}
			</div>
		</>
	);
};

export default PackagesInfo;
