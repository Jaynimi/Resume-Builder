import React, { useState } from "react";
import InputComponent from "./input";
import DisplayComponent from "./display";
import "../App.css";
import EducationHeadings from "./experience";

export default function Experiences({
	astart,
	aend,
	acountry,
	acity,
	acompany,
	arole,
	adescription,
	margin,
}) {
	const displayInputStyle = {
		display: "flex",
		justifyContent: "space-between",
		padding: "0 30px",
	};
	const align = {
		textAlign: "center",
		padding: "4px 0 0 0",
		textTransform: "uppercase",
		fontWeight: "700",
	};
	const displayStyle = {
		margin: margin || "",
	};

	const [startDate, setStartDate] = useState(astart);
	const [endDate, setEndDate] = useState(aend);
	const [country, setCountry] = useState(acountry);
	const [city, setCity] = useState(acity);
	const [company, setCompany] = useState(acompany);
	const [role, setRole] = useState(arole);
	const [description, setDescription] = useState(adescription);

	const handleInputChange = (newValue) => {
		setValue(newValue);
	};

	const handleInputChanges = (newValue, setValueFunction) => {
		setValueFunction(newValue);
	};

	return (
		<>
			<div className="proff">
				<div className="eduContainer">
					<div className="eduInputs">
						<div style={align}>Professional Experience</div>
						Start Date:
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setStartDate)
							}
							type={"date"}
							placeholder={startDate}
						/>
						End Date:
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setEndDate)
							}
							type={"date"}
							placeholder={endDate}
						/>
						City:
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setCity)
							}
							type={"text"}
							placeholder={city}
						/>
						Country:
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setCountry)
							}
							type={"text"}
							placeholder={country}
						/>
						Company:
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setCompany)
							}
							type={"text"}
							placeholder={company}
						/>
						Role:
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setRole)
							}
							type={"text"}
							placeholder={role}
						/>
						Job Description
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setDescription)
							}
							type={"text"}
							placeholder={description}
						/>
					</div>

					<div className="profDisplay" style={displayStyle}>
						<div className="eduLocation">
							<div>
								<DisplayComponent value={startDate} />
								<span> - </span>
								<DisplayComponent value={endDate} />
							</div>

							<div>
								<DisplayComponent value={city} />
								<span>, </span>
								<DisplayComponent value={country} />
							</div>
						</div>
						<div className="degreeInfo">
							<div className="boldText">
								<DisplayComponent value={company} />
							</div>

							<div className="roleInfo">
								<DisplayComponent value={role} />
							</div>
							<DisplayComponent value={description} />
						</div>
					</div>
				</div>
			</div>
			{/* <EducationHeadings
				headingText={"Peofessional Experience"}
				fontColor={"#241a26"}
				fontSize={"20px"}
			/> */}
		</>
	);
}
