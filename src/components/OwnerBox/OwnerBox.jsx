import React from "react";

import "./OwnerBox.css";
import moment from "moment-with-locales-es6";

const OwnerBox = ({ ImgOwner, NameOwner, DateOwner }) => {
	// formatDate
	const formatDate = (date) => {
		const calcPassedDays = (date1, date2) =>
			Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
		const currentDate = calcPassedDays(+new Date(), +new Date(date));

		if (currentDate === 0)
			return "اليوم،" + moment(date).locale("ar").format(" h:mm a");
		if (currentDate === 1)
			return "أمس،" + moment(date).locale("ar").format(" h:mm a");
		if (currentDate === 2)
			return "منذ يومان،" + moment(date).locale("ar").format(" h:mm a");
		if (currentDate <= 7)
			return (
				`منذ ${currentDate} أيام،` + moment(date).locale("ar").format(" h:mm a")
			);

		return moment(date).locale("ar").format("D MMMM YYYY,  h:mm a");
	};
	return (
		<>
			<div className='owner-box'>
				<div className='box'>
					<div className='box-img'>
						<img
							width='100%'
							height='100%'
							src={ImgOwner}
							alt='NameOwner'
							loading='lazy'
						/>
					</div>
					<div className='info'>
						<h5>{NameOwner}</h5>
						<h6>{formatDate(DateOwner)}</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default OwnerBox;
