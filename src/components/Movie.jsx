import React, { useState } from "react";
import styled from "styled-components";
import { mobile, tablet, laptop } from "../responsive";
import MovieDetails from "./MovieDetails";

const Container = styled.div`
	display: inline-block;
	overflow: hidden;
	position: relative;
	background: #003887;
	margin: 10px;
	flex-grow: 1;
	width: 20%;
	height: 35vh;
	border-radius: 8px;
	box-shadow: 10px 10px 15px gray;
	cursor: pointer;
	&:hover {
		.cont-box {
			opacity: 1;
			transition: all 0.6s ease;
		}
	}
	${mobile({ width: "100%", height: "50vh" })}
	${tablet({ width: "45%", height: "45vh" })}
	${laptop({ width: "30%", height: "45vh" })}
`;

const ImgBox = styled.div`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${laptop({ height: "80%" })}
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
`;
const ContBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 29, 70, 0.8);
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0;
	${laptop({ height: "20%" })}
`;
const Title = styled.h4`
	margin-bottom: 20px;
`;
const Rating = styled.span`
	font-family: "Rubik Beastly", cursive;
	color: yellow;
`;

const Movie = ({ movie }) => {
	const { id, title, poster_path, vote_average } = movie;

	const [showDetails, setShowDetails] = useState(false);

	const handleClick = (e) => {
		setShowDetails(true);
	};

	return (
		<>
			<Container onClick={handleClick}>
				<ImgBox>
					<Img
						src={`https://image.tmdb.org/t/p/original/${poster_path}`}
						alt="movie poster"
					/>
				</ImgBox>

				<ContBox className="cont-box">
					<Title>{title}</Title>
					<Rating>{vote_average}</Rating>
				</ContBox>
			</Container>

			{showDetails && (
				<MovieDetails
					showDetails={showDetails}
					setShowDetails={setShowDetails}
					id={id}
				/>
			)}
		</>
	);
};

export default Movie;
