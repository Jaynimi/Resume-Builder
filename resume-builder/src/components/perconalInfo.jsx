import React, { useState } from "react";
export default function CustomInput({
	defaultText,
	fontColor,
	textAlign,
	width,
	margin,
	padding,
	backgroundColor,
	display,
	justifyContent,
	boxSizing,
}) {
	const resumeInfo = {
		textAlign: textAlign || "center",
		width: width || "65%",
		backgroundColor: backgroundColor || "blue",
		color: fontColor || "white",
	};
	const container = {
		boxSizing: boxSizing || "border-box",
		justifyContent: justifyContent || "space-between",
		display: display || "flex",
		width: width || "100vw",
		padding: padding || "0px 30px",
	};
	const inputStyle = {
		color: fontColor || "black", // Set font color from prop or use black as default
		textAlign: textAlign || "left", // Set text align from prop or use left as default
		width: width || "", // Set width from prop or use 200px as default
		margin: margin || "", // Set margin from prop or use 10px as default
		backgroundColor: backgroundColor || "white", // Set background from prop or use white as default
	};
	const [value, setValue] = useState(defaultText);

	return (
		<>
			<div style={container}>
				<input
					type="text"
					value={value}
					onChange={(event) => setValue(event.target.value)}
					style={inputStyle}
				/>
				<span style={resumeInfo}>{value}</span>
			</div>
		</>
	);
}
