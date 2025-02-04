import React from "react";

// Css Styles
import "./WhyUs.css";

// Img, Icons

import { useNavigate } from "react-router-dom";
import { HowToStart } from "../../assets/Img";

const WhyUs = () => {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/packages");
		window.scroll(0, 0);
	}

	return (
		<div className='why-us-box '>
			<div className='why-us-body d-flex flex-md-row flex-column-reverse justify-content-center align-items-center'>
				<div
					className='why-us-img d-row-flex d-none'
					data-aos-once='true'
					data-aos='fade-down'
					data-aos-delay='400'>
					<img src={HowToStart} alt='ليش تختار مُدَار' loading='lazy' />
				</div>

				<section className='why-us-text'>
					<div className='info'>
						<h1>ليش تختار مُدَار</h1>
					</div>
					<p data-aos-once='true' data-aos='fade-left' data-aos-delay='500'>
						مع منصة <span className='special-word'> مُدَار </span> يمكنك إدارة
						فريقك بكفاءة من أي مكان! نوفر لك أدوات ذكية لتوظيف الموظفين، متابعة
						الأداء،
						<div
							className='why-us-img d-row-none d-flex'
							data-aos-once='true'
							data-aos='fade-down'
							data-aos-delay='400'>
							<img src={HowToStart} alt='ليش تختار مُدَار' loading='lazy' />
						</div>
						تنظيم المهام، وإدارة الرواتب بسهولة. ✨ بالإضافة إلى ذلك، تعزز
						منصتنا التواصل بين الفريق، مما يضمن إنتاجية أعلى وانسيابية في العمل.
					</p>

					<button
						onClick={() => handleClick("")}
						className='why-btn d-flex m-auto mt-4'>
						اشترك الآن
					</button>
				</section>
			</div>
		</div>
	);
};

export default WhyUs;
