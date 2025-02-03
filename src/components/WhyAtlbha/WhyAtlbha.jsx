import React from "react";

// Images

import { VideoIMg } from "../../assets/Img";
import MainTitle from "../MainTitle/MainTitle";

import "./WhyAtlbha.css";
import { useNavigate } from "react-router-dom";

const WhyAtlbha = ({ hideBtn }) => {
	const navigate = useNavigate();
	return (
		<div className='out-features p-main'>
			<div className='container'>
				<section className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-5'>
					<div
						className='why-text-content'
						data-aos='fade-up-left'
						data-aos-once='true'>
						<MainTitle text={" من نحن"} />
						<h3 className='why-title mt-3'>
							حلول ذكية لإدارة فريقك عن بُعد بسهولة وكفاءة 🚀
						</h3>

						<div
							className='position-relative why-video-wrapper m-auto d-flex d-md-none justify-content-center align-items-center'
							data-aos='fade-up-right'
							data-aos-once='true'>
							<img src={VideoIMg} alt='لماذا مُدَار ؟' loading='lazy' />
						</div>
						<p className='why-text'>
							{" "}
							مُدَار هو منصتك المتكاملة لإدارة الموظفين عن بُعد بكفاءة وسهولة.
							✨ <br />
							وفّر وقتك من خلال أدوات ذكية لمتابعة الأداء، تنظيم المهام، وإدارة
							الرواتب بسلاسة. سواء كنت تدير فريقًا صغيرًا أو مؤسسة كبيرة، مُدَار
							يمنحك التحكم الكامل من أي مكان!
						</p>

						{hideBtn ? null : (
							<button onClick={() => navigate("/about-us")} className='why-btn'>
								معرفة المزيد
							</button>
						)}
					</div>

					<div
						className='position-relative why-video-wrapper m-auto d-md-flex d-none justify-content-center align-items-center'
						data-aos='fade-up-right'
						data-aos-once='true'>
						<img src={VideoIMg} alt='لماذا مُدَار ؟' loading='lazy' />
					</div>
				</section>
			</div>
		</div>
	);
};

export default WhyAtlbha;
