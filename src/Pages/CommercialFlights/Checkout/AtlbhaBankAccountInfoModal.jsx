import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../Context/AppContext";

// Icons
import { IoCloseSharp } from "react-icons/io5";
import { FaSquarePhoneFlip } from "react-icons/fa6";

import "./AtlbhaBankAccount.css";

const AtlbhaBankAccountInfoModal = () => {
	const navigate = useNavigate();
	const contextStore = useContext(AppContext);
	const { setOpenBankAccountInfoModal } = contextStore;

	const handleCloseModal = async () => {
		navigate("/commercial_flights/features");
		setOpenBankAccountInfoModal(false);
	};

	return (
		<div className='commercial-flights-bg-modal'>
			<div className='commercial-flights-modal bank-modal'>
				<div
					className='header'
					style={{ backgroundColor: "#1dbbbe", color: "#fff" }}>
					<h1 style={{ color: "#fff" }}>تم الاشتراك بنجاح </h1>
					<IoCloseSharp
						style={{ color: "#fff", width: "24px", height: "24px" }}
						onClick={() => handleCloseModal()}
					/>
				</div>
				<div className='body' style={{ height: "280px" }}>
					<div>
						<h4 className='mb-4 bank-modal-title'>
							سيتم التواصل معك من قبل إدارة الرحلة التجارية{" "}
						</h4>
						<section className='d-flex justify-content-start align-items-center '>
							<div>
								<FaSquarePhoneFlip className='phone-icon' />
								<span className='contact-name'>لجين :</span>
							</div>
							<a className='phone-number' href='tel:0505549056'>
								0505549056
							</a>
						</section>
					</div>
					<button type='button' onClick={handleCloseModal}>
						موافق
					</button>
				</div>
			</div>
		</div>
	);
};

export default AtlbhaBankAccountInfoModal;
