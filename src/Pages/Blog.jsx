import React, { useContext } from "react";

// third party
import { BlogBox, LoadingPage } from "../components";
import { Helmet } from "react-helmet-async";

// context
import AppContext from "../Context/AppContext";

// RTK Query
import {
	useGetAllBlogsQuery,
	useSearchInBlogsMutation,
} from "../RTK/Api/blogsApi";

const Blog = () => {
	// posts context
	const postsContext = useContext(AppContext);
	const {
		postCategoryId,
		setPostCategoryId,
		postsNumber,
		setPostsNumber,
		setPostCategoryArray,
	} = postsContext;

	// get all blogs posts
	const { data: allBlogs, isLoading } = useGetAllBlogsQuery({
		postsNumber,
		postCategoryId: postCategoryId,
	});

	// handle search in blogs
	const [searchInBlogs, { isLoading: blogsIsLoading }] =
		useSearchInBlogsMutation();

	return (
		<>
			<Helmet>
				<title>مُدَار | المقالات</title>
				<meta
					name='description'
					content='مركز المعرفة الذي يجمع بين النصائح العملية والتحليلات العميقة لتعزيز استراتيجياتك في التجارة الإلكترونية. استكشف مجموعة غنية من المقالات المصممة لإلهامك وتوجيهك نحو اتخاذ قرارات مستنيرة وتحقيق النجاح في رحلتك التجارية.'
				/>
			</Helmet>

			{isLoading ? (
				<LoadingPage />
			) : (
				<>
					<BlogBox
						pageTitle='المقالات'
						allBlogs={allBlogs}
						isLoading={blogsIsLoading}
						searchInPosts={searchInBlogs}
						postsNumber={postsNumber}
						setPostsNumber={setPostsNumber}
						postCategoryId={postCategoryId}
						setPostCategoryId={setPostCategoryId}
						pagesCategory={allBlogs?.postCategory}
						setPostCategoryArray={setPostCategoryArray}
					/>
				</>
			)}
		</>
	);
};

export default Blog;
