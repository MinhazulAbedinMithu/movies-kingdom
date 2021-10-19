import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

const MiddleBox = styled.div`
	max-width: 1170px;
	width: 100%;
	margin: 0 auto;
`;

export const StateContext = createContext();

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");
	const [searchOption, setSearchOption] = useState("");

	const API_KEY = "4275cf25831de3b150d6ae572b31a179";
	let searchUrl = ``;

	if (searchTitle === "") {
		searchUrl = `https://api.themoviedb.org/4/list/7096014?page=1&api_key=${API_KEY}`;
	} else if (searchTitle !== "") {
		if (searchOption === "") {
			searchUrl = `https://api.themoviedb.org/4/search/movie?&api_key=${API_KEY}&query=${searchTitle}`;
		} else {
			searchUrl = `https://api.themoviedb.org/3/search/${searchOption}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTitle}`;
		}
	}


	useEffect(() => {
		fetch(searchUrl)
			.then((res) => res.json())
			.then((data) => setMovies(data.results));
	}, [searchUrl]);
	console.log(movies);

	return (
		<StateContext.Provider
			value={{
				searchTitle,
				setSearchTitle,
				setSearchOption,
				movies,
			}}
		>
			<Navbar />
			<MiddleBox>
				<Movies />
			</MiddleBox>
			<Footer />
		</StateContext.Provider>
	);
};

export default App;
