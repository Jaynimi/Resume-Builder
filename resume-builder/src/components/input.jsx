import React from "react";

export default function InputComponent({ onInputChange, type, placeholder }) {
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
			type={type}
			onChange={handleInputChangeLocal}
			style={inputStyle}
			defaultValue={placeholder}
		/>
	);
}
