import React, { useState } from "react";
import "./App.css";
import CustomInput from "./components/perconalInfo";
import EducationHeadings from "./components/experience";
import InputComponent from "./components/input";
import DisplayComponent from "./components/display";
import Education from "./components/education";
import Experiences from "./components/profExperiences";

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
	const [endDate, setEndDate] = useState("Default Textssss");

	const handleInputChange = (newValue) => {
		setValue(newValue);
	};

	const handleInputChanges = (newValue, setValueFunction) => {
		setValueFunction(newValue);
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
			{/* <div style={displayInputStyle}>
				<div style={inputStyle}>
					<InputComponent onInputChange={handleInputChange} />
				</div>
				<div style={displayStyle}>
					<DisplayComponent value={value} />
				</div>
			</div>
			<div style={displayInputStyle}>
				<div style={inputStyle}>
					<InputComponent
						onInputChange={(newValue) =>
							handleInputChanges(newValue, setEndDate)
						}
					/>
				</div>
				<div style={displayStyle}>
					<DisplayComponent value={endDate} />
				</div>
			</div> */}
			<Education
				astart={"11-12-2022"}
				aend={"present"}
				acity={"Ile-Ife, Osun State"}
				acountry={"Nigeria"}
				aschool={"Obafemi Awolowo University"}
				adegree={"Bachelors in Agriculture (Animal SCiences)"}
			/>
			<EducationHeadings
				headingText={"Peofessional Experience"}
				fontColor={"#241a26"}
				fontSize={"20px"}
				margin={"-60px 15% 25px 15%"}
			/>
			<Experiences
				astart={"11-12-2022"}
				aend={"present"}
				acity={"Ile-Ife, Osun State"}
				acountry={"Nigeria"}
				acompany={"Bangladesh Social Club"}
				arole={"Frontend Developer"}
				adescription={
					"Spearheaded the collaborative effort to construct the company’s website from inception, showcasing expertise in HTML, CSS, and JavaScript. Crafted and deployed responsive web pages for both mobile and desktop platforms, significantly improving user engagement."
				}
			/>
		</div>
	);
}

export default App;
