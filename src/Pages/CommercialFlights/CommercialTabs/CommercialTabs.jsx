import React, { useContext } from "react";
import "./CommercialTabs.css";
import AppContext from "../../../Context/AppContext";

const CommercialTabs = () => {
	const contextStore = useContext(AppContext);
	const { activeTab, setActiveTab } = contextStore;

	const handleActiveTab = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className='d-flex justify-content-center align-items-center gap-2 mb-5 '>
			<button
				onClick={() => handleActiveTab("dubai")}
				className={`tabs-btn ${activeTab === "dubai" ? "active__tab" : ""}`}>
				الرحلة التجارية إلي دبي
			</button>
			<button
				onClick={() => handleActiveTab("china")}
				className={`tabs-btn ${activeTab === "china" ? "active__tab" : ""}`}>
				الرحلة التجارية إلي الصين
			</button>
		</div>
	);
};

export default CommercialTabs;
