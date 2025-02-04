import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./PartnerSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PartnerBox from "./PartnerBox.jsx";
import {
	partner01,
	partner02,
	partner03,
	partner04,
	partner05,
	partner07,
	partner08,
	partner09,
	partner10,
	partner11,
	partner12,
	partner13,
	partner14,
	partner15,
	partner16,
	partner17,
} from "../../../assets/Img/OurPartnersImages/index.js";
import MainTitle from "../../MainTitle/MainTitle.jsx";

const partnerImages = [
	{
		id: 1,
		image: partner01,
	},
	{
		id: 2,
		image: partner02,
	},
	{
		id: 3,
		image: partner03,
	},
	{
		id: 4,
		image: partner04,
	},
	{
		id: 5,
		image: partner05,
	},

	{
		id: 7,
		image: partner07,
	},
	{
		id: 8,
		image: partner08,
	},
	{
		id: 9,
		image: partner09,
	},
	{
		id: 10,
		image: partner10,
	},
	{
		id: 11,
		image: partner11,
	},
	{
		id: 12,
		image: partner12,
	},

	{
		id: 13,
		image: partner13,
	},
	{
		id: 14,
		image: partner14,
	},
	{
		id: 15,
		image: partner15,
	},
	{
		id: 16,
		image: partner16,
	},
	{
		id: 17,
		image: partner17,
	},
];

const PartnerSwiper = () => {
	return (
		<div className='our-partners p-main'>
			<div className='container'>
				<MainTitle text={"شركاء النجاح"} />
				<div
					className='all mt-2'
					data-aos='fade-down'
					data-aos-once='true'
					data-aos-delay='600'>
					<Swiper
						slidesPerView={10}
						spaceBetween={10}
						loop={true}
						speed={6000}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
							reverseDirection: true,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							200: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 4,
							},
							1200: {
								slidesPerView: 6,
							},
						}}
						modules={[Autoplay]}
						className='swiper-partner'>
						{partnerImages?.map((item) => {
							return (
								<SwiperSlide key={item.id}>
									<PartnerBox Img={item.image} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</div>
	);
};
export default PartnerSwiper;
