import React from "react";

export default function DisplayComponent({ value }) {
	const resumeInfo = {
		// your span styles here
	};

	return <span style={resumeInfo}>{value}</span>;
}
