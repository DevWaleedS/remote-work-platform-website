import React, { useState } from "react";
import DOMPurify from "dompurify";
// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// RTK Query
import { useGetCommonQuestionsQuery } from "../../RTK/Api/commonQuestionApi";

import { LoadingPage } from "../../components";

const CommonQuestion = () => {
	const [expanded, setExpanded] = useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	// Common questions
	const { data: commonQuestion, isLoading } = useGetCommonQuestionsQuery();

	if (isLoading) {
		return <LoadingPage />;
	}
	return (
		<>
			{" "}
			<div className='faqs '>
				{commonQuestion?.map((item, index) => (
					<Accordion
						key={item?.id}
						expanded={expanded === index}
						onChange={handleChange(index)}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`${index}-content`}
							id={`${index}-header`}>
							<h6>{item?.question}</h6>
						</AccordionSummary>
						<AccordionDetails>
							<div
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(item?.answer),
								}}
							/>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</>
	);
};

export default CommonQuestion;
