import React from "react";
import { StarIcon } from "../../../assets/Icons";

const chinaFeaturesData = [
	{
		id: 1,
		title: "تفاصيل ووقت البرنامج",
		Details: [
			{
				id: 1,
				icon: <StarIcon />,
				featured: "مدة البرنامج 9 أيام اكثر من 60 ساعة .",
			},
			{
				id: 2,
				icon: <StarIcon />,
				featured: "تدريب نظري و تطبيق عملي في الصين ",
			},
			{
				id: 3,
				icon: <StarIcon />,
				featured: "موعد المغادرة 28/6/2024 الجمعة .",
			},
			{
				id: 4,
				icon: <StarIcon />,
				featured: "والعودة 6/7/2024 السبت ويفضل تمديد الإقامة .",
			},
			{
				id: 5,
				icon: <StarIcon />,
				featured: "الاستقبال والمغادرة من إلى المطار (مع المجموعة)",
			},
			{ id: 6, icon: <StarIcon />, featured: "هدايا للمشتركين عند الوصول ." },
			{
				id: 7,
				icon: <StarIcon />,
				featured: "التنقلات الجماعية (المشي - البـــــــــاص – المترو)",
			},
		],
	},

	{
		id: 2,
		title: "مميزات الرحلة التدريبية",
		Details: [
			{
				id: 1,
				icon: <StarIcon />,
				featured: "حضور معارض متزامنة مع وقت البرنامج .",
			},
			{
				id: 2,
				icon: <StarIcon />,
				featured: " زيارة عدد من المصانع المتخصصة .",
			},
			{ id: 3, icon: <StarIcon />, featured: "الاستثمار في مشروع مشترك ." },
			{ id: 4, icon: <StarIcon />, featured: "المساهمة في كونتينر مشترك ." },
			{ id: 5, icon: <StarIcon />, featured: "تجربة المطاعم الصينية ." },
			{ id: 6, icon: <StarIcon />, featured: "دليل شامل بأشهر الأسواق ." },
			{
				id: 7,
				icon: <StarIcon />,
				featured: "شراء منتجات وبيعها لتعويض تكاليف السفر .",
			},
			{
				id: 8,
				icon: <StarIcon />,
				featured: " شهادة ريادة الأعمال باللغة الصينية",
			},
		],
	},

	{
		id: 3,
		title: "الرحلة الميدانية",
		Details: [
			{ id: 1, icon: <StarIcon />, featured: "دليل شامل بأشهر الأسواق ." },
			{
				id: 2,
				icon: <StarIcon />,
				featured: "زيارة الأسواق المتخصصة بالجملة والقطاعي.",
			},
			{ id: 3, icon: <StarIcon />, featured: "التعرف على جودة المنتجات." },
			{
				id: 4,
				icon: <StarIcon />,
				featured: "اختيار المنتجات الأكثر طلباً .",
			},
			{
				id: 5,
				icon: <StarIcon />,
				featured: "كيف تنمي مشروعك و تتوسع أكثر .",
			},
			{
				id: 6,
				icon: <StarIcon />,
				featured: 'الحصول على العلامة التجارية "البراند" ',
			},
			{ id: 7, icon: <StarIcon />, featured: "طرق التفاوض عند الشراء ." },
			{ id: 8, icon: <StarIcon />, featured: "طرق الدفع الآمنة ." },
			{
				id: 9,
				icon: <StarIcon />,
				featured: "	شركات الشحن (الجوي والبحري) .",
			},
			{
				id: 10,
				icon: <StarIcon />,
				featured: " طرق التغليف والمحافظة على المنتجات .",
			},
		],
	},

	{
		id: 4,
		title: "الرحلة التعليمية",
		Details: [
			{
				id: 1,
				icon: <StarIcon />,
				featured: "عمل دراسة الجدوى لانطلاقة مشروعك .",
			},
			{ id: 2, icon: <StarIcon />, featured: "كتابة العقود التجارية ." },
			{ id: 3, icon: <StarIcon />, featured: "عوامل الفشل في الاستيراد ." },
			{ id: 4, icon: <StarIcon />, featured: "كيف تكوّن فريق عمل ." },
			{ id: 5, icon: <StarIcon />, featured: "خطط تسويقية ." },
			{
				id: 6,
				icon: <StarIcon />,
				featured: "تجربة التعامل المباشر مع التجار .	",
			},
		],
	},

	{
		id: 5,
		title: "حقيبة تدريبية تحتوي على",
		Details: [
			{
				id: 1,
				icon: <StarIcon />,
				featured: "مذكرة تشمل شرائح البرنامج التدريبي .",
			},
			{ id: 2, icon: <StarIcon />, featured: "نماذج جاهزة لدراسة الجدوى ." },
			{ id: 3, icon: <StarIcon />, featured: "نماذج لخطط تسويقية ." },
			{ id: 4, icon: <StarIcon />, featured: "جداول نشر المحتوى ." },
			{
				id: 5,
				icon: <StarIcon />,
				featured: "نماذج إدارة الموظفين وتقييم الأداء .",
			},
		],
	},
	{
		id: 6,
		title: "تعليمات ونصائح",
		Details: [
			{
				id: 1,
				icon: <StarIcon />,
				featured: "المنتجات التي يمكن حملها في الطائرة .",
			},
			{
				id: 2,
				icon: <StarIcon />,
				featured: "لائحة سياسة الاستيراد إلى السعودية .",
			},
			{ id: 3, icon: <StarIcon />, featured: "المنتجات التي تحتاج تراخيص ." },
			{ id: 4, icon: <StarIcon />, featured: "الشحن والتغليف ." },
		],
	},

	{
		id: 7,
		title: "تعليمات السفر",
		Details: [
			{
				id: 1,
				icon: <StarIcon />,
				featured: "جواز سفر (صلاحية الانتهاء لا تقل عن 6 اشهر) .",
			},
			{
				id: 2,
				icon: <StarIcon />,
				featured: "استخراج التأشيرة قبل السفر بـ 10 أيام (تأشيرة سياحية) .",
			},
			{
				id: 3,
				icon: <StarIcon />,
				featured: "تفعيل الجوال على وضع التجوال الدولي .",
			},
		],
	},
];

const ChinaFeatures = () => {
	return (
		<>
			{chinaFeaturesData?.map((feat) => (
				<div className='box' key={feat?.id}>
					<h3>{feat?.title} </h3>
					<div className='cont'>
						<ul>
							{feat?.Details?.map((detial) => (
								<li key={detial?.id}>
									{detial?.icon}
									{detial?.featured}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</>
	);
};

export default ChinaFeatures;
