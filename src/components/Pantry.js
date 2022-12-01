import React from "react";
import Form from "./Form";

function Pantry(props) {
	let pantryPassword = "silver";

	return (
		<div>
			<h1>The pantry</h1>
			<Form password={pantryPassword} />
		</div>
	);
}

export default Pantry;
