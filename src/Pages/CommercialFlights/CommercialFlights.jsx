import React, { useContext } from "react";
import PageTitle from "../../components/PagesTitle/PageTitle";

import AppContext from "../../Context/AppContext";
import { CloseIconX } from "../../assets/Icons";
import { Helmet } from "react-helmet-async";

import CommercialTabs from "./CommercialTabs/CommercialTabs";
import CommercialFlightsContent from "./CommercialFlightsContent/CommercialFlightsContent";
import AtlbhaBankAccountInfoModal from "./Checkout/AtlbhaBankAccountInfoModal";

function CommercialFlights() {
	const contextStore = useContext(AppContext);
	const {
		openBankAccountInfoModal,
		registrationPolicyModal,
		setRegistrationPolicyModal,
		precautionsModal,
		setPrecautionsModal,
		setRegistrationPolicy,
		setPrecautions,
		activeTab,
	} = contextStore;

	const RegistrationPolicyModal = () => {
		return (
			<div className='commercial-flights-bg-modal'>
				<div className='commercial-flights-modal'>
					<div className='header'>
						<h1>سياسة التسجيل في البرنامج التدريبي</h1>
						<CloseIconX onClick={() => setRegistrationPolicyModal(false)} />
					</div>
					<div className='body'>
						<ul>
							<li>
								⁠الصين تمنع بعض الجنسيات مثل إليمن-سوريا-العراق-لبنان-فلسطين
							</li>
							<li>⁠إدارةالبرنامج تمنع اقل من عمر 15 سنة</li>
							<li> ⁠تغيبك عن البرنامج لايحق لك استرجاع القيمة</li>
							<li> ⁠يجب احترام المشتركين والقائمين على البرنامج التدريبي</li>
							<li>الالتزام بالآداب العامة</li>
							{activeTab === "china" ? (
								<li> ⁠يجب احترام الأنظمة والقوانين الخاصة بدولة الصين</li>
							) : (
								<li> ⁠يجب احترام الأنظمة والقوانين الخاصة بدولة دبي</li>
							)}

							<li> ⁠إدارةالبرنامج لها الحق في استبعاد الاشخاص عند مخالفتهم</li>
						</ul>
						<button
							type='button'
							onClick={() => {
								setRegistrationPolicy(true);
								setRegistrationPolicyModal(false);
							}}>
							اوافق على سياسة التسجيل
						</button>
					</div>
				</div>
			</div>
		);
	};

	const PrecautionsModal = () => {
		return (
			<div className='commercial-flights-bg-modal'>
				<div className='commercial-flights-modal'>
					<div className='header'>
						<h1>
							احتياطات السفر إلى {activeTab === "china" ? "الصين" : "دبي"}
						</h1>

						<CloseIconX onClick={() => setPrecautionsModal(false)} />
					</div>
					<div className='body'>
						<ol>
							<li>حجز تذكرة الطيران عبر الخطوط السعودية في الوقت المحدد</li>
							<li>جواز سفر (صلاحية الانتهاء لا تقل عن 6 اشهر)</li>
							{activeTab === "china" ? (
								<li>
									استخراج التأشيرة قبل السفر بـ 10 أيام (تأشيرة سياحية) من
									السفارة أو القنصلية الصينية الشعبية
								</li>
							) : (
								<li>
									استخراج التأشيرة قبل السفر بـ 10 أيام (تأشيرة سياحية) من
									السفارة أو القنصلية
								</li>
							)}

							<li>
								يمكن استخراج التأشيرة عن طريق أحد المكاتب المعتمدة في السعودية
							</li>
						</ol>
						<button
							type='button'
							onClick={() => {
								setPrecautions(true);
								setPrecautionsModal(false);
							}}>
							أو افق على الشروط
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<Helmet>
				<title>مُدَار | الرحلات التجارية</title>
				<meta
					name='description'
					content='نظرة شاملة على كيفية استكشاف الأسواق الصينية بكفاءة، مع توجيهات خبيرة لتنظيم رحلات تجارية مثمرة. هذه الصفحة مصممة لمساعدتك في بناء شراكات قوية والتفاوض للحصول على أفضل العروض، ممهدة الطريق أمامك لتحقيق أقصى استفادة من فرص الاستيراد الواعدة.'
				/>
			</Helmet>
			{openBankAccountInfoModal && <AtlbhaBankAccountInfoModal />}
			{registrationPolicyModal && RegistrationPolicyModal()}
			{precautionsModal && PrecautionsModal()}
			<div className='commercial-flights'>
				<div className='container'>
					<PageTitle title={"الرحلات التجارية"} />

					{/* Tabs */}
					<CommercialTabs />

					{/* Commercial Flights Content */}
					<CommercialFlightsContent />
				</div>
			</div>
		</>
	);
}

export default CommercialFlights;
