import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
import { PageNotFound } from "../../assets/Icons";

const NotFoundPage = () => {
	let navigate = useNavigate();
	return (
		<>
			<div className='NotFoundPage'>
				<section className='page_404'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12 '>
								<div className='col-sm-10 col-sm-offset-1   text-center w-100'>
									<div className='four_zero_four_bg'>
										<PageNotFound />
										<div className='contant_box_404 '>
											<h3 className='h2'>يبدو أنك تائه</h3>

											<p>الصفحة التي تبحث عنها غير متوفرة!</p>
										</div>
									</div>

									<Link to='/' className='link_404'>
										الصفحه الرئسية
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default NotFoundPage;
