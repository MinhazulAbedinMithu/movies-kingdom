import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

export const StateContext = createContext();

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");

	const API_KEY = "4275cf25831de3b150d6ae572b31a179";

	const searchUrl = `https://api.themoviedb.org/4/search/movie?&api_key=${API_KEY}&query=${searchTitle}`;

	const allMovieUrl = `https://api.themoviedb.org/4/list/7096014?page=1&api_key=${API_KEY}`;

	const url = searchTitle !== "" ? searchUrl : allMovieUrl;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMovies(data.results));
	}, [searchTitle]);


	return (
		<StateContext.Provider
			value={{
				searchTitle,
				setSearchTitle,
				movies
			}}
		>
			<Router>
				<Navbar />
				<Movies />
				<Footer />
			</Router>
		</StateContext.Provider>
	);
};

export default App;
