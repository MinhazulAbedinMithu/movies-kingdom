import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiBarbedStar } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { laptop, mobile, tablet } from "../responsive";

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	z-index: 22;
`;

const Button = styled.button`
	position: fixed;
	top: 4%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 0px solid transparent;
	padding: 10px;
	background-color: #00320c;
	color: red;

	box-shadow: 0px 0px 30px #c6c600;
	border-radius: 50%;
	cursor: pointer;
	& :hover {
		transition: all 0.5s ease-out;
		transform: rotate(360deg);
	}
`;
const CrossIcon = styled(AiOutlineClose)`
	font-size: 30px;
	font-weight: 800;
`;

const Modal = styled.div`
	position: relative;
	width: 85%;
	height: 80%;
	top: 50%;
	left: 50%;
	border-radius: 10px;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	background: linear-gradient(rgba(180, 0, 174, 0.2), rgba(180, 0, 174, 0.3)),
		url(${(props) => `https://image.tmdb.org/t/p/original/${props.backdrop_path}`});
	background-blend-mode: screen;

	${mobile({
		width: "95%",
		flexDirection: "column",
		background: "#F5D0FF",
		overflow: "auto",
		padding: "5px",
	})}
	${tablet({
		width: "95%",
		flexDirection: "column",
		background: "#F5D0FF",
		overflow: "auto",
		padding: "5px",
	})}
	${laptop({
		width: "95%",
		height: "60%",
		flexDirection: "row",
		background: "#F5D0FF",
		overflow: "auto",
		padding: "5px",
	})}
`;

const Img = styled.img`
	position: relative;
	max-width: 340px;
	border-radius: 10px;
	z-index: 22;
	border: 2px solid white;
	${mobile({ boxShadow: "none", width: "90%", height: "45vh" })}
	${tablet({ boxShadow: "none", width: "90%", height: "45vh" })}
	${laptop({ boxShadow: "none", width: "70%", height: "45vh" })}
`;
const InfoBox = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	padding: 20px 40px;
	background-color: #000;
	color: #fff;
	opacity: 0.8;
	margin-left: 40px;
	border-radius: 10px;
	border: 2px solid #f9f9f9;
	z-index: 22;
	${mobile({ margin: "10px 0", padding: "10px 5px" })}
	${tablet({ margin: "10px 0", padding: "10px 5px" })}
`;
const Title = styled.div`
	font-size: 50px;
	margin-bottom: 15px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	${mobile({ fontSize: "25px", textAlign: "center", flexDirection: 'column' })}
`;

const Span = styled.span``;

const Tagline = styled.h3`
	font-weight: 400;
`;
const Items = styled.ul`
	margin: 15px 0;
`;
const Item = styled.li`
	margin: 5px 0;
	font-size: 15px;
	color: #d4d4d4;
	& b {
		margin-right: 5px;
	}
`;
const Star = styled(GiBarbedStar)`
	color: #fff039;
	margin-left: 40px;
	margin-right: 5px;
	font-size: 35px;
`;
const Rating = styled.span`
	font-family: "Rubik Beastly", cursive;
	font-weight: 300;
	color: #fff200;
`;
const Overview = styled.p``;

const MovieDetails = ({ id, showDetails, setShowDetails }) => {
	const [movieDetails, setMovieDetails] = useState({});
	const {
		title,
		tagline,
		vote_average,
		runtime,
		budget,
		release_date,
		overview,
		poster_path,
		backdrop_path,
	} = movieDetails;

	useEffect(() => {
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4275cf25831de3b150d6ae572b31a179`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => setMovieDetails(data));
	}, [id]);

	return (
		<>
			{showDetails ? (
				<Container>
					<Button onClick={() => setShowDetails(showDetails.false)}>
						<CrossIcon />
					</Button>

					<Modal backdrop_path={backdrop_path}>
						<Img
							src={`https://image.tmdb.org/t/p/original/${poster_path}`}
							alt="movie poster"
						/>

						<InfoBox>
							<Title>
								<Span>{title}</Span>
								<Span>
									<Star />
									<Rating>{vote_average}</Rating>
								</Span>
							</Title>
							<Tagline>{tagline}</Tagline>
							<Items>
								<Item>
									<b>Release :</b> {release_date}
								</Item>
								<Item>
									<b>Runtime :</b> {Math.floor(runtime / 60)}hr {runtime % 60}
									min
								</Item>
								<Item>
									<b>Budget :</b> {budget}
								</Item>
							</Items>
							<Overview>{overview}</Overview>
						</InfoBox>
					</Modal>
				</Container>
			) : null}
		</>
	);
};

export default MovieDetails;
