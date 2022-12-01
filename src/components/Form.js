import React from "react";
import { useState, useEffect } from "react";
import data from "./data";
import "./Form.css";
import { Navigate } from "react-router-dom";

function Form(props) {
	const [password, setPassword] = useState("");
	const [clicked, setClicked] = useState(false);
	const [test, setTest] = useState(true);

	let wrongMessage = "Wrong, please try again";

	const changeHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("submit");
		if (password === props.password) {
			setClicked(true);
		} else {
			setPassword("");
		}
	};

	const clickHandler = () => {
		if (password !== props.password) {
			setTest(false);
		}
	};

	return (
		<div className="loginForm">
			<h1>What is the answer?</h1>
			{!clicked ? null : <Navigate to={props.nextLink} />}
			{test ? null : <h3>{wrongMessage}</h3>}
			<form onSubmit={submitHandler} className="questionForm">
				<input
					type="text"
					placeholder="password"
					value={password}
					onChange={changeHandler}
				/>
				<button
					className="btn"
					type="submit"
					name="submit"
					onClick={clickHandler}
				/>
			</form>
		</div>
	);
}

export default Form;
