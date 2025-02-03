import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./BlogHero.css";
import { SvgSearch } from "../../assets/Icons";
import AppContext from "../../Context/AppContext";

const BlogHero = ({ searchInPosts, pageTitle, setPosts, allBlogs }) => {
	const [search, setSearch] = useState("");
	const { postCategoryId } = useContext(AppContext);

	const handleSearch = () => {
		// Trigger search explicitly when button is clicked
		if (search) {
			searchInPosts({ query: search, postCategoryId });
		}
	};

	useEffect(() => {
		const debounce = setTimeout(() => {
			if (search !== "") {
				const fetchData = async () => {
					try {
						const response = await searchInPosts({
							query: search,
							postCategoryId,
						});
						setPosts(response?.data?.data);
					} catch (error) {
						console.error("Error fetching searchInBlogs:", error);
					}
				};
				fetchData();
			} else {
				setPosts(allBlogs);
			}
		}, 500);
		return () => clearTimeout(debounce);
	}, [search, postCategoryId, setPosts, allBlogs, searchInPosts]);

	return (
		<div className='blog-hero'>
			<div className='container'>
				<div className='all'>
					<div className='form'>
						<input
							type='text'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder={`البحث في ${pageTitle}`}
						/>
						<button onClick={handleSearch}>
							<SvgSearch />
						</button>
					</div>
					<h4>{pageTitle}</h4>
				</div>
			</div>
		</div>
	);
};

BlogHero.propTypes = {
	searchInPosts: PropTypes.func.isRequired,
	pageTitle: PropTypes.string.isRequired,
	setPosts: PropTypes.func.isRequired,
};

export default BlogHero;
