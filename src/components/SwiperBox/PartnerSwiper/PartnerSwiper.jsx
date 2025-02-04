import "./PartnerSwiper.css";

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
	partner14,
	partner15,
	partner16,
	partner17,
} from "../../../assets/Img/OurPartnersImages/index.js";

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
		id: 90223,
		image: partner17,
	},
	{
		id: 4908,
		image: partner01,
	},
	{
		id: 981,
		image: partner02,
	},
	{
		id: 2323,
		image: partner03,
	},
	{
		id: 423,
		image: partner04,
	},
	{
		id: 5232,
		image: partner05,
	},

	{
		id: 7232,
		image: partner07,
	},
	{
		id: 820,
		image: partner08,
	},
	{
		id: 993,
		image: partner09,
	},
	{
		id: 722,
		image: partner10,
	},
	{
		id: 883,
		image: partner11,
	},
	{
		id: 9882,
		image: partner12,
	},

	{
		id: 1465,
		image: partner14,
	},
	{
		id: 34453,
		image: partner15,
	},
	{
		id: 13543,
		image: partner16,
	},
	{
		id: 3453,
		image: partner17,
	},
	{
		id: 84834,
		image: partner01,
	},
	{
		id: 234,
		image: partner02,
	},
	{
		id: 343,
		image: partner03,
	},
	{
		id: 432,
		image: partner04,
	},
	{
		id: 50,
		image: partner05,
	},

	{
		id: 70,
		image: partner07,
	},
	{
		id: 80,
		image: partner08,
	},
	{
		id: 90,
		image: partner09,
	},
	{
		id: 100,
		image: partner10,
	},
	{
		id: 121,
		image: partner11,
	},
	{
		id: 122,
		image: partner12,
	},

	{
		id: 124,
		image: partner14,
	},
	{
		id: 125,
		image: partner15,
	},
	{
		id: 126,
		image: partner16,
	},
	{
		id: 90283409823,
		image: partner17,
	},
	{
		id: 194,
		image: partner01,
	},
	{
		id: 99989,
		image: partner02,
	},
	{
		id: 2123,
		image: partner03,
	},
	{
		id: 4223,
		image: partner04,
	},
	{
		id: 52032,
		image: partner05,
	},

	{
		id: 7230,
		image: partner07,
	},
	{
		id: 8882832,
		image: partner08,
	},
	{
		id: 99823,
		image: partner09,
	},
	{
		id: 1929380,
		image: partner10,
	},
	{
		id: 1929301,
		image: partner11,
	},
	{
		id: 19834902,
		image: partner12,
	},

	{
		id: 14615,
		image: partner14,
	},
	{
		id: 344513,
		image: partner15,
	},
	{
		id: 135143,
		image: partner16,
	},
	{
		id: 34153,
		image: partner17,
	},
	{
		id: 1921,
		image: partner01,
	},
	{
		id: 24,
		image: partner02,
	},
	{
		id: 34,
		image: partner03,
	},
	{
		id: 43,
		image: partner04,
	},
	{
		id: 53,
		image: partner05,
	},

	{
		id: 75,
		image: partner07,
	},
	{
		id: 85,
		image: partner08,
	},
	{
		id: 94,
		image: partner09,
	},
	{
		id: 150,
		image: partner10,
	},
	{
		id: 151,
		image: partner11,
	},
	{
		id: 142,
		image: partner12,
	},

	{
		id: 17e4,
		image: partner14,
	},
	{
		id: 13e5,
		image: partner15,
	},
	{
		id: 1206,
		image: partner16,
	},
	{
		id: 289823,
		image: partner17,
	},
	{
		id: 21324,
		image: partner01,
	},
	{
		id: 989,
		image: partner02,
	},
	{
		id: 2313,
		image: partner03,
	},
	{
		id: 4213,
		image: partner04,
	},
	{
		id: 52132,
		image: partner05,
	},

	{
		id: 72322,
		image: partner07,
	},
	{
		id: 882832,
		image: partner08,
	},
	{
		id: 9983,
		image: partner09,
	},
	{
		id: 193280,
		image: partner10,
	},
	{
		id: 192301,
		image: partner11,
	},
	{
		id: 198902,
		image: partner12,
	},

	{
		id: 14625,
		image: partner14,
	},
	{
		id: 344353,
		image: partner15,
	},
	{
		id: 135943,
		image: partner16,
	},
	{
		id: 4994303,
		image: partner17,
	},
];

const PartnerSwiper = () => {
	return (
		<div className='our-partners pb-5'>
			<div
				className='infinite-scroll-container'
				data-aos='fade-down'
				data-aos-once='true'
				data-aos-delay='600'>
				<div className='d-flex justify-content-center align-items-center  gap-5 animate-infinite-scroll'>
					{partnerImages?.map((item) => (
						<img
							key={item.id}
							className='img-fluid'
							src={item.image}
							loading='lazy'
							alt=''
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default PartnerSwiper;
