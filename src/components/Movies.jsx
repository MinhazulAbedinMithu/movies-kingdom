import React, { useContext } from "react";
import { StateContext } from "../App";
import Movie from "../components/Movie";
import styled from "styled-components";

const Container = styled.div`
	max-width: 100%;
	padding: 20px 50px;
	margin: 0 auto;
	display: flex;
  flex-wrap: wrap;
`;

const Movies = () => {
	const { movies } = useContext(StateContext);

	console.log(movies);

	return (
		<Container>
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</Container>
	);
};

export default Movies;
