import React, { useContext } from "react";

// third party
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";

// Components
import LoadingPage from "../../LoadingPage/LoadingPage";
import { LoadingBox, NotFoundData, OwnerBox } from "../../index";

// RTK Query
import { useGetPostDetailsByPostIdQuery } from "../../../RTK/Api/blogsApi";

// Context
import AppContext from "../../../Context/AppContext";

// Icons
import { SvgBack } from "../../../assets/Icons";

// Css Styles
import "./DetailBlogBox.css";
import { useParams } from "react-router-dom";

const DetailBlogBox = () => {
	const { id } = useParams();
	const postsContext = useContext(AppContext);
	const { setPostCategoryId, postCategoryArray } = postsContext;

	const {
		data: postDetails,
		isLoading,
		isFetching,
	} = useGetPostDetailsByPostIdQuery({
		postId: id,
	});

	let goUpWindow = () => {
		window.scroll(0, 0);
	};

	return (
		<>
			<Helmet>
				<title>
					منصة المعرفة للعمل عن بُعد |
					{postDetails?.seo_title
						? postDetails?.seo_title
						: postDetails?.title || ""}
				</title>
				<meta
					name='description'
					content={
						postDetails?.seo_desc
							? postDetails?.seo_desc
							: postDetails?.page_desc
					}
				/>
			</Helmet>
			<div className='detail-blog p-main'>
				<div className='container'>
					{isLoading || isFetching ? (
						<LoadingBox />
					) : postDetails ? (
						<div className='all'>
							<div className='row'>
								<div className='col-md-12 col-lg-3  col-xxl-2 '>
									<div className='box-right'>
										<ul>
											<li className=' d-flex justify-content-start align-items-center gap-1'>
												<span
													onClick={() => {
														window.history.back();
														setPostCategoryId(0);
														goUpWindow();
													}}>
													<SvgBack />
												</span>
												<h6>الكل</h6>
											</li>

											{postCategoryArray?.length > 0
												? postCategoryArray?.map((el) => {
														return (
															<li
																onClick={() => {
																	setPostCategoryId(el?.id);
																	window.history.back();

																	goUpWindow();
																}}
																className={
																	el.name === postDetails?.postCategory?.name
																		? "active"
																		: ""
																}
																key={el.id}>
																{el.name}
															</li>
														);
												  })
												: null}
										</ul>
									</div>
								</div>
								<div className='col-md-12 col-lg-6 col-xxl-8'>
									<div className='box-center'>
										<div className='box-img'>
											<img
												width='100%'
												height='100%'
												src={postDetails.image}
												alt={postDetails.title}
												loading='lazy'
											/>
										</div>
										<h1>{postDetails.title}</h1>
										<div
											dangerouslySetInnerHTML={{
												__html: DOMPurify.sanitize(postDetails?.page_content),
											}}
										/>
									</div>
								</div>
								<div className='col-md-12 col-lg-3 col-xxl-2'>
									<div className='box-left'>
										<OwnerBox
											NameOwner={postDetails?.user?.name}
											ImgOwner={postDetails?.user?.image}
											DateOwner={postDetails?.created_at}
										/>
									</div>
								</div>
							</div>
						</div>
					) : (
						<NotFoundData />
					)}
				</div>
			</div>
		</>
	);
};

export default DetailBlogBox;
