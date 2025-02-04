import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../Context/AppContext";
const InformationLinks = ({ el, goUpWindow }) => {
	const navigate = useNavigate();

	return (
		<li
			key={el?.id}
			className='main-footer-link'
			onClick={() => {
				navigate(
					`/page/${el.id}/${encodeURIComponent(
						el?.title.replace(/[^a-zA-Z0-9\u0621-\u064A]+/g, "-").toLowerCase()
					)}`
				);

				goUpWindow();
			}}>
			{el?.title}
		</li>
	);
};

const FooterInfo = ({ title, links, information, goUpWindow }) => {
	return (
		<li className='text-center text-lg-end'>
			<h4>{title}</h4>

			<ul className='text-center'>
				{/*{links?.length > 0 && information?.length > 0
					? links?.map((el) => (
							<InformationLinks el={el} goUpWindow={goUpWindow} key={el?.id} />
					  ))
					: null}*/}
				{links?.map((el) => (
					<InformationLinks el={el} goUpWindow={goUpWindow} key={el?.id} />
				))}
			</ul>
		</li>
	);
};

export default FooterInfo;
