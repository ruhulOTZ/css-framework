import React, { useEffect, useState } from "react";
import './App.scss';
// Import scss file
//import './App.scss';

export default function App() {
const [darkTheme, setDarkTheme] = useState(false);

// React useEffect hook that will fire up
// when "darkTheme" changes
useEffect(() => {
	// Accessing scss variable "--background-color"
	// and "--text-color" using plain JavaScript
	// and changing the same according to the state of "darkTheme"
	const root = document.documentElement;
	root?.style.setProperty(
	"--background-color",
	darkTheme ? "#262833" : "#fff"
	);
	root?.style.setProperty("--text-color", darkTheme ? "#fff" : "#262833");
}, [darkTheme]);

const URL =
	"https://media.geeksforgeeks.org/" +
	"wp-content/uploads/20190918121833/geeksforgeeks-62.png";

return (
	<>
	<div className="card">
		<img className="image" src={URL} alt="geeksforgeeks" />
		<div className="cardBody">
		<h2>Dynamically changing scss variable using react </h2>

		<p>
			{" "}
			According to Wikipedia sass is a preprocessor
			scripting language that is interpreted or compiled
			into Cascading Style Sheets (CSS).
		</p>

		<button onClick={() => setDarkTheme(!darkTheme)}>
			{darkTheme ? "light" : "dark"}
		</button>
		</div>
	</div>
	</>
);
}
