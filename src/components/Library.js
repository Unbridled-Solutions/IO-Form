import React from "react";
import "./Library.css";
import { useState } from "react";
import data from "./data";
import Form from "./Form";

function Library(props) {
	let libraryPassword = "gold";
	let nextLink = "/pantry";

	return (
		<>
			<div className="library-pic"></div>
			<Form password={libraryPassword} nextLink={nextLink} />
		</>
	);
}

export default Library;
