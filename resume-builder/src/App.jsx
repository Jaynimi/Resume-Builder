import React, { useState } from "react";
import "./App.css";
import CustomInput from "./components/perconalInfo";
import InfoDetails from "./components/mails";

function App() {
	const style = {
		// boxSizing: "border-box",
		// padding: "30px",
	};
	return (
		<div style={style}>
			<CustomInput defaultText={"Jayy"} />

			<InfoDetails
				emailText={"eyeslikejay@yahoo.com"}
				phoneText={"08061946359"}
				addressText={"Obafemi Awlowo University"}
			/>
		</div>
	);
}

export default App;
