import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MainTitle from "../MainTitle/MainTitle";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

// MUI
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useFilterStoresMutation } from "../../RTK/Api/homeApi";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";
import NotFoundData from "../NotFoundData/NotFoundData";

import { DemoImage } from "../../assets/Img";

const FeaturedStores = ({ isFetching, homePageData, setUseDisplayStores }) => {
	const [stores, setStores] = useState([]);
	const [filterStoresData, setFilterStores] = useState({
		categoryId: "",
		storeName: "",
	});

	// to handle filter stores
	const [filterStores, { isLoading }] = useFilterStoresMutation();
	const handleFilterStores = async () => {
		if (filterStoresData?.storeName || filterStoresData?.categoryId) {
			try {
				const response = await filterStores({
					storeName: filterStoresData?.storeName,
					categoryId: filterStoresData?.categoryId,
				});

				setStores(response.data);
			} catch (error) {
				console.error("Error fetching filterStores:", error);
			}
		}
	};

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setFilterStores((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	useEffect(() => {
		if (
			homePageData &&
			(!filterStoresData?.storeName ||
				!filterStoresData?.cityId ||
				!filterStoresData?.categoryId)
		) {
			setStores(homePageData);
		}
	}, [
		homePageData,
		filterStoresData?.storeName,
		filterStoresData?.cityId,
		filterStoresData?.categoryId,
	]);

	// handle show more stores
	const showMoreStores = () => {
		setUseDisplayStores((prevItems) => prevItems + 6);
	};

	return (
		<>
			<div className='stores-info '>
				<div className='container'>
					<div className='header flex-column flex-md-row gap-4 '>
						<MainTitle text={"الشركات المميزة"} />
						<div className='filter-stores-form'>
							<span>
								<AiOutlineSearch />
							</span>

							<div
								className='search_input_box_desk_top  justify-content-center align-items-center bg-white '
								style={{ height: "40px" }}>
								<div
									className='d-none justify-content-center align-items-center '
									style={{ width: "50px", height: "40px" }}>
									<AiOutlineSearch
										style={{
											color: "#1cbbbe",
											width: "22px",
											height: "22px",
										}}
									/>
								</div>

								<input
									className='w-100 search-byStoreName-input'
									type='text'
									name='storeName'
									placeholder='ابحث باسم الشركة'
									value={filterStoresData.storeName}
									onChange={(e) => {
										handleOnChange(e);
									}}
								/>
							</div>

							<div className='all-select'>
								<Select
									sx={{
										overflow: "hidden",

										"& .MuiOutlinedInput-notchedOutline": {
											border: "none",
										},
									}}
									value={filterStoresData.categoryId}
									className='select-mu'
									name='categoryId'
									onChange={(e) => {
										handleOnChange(e);
									}}
									IconComponent={IoIosArrowDown}
									displayEmpty
									renderValue={(selected) => {
										if (filterStoresData.categoryId === "" || !selected) {
											return <> نشاط الشركة </>;
										}

										const result =
											homePageData?.store_activities?.filter(
												(item) => item?.id === selected
											) || "";

										return result[0]?.name;
									}}>
									<MenuItem>الكل</MenuItem>
									{homePageData?.store_activities?.map((el) => {
										return (
											<MenuItem value={el.id} key={el.id}>
												{el.name}
											</MenuItem>
										);
									})}
								</Select>
							</div>

							<div
								className='search_input_box w-100 justify-content-center align-items-center bg-white rounded-1 '
								style={{ height: "40px" }}>
								<div
									className='d-flex justify-content-center align-items-center '
									style={{ width: "50px", height: "40px" }}>
									<AiOutlineSearch
										style={{
											color: "#1cbbbe",
											width: "22px",
											height: "22px",
										}}
									/>
								</div>

								<input
									className='w-100 search-byStoreName-input'
									type='text'
									name='storeName'
									placeholder='ابحث باسم الشركة'
									value={filterStoresData.storeName}
									onChange={(e) => {
										handleOnChange(e);
									}}
								/>
							</div>

							<button
								onClick={handleFilterStores}
								style={{
									cursor:
										(!filterStoresData.cityId &&
											!filterStoresData?.categoryId &&
											!filterStoresData?.storeName) ||
										isLoading
											? "not-allowed"
											: "pointer",
								}}
								disabled={
									(!filterStoresData.cityId &&
										!filterStoresData?.categoryId &&
										!filterStoresData?.storeName) ||
									isLoading
								}>
								تأكيد
								<span>
									<AiOutlineSearch />
								</span>
							</button>
						</div>
					</div>

					<div className='content-stores pt-4'>
						<div className='row'>
							{isLoading || isFetching ? (
								<SkeletonLoading />
							) : stores?.content_section4?.length > 0 ? (
								<>
									{Array.from({ length: 6 })?.map((_, index) => {
										return (
											<div
												data-aos='fade-left'
												data-aos-once='true'
												className=' container-box col-6 col-md-4 col-lg-3 col-xl-2 '
												key={index}>
												<div className='box'>
													<div>
														<img
															style={{
																mixBlendMode: "multiply",
															}}
															width='100%'
															height='100%'
															src={DemoImage}
															alt={""}
															loading='lazy'
														/>
													</div>
													<p className=' text-center store-name'>
														شركة المصرية للمقاولات العامة
													</p>
												</div>
											</div>
										);
									})}

									{/*{stores?.content_section4?.map((el) => {
										return (
											<div
												data-aos='fade-left'
												data-aos-once='true'
												className=' container-box col-6 col-md-4 col-lg-3 col-xl-2 '
												key={el.id}>
												<div className='box'>
													<div>
														<img
															style={{
																mixBlendMode: "multiply",
															}}
															width='100%'
															height='100%'
															src={el.logo}
															alt={el?.store_name}
															loading='lazy'
														/>
													</div>
													<p className=' text-center store-name'>
														{el?.store_name}
													</p>
												</div>
											</div>
										);
									})}*/}
									<bdi
										className={
											stores?.content_section4?.length <
											stores?.stores_total_result
												? "d-flex mt-4"
												: "d-none"
										}
										onClick={() => {
											showMoreStores();
										}}>
										عرض المزيد من الشركات
										<HiOutlineArrowNarrowLeft />
									</bdi>
								</>
							) : (
								<NotFoundData />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedStores;
