import "./App.css";
import Library from "./components/Library";
import Form from "./components/Form";
import Pantry from "./components/Pantry";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Library />} />
				<Route path="/pantry" element={<Pantry />} />
			</Routes>
		</div>
	);
}

export default App;
