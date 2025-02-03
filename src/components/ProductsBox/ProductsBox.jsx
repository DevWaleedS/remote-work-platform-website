import React, { useState } from "react";

import { Pagination, Skeleton, Select, MenuItem } from "@mui/material";

// Icon
import { IoIosArrowDown } from "react-icons/io";

import PopupNotification from "../Popup/PopupNotification";
import ProductCard from "../Products/ProductCard";

// RTK Query
import {
	useGetSouqAtlbhaProductsQuery,
	useGetSpecialProductsQuery,
} from "../../RTK/Api/productsApi";

import "./ProductsBox.css";
import SwiperProduct from "../SwiperBox/ProductSwiper/SwiperProduct";

const ProductsBox = ({ id: category_id, isSpecial }) => {
	const [isOpenPopup, setIsOpenPopup] = useState(false);
	const [idProduct, setIdProduct] = useState(null);

	const [pageNumber, setPageNumber] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);

	const { data: souqAtlbhaProducts, isLoading: souqProductLoading } =
		useGetSouqAtlbhaProductsQuery({
			category_id,
			pageNumber,
			currentPage,
		});

	const { data: specialProducts, isLoading: specialProductsLoading } =
		useGetSpecialProductsQuery({
			pageNumber,
			currentPage,
		});

	let loading = souqProductLoading || specialProductsLoading;

	let products = isSpecial
		? specialProducts?.specialProducts
		: souqAtlbhaProducts?.products;

	let total_result = isSpecial
		? specialProducts?.total_result
		: souqAtlbhaProducts?.total_result;

	let page_count = isSpecial
		? specialProducts?.page_count
		: souqAtlbhaProducts?.page_count;
	const SkeletonLoading = () => (
		<>
			{Array(8)
				.fill(null)
				.map((_, index) => (
					<div className='skeletonLoading' key={index}>
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
								<Skeleton variant='text' width={320} height={16} />
							</div>
						</div>
					</div>
				))}
		</>
	);

	if (loading) {
		return (
			<div className='skeletonLoading container'>
				<SkeletonLoading />
			</div>
		);
	}

	return (
		<div className='soq-product-page'>
			<div className='container'>
				{products?.length > 0 ? (
					<section className='mb-5'>
						<div className='soq-product-body'>
							{products?.map((product) =>
								isSpecial ? (
									<SwiperProduct
										key={product.id}
										Img={product.cover}
										Name={product.name}
										Evaluate={product.productRating}
										Mark={product.selling_price}
										Url={product.url}
									/>
								) : (
									<ProductCard
										key={product.id}
										product={product}
										setIsOpenPopup={setIsOpenPopup}
										setIdProduct={setIdProduct}
									/>
								)
							)}
						</div>

						<div
							className='btn-container-row'
							style={{
								justifyContent:
									products.length < total_result ? null : "center",
							}}>
							<div className='row-per-page-box'>
								<i>
									<IoIosArrowDown style={{ width: "22px" }} />
								</i>
								عدد الصفوف
								<Select
									value={pageNumber}
									onChange={(event) => {
										setPageNumber(event.target.value);
										setCurrentPage(1);
									}}>
									{[4, 8, 12, 16, 32].map((item) => (
										<MenuItem key={item} value={item}>
											{item}
										</MenuItem>
									))}
								</Select>
							</div>

							{console.log(currentPage)}
							{products.length < total_result && (
								<>
									<Pagination
										count={page_count}
										page={currentPage}
										onChange={(event, value) => {
											setCurrentPage(value);
										}}
									/>
								</>
							)}
							<div></div>
						</div>
					</section>
				) : (
					<div
						className='d-flex flex-row align-items-center justify-content-center w-100'
						style={{ height: "50vh" }}>
						<p>لاتوجد منتجات في هذا القسم</p>
					</div>
				)}
			</div>

			<PopupNotification
				isOpenPopup={isOpenPopup}
				setIsOpenPopup={setIsOpenPopup}
				idProduct={idProduct}
			/>
		</div>
	);
};

export default ProductsBox;
