import React from "react";

import "../Header/Header.css";
import {
	FaFacebookF,
	FaInstagram,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

// const socialIcons = {
// 	facebook: FaFacebookF,
// 	"x.com": FaXTwitter,
// 	instagram: FaInstagram,
// 	snapchat: FaSnapchatGhost,
// 	youtube: FaYoutube,
// 	tiktok: FaTiktok,
// };

const socialIcons = [
	<FaFacebookF />,
	<FaXTwitter />,
	<FaInstagram />,
	<FaSnapchatGhost />,
	<FaYoutube />,
	<FaTiktok />,
];
const FooterLogo = ({ logoFooter, linkWebsite }) => {
	return (
		<div className='box-left'>
			<a className='main-footer__logo' href='#0'>
				<img
					width='100%'
					height='100%'
					src={logoFooter}
					alt=''
					loading='lazy'
				/>
			</a>

			<ul>
				{/*{linkWebsite?.length > 0 &&
					linkWebsite.map((el) => {
						const platform = Object.keys(socialIcons).find((key) =>
							el.link.includes(key)
						);

						if (!platform) return null;

						const Icon = socialIcons[platform];

						return (
							<li key={el.id}>
								<a className='linkWebsite-icon-style' href={el.link}>
									<Icon />
								</a>
							</li>
						);
					})}*/}

				{socialIcons.map((el, index) => {
					return (
						<li key={index}>
							<a className='linkWebsite-icon-style' href={el.link}>
								{el}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default FooterLogo;
