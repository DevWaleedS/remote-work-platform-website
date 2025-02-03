import React, { useContext, useEffect } from "react";
import { BlogBox, LoadingPage } from "../../components";
import { Helmet } from "react-helmet-async";

import AppContext from "../../Context/AppContext";
import {
	useGetAllOurWorksQuery,
	useSearchInOurWorksMutation,
} from "../../RTK/Api/ourWorksApi";

const OurWorks = ({ pagesCategory }) => {
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
	const { data: allBlogs, isLoading } = useGetAllOurWorksQuery({
		postsNumber,
		postCategoryId: postCategoryId,
	});

	useEffect(() => {
		if (allBlogs?.pages?.length > 0) {
			setPostCategoryArray(allBlogs?.ourwork_category);
		}
	}, [allBlogs, setPostCategoryArray]);

	// handle search in our works
	const [searchInOurWorks, { isLoading: searchIsLoading }] =
		useSearchInOurWorksMutation();

	return (
		<>
			<Helmet>
				<title>مُدَار | أعمالنا في التصميم</title>
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
						pageTitle='أعمالنا'
						allBlogs={allBlogs}
						searchInPosts={searchInOurWorks}
						isLoading={searchIsLoading}
						postsNumber={postsNumber}
						setPostsNumber={setPostsNumber}
						pagesCategory={pagesCategory}
						postCategoryId={postCategoryId}
						setPostCategoryId={setPostCategoryId}
						setPostCategoryArray={setPostCategoryArray}
					/>
				</>
			)}
		</>
	);
};

export default OurWorks;
