import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { StarIcon } from "../../../assets/Icons";
import AppContext from "../../../Context/AppContext";

function Packages() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const contextStore = useContext(AppContext);
	const { activeTab } = contextStore;

	return (
		<div className='tab'>
			<div className='title'>
				{activeTab === "china" ? (
					<h1>باقات الاشتراك في برنامج الرحلة التجارية إلى الصين</h1>
				) : (
					<h1>باقات الاشتراك في برنامج الرحلة التجارية إلى دبي</h1>
				)}
			</div>
			<div className='packages'>
				<div className='package'>
					<div className='title'>
						<h6>الباقة الإقتصادية</h6>
					</div>
					<div className='body'>
						<ul>
							<li>
								<StarIcon /> غرفة مشتركة (شخصين)
							</li>
							<li>
								<StarIcon /> مساعدين رجال ونساء مع المتدربين .
							</li>
							<li>
								<StarIcon />
								ضيافة عامة داخل القاعة .
							</li>
							<li>
								<StarIcon /> متجر الكتروني مدة سنه مجاناً .
							</li>
							<li>
								<StarIcon /> مجموعة تصاميم اعلانية .
							</li>
							<li>
								<StarIcon /> دورات مستقبلية مجاناً .
							</li>
						</ul>
						<NavLink
							onClick={() => localStorage?.setItem("packageId", 1)}
							className='w-100'
							to='/commercial_flights/registerForm'>
							<button>الباقة الإقتصادية</button>
						</NavLink>
					</div>
				</div>
				<div className='package'>
					<div className='title title-1'>
						<h6>باقة الأعمال</h6>
					</div>
					<div className='body'>
						<ul>
							<li>
								<StarIcon /> غرفة خاصة .
							</li>
							<li>
								<StarIcon /> ضيافة خاصة .
							</li>
							<li>
								<StarIcon /> مقعد بالقاعة والباص في المقدمة
							</li>

							<li>
								<StarIcon /> شريحة اتصال + انترنت .
							</li>
							<li>
								<StarIcon /> متجر الكتروني + تصاميم اعلانية .
							</li>
							<li>
								<StarIcon /> فيديو اعلاني للمتجر .
							</li>
							<li>
								<StarIcon /> حملة اعلانية مجانية.
							</li>

							<li>
								<StarIcon /> دورات مستقبلية مجاناً .
							</li>
						</ul>
						<NavLink
							onClick={() => localStorage?.setItem("packageId", 2)}
							className='w-100'
							to='/commercial_flights/registerForm'>
							<button>باقة الأعمال</button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Packages;
