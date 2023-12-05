import React, { useState } from "react";
import "../App.css";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

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
	alignSelf,
	emailText,
	phoneText,
	addressText,
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
		// width: width || "65%",
		backgroundColor: backgroundColor || "#241a26",
		color: fontColor || "white",
		alignSelf: alignSelf || "stretch",
		fontSize: fontSize || "30px",
		padding: padding || "30px 0 10px 0",
		fontWeight: fontWeight || "700",
	};
	const container = {
		boxSizing: boxSizing || "border-box",
		justifyContent: justifyContent || "space-between",
		display: display || "flex",
		width: width || "100vw",
		padding: padding || "0px 30px",
	};
	// Input for Name
	const inputStyle = {
		color: fontColor || "black",
		textAlign: textAlign || "left",
		width: width || "",
		margin: margin || "",
		backgroundColor: backgroundColor || "white",
	};

	const displayContainer = {
		textAlign: textAlign || "center",
		// width: width || "65%",
		backgroundColor: backgroundColor || "#241a26",
		color: fontColor || "white",
		flexDirection: flexDirection || "row",
		display: display || "flex",
		flexWrap: flexWrap || "wrap",
		justifyContent: justifyContent || "space-around",
		height: height || "auto",
		alignSelf: alignSelf || "",
	};
	// contact info Display
	const displayContainers = {
		textAlign: textAlign || "center",
		width: width || "65%",
		backgroundColor: backgroundColor || "#241a26",
		color: fontColor || "white",
		flexDirection: flexDirection || "column",
		display: display || "flex",
		flexWrap: flexWrap || "wrap",
		padding: padding || "0 0 30px 0",
		fontSize: fontSize || "0.8rem",

		// justifyContent: justifyContent || "space-around",
		// height: height || "auto",
		// alignSelf: alignSelf || "",
	};

	const innerContactContainer = {
		flexDirection: flexDirection || "column",
		display: display || "flex",
		width: width || "30%",
		color: "#241a26",
		fontSize: "0.67rem",
	};
	const contactContainer = {
		boxSizing: boxSizing || "border-box",
		justifyContent: justifyContent || "space-between",
		display: display || "flex",
		width: width || "100vw",
		padding: padding || "0px 30px",
		flexDirection: flexDirection || "row",
		alignItems: alignItems || "flex-end",
		// alignItems: alignItems || "flex-start",
	};
	const contactInputStyle = {
		color: fontColor || "black",
		textAlign: textAlign || "left",
		width: width || "",
		margin: margin || "",
		backgroundColor: backgroundColor || "white",
	};
	const align = {
		textAlign: "center",
		padding: "4px 0 0 0",
		textTransform: "uppercase",
		fontWeight: "700",
	};

	const [value, setValue] = useState(defaultText);
	const [email, setEmail] = useState(emailText);
	const [phone, setPhone] = useState(phoneText);
	const [address, setAddress] = useState(addressText);

	return (
		<>
			<div style={contactContainer}>
				<div style={innerContactContainer} className="fontss">
					<div style={align}>Personal Details</div>
					Name:
					<input
						className="inputBox"
						type="text"
						value={value}
						onChange={(event) => setValue(event.target.value)}
						style={inputStyle}
					/>
					Email:
					<input
						className="inputBox"
						type="text"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						style={contactInputStyle}
					/>
					Phone:
					<input
						className="inputBox"
						type="text"
						value={phone}
						onChange={(event) => setPhone(event.target.value)}
						style={contactInputStyle}
					/>
					Address:
					<input
						className="inputBox"
						type="text"
						value={address}
						onChange={(event) => setAddress(event.target.value)}
						style={contactInputStyle}
					/>
				</div>
				<div style={displayContainers}>
					<span style={resumeInfo}>{value}</span>

					<div style={displayContainer}>
						<span>
							<IoMdMail /> {email}
						</span>
						<span>
							<FaPhone /> {phone}
						</span>
						<span>
							<FaLocationDot /> {address}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
