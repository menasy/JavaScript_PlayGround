import React, { useState } from "react";

function Login({ loginCheck }) {
	const [stadName, setStadName] = useState("");
	const [date, setDate] = useState("");

	const handleLogin = () => {
		if (stadName.toLowerCase() === "chobani" && Number(date) === 1907)
			loginCheck(true)
		else
			loginCheck(false);
	};

	return (
		<>
			<div style={{ textAlign: "center", marginTop: "20%" }}>
				<label>What is new name of Fenerbahce stadium ?</label>
				<br />
				<input
					type="text"
					id="stadName"
					value={stadName}
					onChange={(e) => setStadName(e.target.value)}
				/>
				<br />
				<label>What is Fenerbahçe's founding date ?</label>
				<br />
				<input
					type="number"
					id="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<br />
				<button onClick={handleLogin}>Login</button>
			</div>
		</>
	);
}
export default Login;