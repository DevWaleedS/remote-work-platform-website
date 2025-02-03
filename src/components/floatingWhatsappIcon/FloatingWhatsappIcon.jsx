import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./FloatingWhatsappIcon.css";

const FloatingWhatsappIcon = ({ logo }) => {
	return (
		<FloatingWhatsApp
			allowEsc
			avatar={logo}
			allowClickAway
			notification
			notificationSound
			notificationDelay={10}
			chatboxStyle={{
				borderRadius: "8px",
				direction: "ltr",
			}}
			className='floating-whatsapp-icon'
			accountName='منصة مُدَار'
			statusMessage='سيتم التواصل في أقرب وقت'
			chatMessage='مرحباً، كيف يمكنني مساعدتك؟'
			placeholder='أكتب رسالتك هنا...'
			phoneNumber='+966567009332'
		/>
	);
};

export default FloatingWhatsappIcon;
