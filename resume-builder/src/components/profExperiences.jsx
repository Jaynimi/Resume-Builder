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
}) {
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
			<div>
				<div className="eduContainer">
					<div className="eduInputs">
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setStartDate)
							}
							type={"date"}
						/>
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setEndDate)
							}
							type={"date"}
						/>
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setCity)
							}
							type={"text"}
						/>
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setCountry)
							}
							type={"text"}
						/>
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setCompany)
							}
							type={"text"}
						/>
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setRole)
							}
							type={"text"}
						/>
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setDescription)
							}
							type={"text"}
						/>
					</div>

					<div className="eduDisplay">
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

							<DisplayComponent value={role} />
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
