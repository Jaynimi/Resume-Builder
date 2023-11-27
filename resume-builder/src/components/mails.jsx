import React, { useState } from "react";

export default function InfoDetails({
	emailText,
	phoneText,
	addressText,
	fontColor,
	textAlign,
	width,
	margin,
	padding,
	backgroundColor,
	display,
	justifyContent,
	boxSizing,
	flexDirection,
	flexWrap,
	height,
	alignSelf,
}) {
	const resumeInfo = {
		textAlign: textAlign || "center",
		width: width || "65%",
		backgroundColor: backgroundColor || "blue",
		color: fontColor || "white",
		flexDirection: flexDirection || "row",
		display: display || "flex",
		flexWrap: flexWrap || "wrap",
		justifyContent: justifyContent || "space-around",
		height: height || "auto",
		alignSelf: alignSelf || "flex-start",
	};

	const innerContainer = {
		flexDirection: flexDirection || "column",
		display: display || "flex",
	};
	const container = {
		boxSizing: boxSizing || "border-box",
		justifyContent: justifyContent || "space-between",
		display: display || "flex",
		width: width || "100vw",
		padding: padding || "0px 30px",
		flexDirection: flexDirection || "row",
	};
	const inputStyle = {
		color: fontColor || "black",
		textAlign: textAlign || "left",
		width: width || "",
		margin: margin || "",
		backgroundColor: backgroundColor || "white",
	};
	const [email, setEmail] = useState(emailText);
	const [phone, setPhone] = useState(phoneText);
	const [address, setAddress] = useState(addressText);

	return (
		<div className="personal-info">
			{/* <h1 className="resume-name">{fullName}</h1> */}
			<div className="contact-info">
				<div style={container}>
					<div style={innerContainer}>
						<input
							type="text"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							style={inputStyle}
						/>

						<input
							type="text"
							value={phone}
							onChange={(event) => setPhone(event.target.value)}
							style={inputStyle}
						/>

						<input
							type="text"
							value={address}
							onChange={(event) => setAddress(event.target.value)}
							style={inputStyle}
						/>
					</div>
					<div style={resumeInfo}>
						<span>{email}</span>
						<span>{phone}</span>
						<span>{address}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
