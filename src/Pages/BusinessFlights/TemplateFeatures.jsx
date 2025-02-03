import React from "react";
import { LuLayoutTemplate } from "react-icons/lu";

const templateFeat = [
	{ id: 1, name: "إشتراك لمدة 6 أشهر", description: "" },
	{ id: 2, name: "عدد لامحدود من المنتجات", description: "" },
	{ id: 3, name: "عدد لامحدود من الطلبات ", description: "" },
	{ id: 4, name: " بدون عمولة على المبيعات", description: "" },
	{ id: 5, name: "تفعيل الدفع الإلكتروني ", description: "" },
	{ id: 6, name: "تفعيل الدفع عند الاستلام ", description: "" },
	{ id: 7, name: "شركات الشحن ", description: "" },
	{ id: 8, name: "عرض واحتساب ضريبة القيمة المضافة", description: "" },
	{ id: 9, name: "التحويل البنكي", description: "" },
	{ id: 10, name: "Apple pay تفعيل", description: "" },
	{ id: 11, name: "تفعيل التقسيط", description: "" },
	{ id: 12, name: "كوبونات التخفيض ", description: "" },
	{ id: 13, name: "السلّات المتروكة ", description: "" },
	{ id: 14, name: "العروض الخاصة ", description: "" },
	{ id: 15, name: "تحسين محركات البحث SEO", description: "" },
	{ id: 16, name: "تخصيص التصميم بالهوية الخاصة", description: "" },
	{ id: 17, name: "حجز رابط خاص (دومين)", description: "" },
	{ id: 18, name: "مدونة المتجر ", description: "" },
	{ id: 19, name: " وضع الصيانة", description: "" },
	{ id: 20, name: "دعم الخيارات المتعددة للمنتج ", description: "" },
	{ id: 21, name: "تصدير المنتجات واستيرادها ", description: "" },
];

const TemplateFeatures = () => {
	return (
		<div className='business_plan__content '>
			<>
				<h3 className='business_plan__title'>مميزات القالب :</h3>
				<div className='row justify-content-center  gap-3 '>
					{templateFeat?.map((item) => (
						<div
							className='business_plan_boxes text-center col-xl-4 col-lg-2  col-md-12  '
							key={item.id}>
							<h3 className=' d-flex justify-content-center align-items-center business_plan__name '>
								{item?.name}
							</h3>
							<div className='business_plan__description'>
								{item?.description}
							</div>
							<span className='template_icon'>
								<LuLayoutTemplate />
							</span>
						</div>
					))}
				</div>
				<a
					href='http://store.atlbha.com'
					target='_blank'
					rel='noopener noreferrer'
					className='business_plan__link'>
					يمكنك الاطلاع على لوحه التحكم واكتشاف مزايا القالب
				</a>
			</>
		</div>
	);
};

export default TemplateFeatures;
