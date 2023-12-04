import React, { useState } from "react";
import "../App.css";

export default function EducationHeadings({
	headingText,
	fontColor,
	textAlign,
	width,
	margin,
	padding,
	backgroundColor,
	display,
	justifyContent,
	boxSizing,
	alignSelf,
	flexDirection,
	flexWrap,
	height,
	alignItems,
	fontSize,
	fontWeight,
}) {
	// Display for Name
	const resumeInfo = {
		textAlign: textAlign || "center",
		// backgroundColor: backgroundColor || "white",
		color: fontColor || "white",
		alignSelf: alignSelf || "stretch",
		fontSize: fontSize || "30px",
		padding: padding || "2px 0 2px 0",
		fontWeight: fontWeight || "700",
	};

	// contact info Display
	const displayContainers = {
		textAlign: textAlign || "center",
		width: width || "65%",
		backgroundColor: backgroundColor || "white",
		// color: fontColor || "white",
		flexDirection: flexDirection || "column",
		display: display || "flex",
		flexWrap: flexWrap || "wrap",
	};

	const innerContactContainer = {
		flexDirection: flexDirection || "column",
		display: display || "flex",
		width: width || "30%",
	};
	const contactContainer = {
		boxSizing: boxSizing || "border-box",
		justifyContent: justifyContent || "space-between",
		display: display || "flex",
		width: width || "100vw",
		padding: padding || "0px 30px",
		flexDirection: flexDirection || "row",
		alignItems: alignItems || "",
	};

	return (
		<>
			<div style={contactContainer}>
				<div style={innerContactContainer}></div>
				<div style={displayContainers}>
					<div className="headingText" style={resumeInfo}>
						{headingText}
					</div>
				</div>
			</div>
		</>
	);
}
