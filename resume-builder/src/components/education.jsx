import React, { useState } from "react";
import InputComponent from "./input";
import DisplayComponent from "./display";
import "../App.css";
import EducationHeadings from "./experience";

export default function Education({
	astart,
	aend,
	acountry,
	acity,
	aschool,
	adegree,
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
		width: "65%",
	};

	const [startDate, setStartDate] = useState(astart);
	const [endDate, setEndDate] = useState(aend);
	const [country, setCountry] = useState(acountry);
	const [city, setCity] = useState(acity);
	const [school, setSchool] = useState(aschool);
	const [degree, setDegree] = useState(adegree);

	const handleInputChanges = (newValue, setValueFunction) => {
		setValueFunction(newValue);
	};

	return (
		<>
			<div>
				<div className="eduContainer">
					<div className="eduInputs eduInput">
						<div style={align}>education</div>
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
						School:
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setSchool)
							}
							type={"text"}
							placeholder={school}
						/>
						Degree:
						<InputComponent
							onInputChange={(newValue) =>
								handleInputChanges(newValue, setDegree)
							}
							type={"text"}
							placeholder={degree}
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
								<DisplayComponent value={school} />
							</div>

							<DisplayComponent value={degree} />
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

{
	/* <div style={displayInputStyle}>
    <div style={inputStyle}>
        <InputComponent onInputChange={handleInputChange} type={"date"} />
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
            type={"date"}
        />
    </div>
    <div style={displayStyle}>
        <DisplayComponent value={endDate} />
    </div>
</div>
<div style={displayInputStyle}>
    <div style={inputStyle}>
        <InputComponent
            onInputChange={(newValue) => handleInputChanges(newValue, setCity)}
            type={"text"}
        />
    </div>
    <div style={displayStyle}>
        <DisplayComponent value={city} />
    </div>
</div>
<div style={displayInputStyle}>
    <div style={inputStyle}>
        <InputComponent
            onInputChange={(newValue) =>
                handleInputChanges(newValue, setCountry)
            }
            type={"text"}
        />
    </div>
    <div style={displayStyle}>
        <DisplayComponent value={country} />
    </div>
</div>
<div style={displayInputStyle}>
    <div style={inputStyle}>
        <InputComponent
            onInputChange={(newValue) =>
                handleInputChanges(newValue, setSchool)
            }
            type={"text"}
        />
    </div>
    <div style={displayStyle}>
        <DisplayComponent value={school} />
    </div>
</div>
<div style={displayInputStyle}>
    <div style={inputStyle}>
        <InputComponent
            onInputChange={(newValue) =>
                handleInputChanges(newValue, setDegree)
            }
            type={"text"}
        />
    </div>
    <div style={displayStyle}>
        <DisplayComponent value={degree} />
    </div>
</div> */
}
