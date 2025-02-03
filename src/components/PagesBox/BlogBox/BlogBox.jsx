import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogHero } from "../../index";
import "./BlogBox.css";
import { Skeleton } from "@mui/material";

// Moved to separate component file
const SkeletonLoading = React.memo(() => (
	<>
		{Array(6)
			.fill(null)
			.map((_, index) => (
				<div className='box' key={index}>
					<div className='order'>
						<div className='box-img'>
							<Skeleton
								animation='wave'
								variant='rectangular'
								width='100%'
								height={230}
							/>
						</div>
						<div className='box-order'>
							<Skeleton variant='text' width={100} height={12} />
							<Skeleton variant='text' width={300} height={8} />
							<Skeleton variant='text' width={400} height={16} />
						</div>
					</div>
				</div>
			))}
	</>
));

// URL generation utility
const generatePostUrl = (postId, title) => {
	const formattedTitle = title
		.replace(/[^a-zA-Z0-9\u0621-\u064A]+/g, "-")
		.toLowerCase();
	return `/post/${postId}/${encodeURIComponent(formattedTitle)}`;
};

const BlogBox = ({
	searchInPosts,
	pageTitle,
	pagesCategory,
	isLoading,
	postCategoryId,
	setPostCategoryId,
	postsNumber,
	setPostsNumber,
	allBlogs,
	setPostCategoryArray,
}) => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (allBlogs?.pages?.length > 0) {
			setPosts(allBlogs);
			setPostCategoryArray(allBlogs?.postCategory);
		}
	}, [allBlogs, setPostCategoryArray]);

	const handleShowMoreBlogs = () => {
		setPostsNumber(postsNumber + 3);
	};

	const goUpWindow = () => {
		window.scroll(0, 0);
	};

	const handlePostClick = (postId, title) => {
		navigate(generatePostUrl(postId, title));
		goUpWindow();
	};

	return (
		<div className='blog-box'>
			<BlogHero
				pageTitle={pageTitle}
				searchInPosts={searchInPosts}
				setPosts={setPosts}
				allBlogs={allBlogs}
			/>

			<div className='container'>
				{isLoading ? (
					<div className='blog-box'>
						<div className='box-body'>
							<SkeletonLoading />
						</div>
					</div>
				) : (
					<>
						<div className='header-blog'>
							<ul className='justify-content-center justify-content-lg-center'>
								<li
									className={
										postCategoryId === 0 ? "active bt-main" : "bt-main"
									}
									onClick={() => setPostCategoryId(0)}>
									الكل
								</li>
								{pagesCategory?.map((el) => (
									<li
										className={
											postCategoryId === el?.id ? "active bt-main" : "bt-main"
										}
										onClick={() => setPostCategoryId(el?.id)}
										key={el.id}>
										{el.name}
									</li>
								))}
							</ul>
						</div>

						{posts?.pages?.length > 0 ? (
							<div className='content-blog'>
								<div className='box-body'>
									{posts?.pages?.map((el) => (
										<div className='box' id={el?.id} key={el?.id}>
											<div
												data-aos-once='true'
												data-aos='fade-up-left'
												data-aos-delay='500'
												className='order'
												onClick={() => handlePostClick(el?.id, el?.title)}>
												<div className='box-img'>
													<img src={el.image} alt={el.title} loading='lazy' />
												</div>
												<div className='box-order'>
													<h6>{el?.postCategory?.name}</h6>
													<h4>{el?.title}</h4>
													<p>{el?.page_desc}</p>
												</div>
											</div>
										</div>
									))}
								</div>
								{posts?.pages?.length < allBlogs?.total_result && (
									<button className='bt-main' onClick={handleShowMoreBlogs}>
										عرض المزيد
									</button>
								)}
							</div>
						) : (
							<div
								className='d-flex flex-row align-items-center justify-content-center w-100'
								style={{ height: "50vh" }}>
								<p>لا توجد مقالات في هذا القسم</p>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default BlogBox;
