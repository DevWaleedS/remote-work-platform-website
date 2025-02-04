import React from "react";

import "./WhatWeOffer.css";
import {
	HomeServiceFive,
	HomeServiceFour,
	HomeServiceOne,
	HomeServiceSeven,
	HomeServiceSix,
	HomeServiceThree,
	HomeServiceTow,
} from "../../assets/Img";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const WhatWeOfferData = [
	{
		id: 1,
		icon: HomeServiceOne,
		alt: "التواصل الفعّال عن بُعد",
		title: "التواصل الفعّال عن بُعد",
		description:
			"تمكّن المنصة الشركات من التواصل المباشر مع فرق العمل عن بُعد عبر أدوات متطورة تسهل الاجتماعات الافتراضية والمحادثات الفورية.....",
	},

	{
		id: 2,
		alt: "إدارة المهام والمشاريع",
		icon: HomeServiceTow,
		title: "إدارة المهام والمشاريع",
		description:
			"توفّر المنصة أدوات متكاملة لتوزيع المهام، متابعة التقدم، وضمان إنجاز المشاريع في الوقت المحدد.....",
	},

	{
		id: 3,
		alt: "قياس الإنتاجية",

		icon: HomeServiceThree,
		title: "قياس الإنتاجية",
		description:
			"تتيح المنصة للشركات قياس أداء الموظفين عن بُعد من خلال تقارير مفصلة وتحليلات دقيقة....",
	},

	{
		id: 4,
		alt: "التدريب والتطوير عن بُعد",

		icon: HomeServiceFour,
		title: "⁠⁠التدريب والتطوير عن بُعد",
		description:
			"تقدّم المنصة دورات تدريبية افتراضية لتنمية مهارات الموظفين وزيادة كفاءتهم في العمل عن بُعد....",
	},
	{
		id: 5,
		alt: "إدارة التوظيف عن بُعد",
		icon: HomeServiceFive,
		title: "إدارة التوظيف عن بُعد",
		description:
			" تساعد المنصة الشركات في عملية التوظيف عن بُعد، بدءًا من نشر الوظائف وحتى إجراء المقابلات الافتراضية....",
	},

	{
		id: 6,
		alt: "تخزين البيانات والمستندات",
		icon: HomeServiceSix,
		title: "تخزين البيانات والمستندات",
		description:
			" توفّر المنصة مساحة تخزين آمنة وسحابية للبيانات والمستندات المهمة، مع إمكانية الوصول إليها من أي مكان.... ",
	},

	{
		id: 7,
		alt: "دعم فني متخصص",
		icon: HomeServiceSeven,
		title: "دعم فني متخصص",
		description:
			"توفّر المنصة خدمات دعم فني متخصصة للمساعدة في حل المشكلات وتحسين الأداء....",
	},
];

const WhatWeOffer = () => {
	const navigate = useNavigate();

	const goUpWindow = () => {
		window.scroll(0, 0);
	};
	return (
		<section className='what-we-offer-section '>
			<section className='container'>
				<section className='what-we-offer-box-content row  align-items-center'>
					{/* text */}
					<div className='col-lg-12 services-head-section mb-4 text-center'>
						<h2>ماذا نقدم لك؟</h2>

						<p>
							منصة <span className='special-word'>المعرفة للعمل عن بُعد</span>{" "}
							توفر لك حلولًا متكاملة لإدارة فرق العمل عن بُعد، حيث تقدم أدوات
							فعالة لتسهيل التواصل، متابعة المهام، وقياس إنتاجية الموظفين، مما
							يضمن لك نجاح عملياتك التجارية بكفاءة عالية.
						</p>
					</div>

					<div className='col-12 mb-3'>
						<div className='row justify-content-center gap-3 '>
							{WhatWeOfferData?.map((item) => (
								<div
									data-aos-once='true'
									data-aos='fade-up'
									onClick={() => {
										goUpWindow();

										localStorage.setItem(
											"WhatWeOfferInfo",
											JSON.stringify(item)
										);
										navigate(
											`/whatWeOffer/${encodeURIComponent(
												item.title.replace(/[^a-zA-Z0-9\u0621-\u064A]+/g, "-")
											)}`
										);
									}}
									className='what-we-offer-boxs text-center col-xl-4 col-lg-2  col-md-12  '
									key={item.id}>
									<div className='mb-2'>
										<div>
											<img
												className='what-we-offer-img '
												src={item?.icon}
												alt={item.alt}
											/>
										</div>
										<h3 className='offer-title'>{item?.title}</h3>
									</div>

									<p className='offer-description'>{item?.description}</p>
								</div>
							))}
						</div>
					</div>

					<div className='col-12'>
						<bdi
							className='mt-4 more-service-btn'
							onClick={() => {
								navigate("/services");
							}}>
							المزيد من الخدمات
							<HiOutlineArrowNarrowLeft />
						</bdi>
					</div>
				</section>
			</section>
		</section>
	);
};

export default WhatWeOffer;
