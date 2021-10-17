import React, { useState } from "react";
import styled from "styled-components";
import { StateContext } from "../App";
import MovieDetails from "./MovieDetails";
import Temp from "./Temp";

const Container = styled.div`
	display: inline-block;
	background: blue;
	margin: 10px;
	flex-grow: 1;
	width: 20%;
	height: 50vh;
	overflow: hidden;
	border-radius: 8px;
	box-shadow: 10px 10px 15px gray;
	background-color: #43001b;
	color: #fff;
	cursor: pointer;
`;

const ImgBox = styled.div`
	width: 100%;
	height: 90%;
	object-fit: cover;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
`;
const ContBox = styled.div`
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
`;
const Title = styled.h4`
	flex: 3;
	text-align: left;
`;
const Rating = styled.span`
	text-align: right;
	flex: 1;
`;

const Movie = ({ movie }) => {
	const { id, title, poster_path, vote_average } = movie;

	const [showDetails, setShowDetails] = useState(false);

	return (
		<>
			<Container onClick={() => setShowDetails(true)}>
				<ImgBox>
					<Img
						src={`https://image.tmdb.org/t/p/original/${poster_path}`}
						alt="movie poster"
					/>
				</ImgBox>

				<ContBox>
					<Title>{title}</Title>
					<Rating>{vote_average}</Rating>
				</ContBox>
			</Container>
			<Temp showDetails={showDetails} setShowDetails={setShowDetails} id={id} />
		</>
	);
};

export default Movie;