import React, { useState } from "react";
export default function CustomInput({
	defaultText,
	fontColor,
	textAlign,
	width,
	margin,
	background,
}) {
	const inputStyle = {
		color: fontColor || "white", // Set font color from prop or use black as default
		textAlign: textAlign || "left", // Set text align from prop or use left as default
		width: width || "200px", // Set width from prop or use 200px as default
		margin: margin || "10px", // Set margin from prop or use 10px as default
		background: background || "white", // Set background from prop or use white as default
	};
	const [value, setValue] = useState(defaultText);

	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				style={inputStyle}
			/>
			<div>{value} + HOOHA</div>;{" "}
		</div>
	);
}
