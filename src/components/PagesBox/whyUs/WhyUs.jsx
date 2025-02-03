import React from "react";

// Css Styles
import "./WhyUs.css";

// Img, Icons
import { HowToStart } from "../../../assets/Img";
import { useNavigate } from "react-router-dom";

const StartBox = () => {
	const navigate = useNavigate();

	return (
		<div className='start-box '>
			<div className='start-body d-flex justify-content-center align-items-center'>
				<div
					className='box-img mb-3 flex-1'
					data-aos-once='true'
					data-aos='fade-down'
					data-aos-delay='400'>
					<img src={HowToStart} alt='ليش تختار مُدَار' loading='lazy' />
				</div>

				<section className='flex-1'>
					<div className='info'>
						<h1>ليش تختار مُدَار</h1>
					</div>
					<p data-aos-once='true' data-aos='fade-left' data-aos-delay='500'>
						مع منصة <span className='special-word'> مُدَار </span> يمكنك إدارة
						فريقك بكفاءة من أي مكان! نوفر لك أدوات ذكية لتوظيف الموظفين، متابعة
						الأداء، تنظيم المهام، وإدارة الرواتب بسهولة. ✨ بالإضافة إلى ذلك،
						تعزز منصتنا التواصل بين الفريق، مما يضمن إنتاجية أعلى وانسيابية في
						العمل.
					</p>
					<button
						onClick={() => navigate("/packages")}
						className='why-btn d-flex m-auto mt-4'>
						اشترك الآن
					</button>
				</section>
			</div>
		</div>
	);
};

export default StartBox;
