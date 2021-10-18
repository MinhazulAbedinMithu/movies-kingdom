import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: default;
	background: rgba(0, 0, 0, 0.8);
	/* display: ${(props) => (props.showDetails ? "block" : "none")}; */
	z-index: 22;
`;
const Modal = styled.div`
	position: fixed;
	background: gray;
	width: 80%;
	height: 90vh;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const MovieDetails = ({ id, showDetails, setShowDetails }) => {

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4275cf25831de3b150d6ae572b31a179`;

  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  // }, [])

	return (
		<>
			{showDetails ? (
				<Container showDetails={showDetails}>
					<Modal>
						<h2>Modals show & hide</h2>
						<button onClick={() => setShowDetails(false)}>close</button>
					</Modal>
				</Container>
			) : null}
		</>
	);
};

export default MovieDetails;
