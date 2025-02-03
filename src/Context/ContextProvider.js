import React, { useState } from "react";

import AppContext from "./AppContext";

const ContextProvider = (props) => {
	const [message, setMessage] = useState("");
	const [userType, setUserType] = useState("store");
	const [precautions, setPrecautions] = useState(false);
	const [showAlertModal, setShowAlertModal] = useState(false);
	const [precautionsModal, setPrecautionsModal] = useState(false);
	const [registrationPolicy, setRegistrationPolicy] = useState(false);
	const [registrationPolicyModal, setRegistrationPolicyModal] = useState(false);
	const [openBankAccountInfoModal, setOpenBankAccountInfoModal] =
		useState(false);

	// To handle get posts data..
	const [postCategoryArray, setPostCategoryArray] = useState([]);
	const [postCategoryId, setPostCategoryId] = useState(0);
	const [activeTab, setActiveTab] = useState("dubai");
	const [postsNumber, setPostsNumber] = useState(6);

	const context = {
		userType,
		setUserType,
		showAlertModal,
		setShowAlertModal,
		message,
		setMessage,
		registrationPolicyModal,
		setRegistrationPolicyModal,
		precautionsModal,
		setPrecautionsModal,
		registrationPolicy,
		setRegistrationPolicy,
		precautions,
		setPrecautions,

		// To handle get posts data..
		postsNumber,
		setPostsNumber,
		postCategoryId,
		setPostCategoryId,
		setPostCategoryArray,
		postCategoryArray,

		openBankAccountInfoModal,
		setOpenBankAccountInfoModal,

		// handle active tabs on commre
		activeTab,
		setActiveTab,
	};

	return (
		<AppContext.Provider value={context}>{props.children}</AppContext.Provider>
	);
};

export default ContextProvider;
