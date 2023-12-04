import React from "react";

export default function InputComponent({ onInputChange }) {
	const inputStyle = {
		// your input styles here
	};

	const handleInputChangeLocal = (event) => {
		const newValue = event.target.value;
		onInputChange(newValue);
	};

	return (
		<input
			className="inputBox"
			type="date"
			onChange={handleInputChangeLocal}
			style={inputStyle}
		/>
	);
}
