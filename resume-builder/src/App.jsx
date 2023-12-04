import React, { useState } from "react";
import "./App.css";
import CustomInput from "./components/perconalInfo";
import EducationHeadings from "./components/experience";
import InputComponent from "./components/input";
import DisplayComponent from "./components/display";

function App() {
	const style = {
		backgroundColor: "#E7E7E7",
		height: "100vh",
		padding: "30px 0 0 0",
	};

	const displayInputStyle = {
		display: "flex",
		justifyContent: "space-between",
		padding: "0 30px",
	};
	const inputStyle = {
		width: "30%",
	};
	const displayStyle = {
		width: "65%",
	};
	const [value, setValue] = useState("Default Text");

	const handleInputChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<div style={style}>
			<CustomInput
				defaultText={"Omoleegho Jonathan"}
				emailText={"omoleegho.jonathan247@gmail.com"}
				phoneText={"+234 806 194 6359"}
				addressText={"Obafemi awolowo University"}
			/>

			<EducationHeadings
				headingText={"Education"}
				fontColor={"#241a26"}
				fontSize={"20px"}
			/>
			<div style={displayInputStyle}>
				<div style={inputStyle}>
					<InputComponent onInputChange={handleInputChange} />
				</div>
				<div style={displayStyle}>
					<DisplayComponent value={value} />
				</div>
			</div>
		</div>
	);
}

export default App;
