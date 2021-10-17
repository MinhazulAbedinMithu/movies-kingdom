import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const TitleContext = createContext();

const App = () => {
	const [searchTitle, setSearchTitle] = useState("");

	console.log(searchTitle);

	return (
		<TitleContext.Provider value={[searchTitle, setSearchTitle]}>
			<Router>
				<Navbar />

				<Footer />
			</Router>
		</TitleContext.Provider>
	);
};

export default App;
