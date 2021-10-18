import React, { useContext, useState } from "react";
import { StateContext } from "../App";
import Movie from "../components/Movie";
import styled from "styled-components";

const Container = styled.div`
	max-width: 100%;
	padding: 20px 50px;
	margin: 0 auto;
`;
const WrapperTop = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const WrapperBottom = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const PaginationBox = styled.div`
	margin-top: 50px; ;
`;
const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const PaginationItem = styled.div`
	padding: 5px;
`;
const InputBox = styled.div`
	background-color: #CAFFFB;
	width: 100%;
	text-align: center;
	padding: 20px 0;

	& h4{
		margin: 10px 0;
		color: #C13CFF;
	}
`;
const InputField = styled.input`
	padding: 5px 10px;
	font-size: 14px;
	border: 1px solid #003E76;
	border-radius: 8px 0 0 8px;
`;
const InputNumButton = styled.button`
	padding: 5px 8px;
	font-weight: bold;
	border: 1px solid #003E76;
	border-radius: 0 8px 8px 0;
`;
const Button = styled.button`
	padding: 5px 8px;
	font-weight: bold;
	border: 1px solid #003E76;
	border-radius: 8px;
	background-color: ${props => props.current && "#FFF850"};
`;

const Movies = () => {
	const { movies } = useContext(StateContext);
	const [numMoviesInPage, setNumMoviesInPage] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(movies?.length / numMoviesInPage);

	const sliceMovies = movies.slice(
		numMoviesInPage * (currentPage - 1),
		numMoviesInPage * currentPage
	);

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		} else {
			setCurrentPage(totalPages);
		}
	};

	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} else {
			setCurrentPage(1);
		}
	};
	const handleFirst = () => {
		setCurrentPage(1);
	};
	const handleLast = () => {
		setCurrentPage(totalPages);
	};


	return (
		<Container>
		
			<WrapperTop>
				{sliceMovies.map((movie) => (
					<Movie key={movie.id} movie={movie} />
				))}
			</WrapperTop>

			{sliceMovies.length > 0 ? (
				<WrapperBottom>
					<InputBox>
					<h4>How many Movie card in a page : </h4>
						<InputField
							placeholder="8"
							onBlur={(e) => setNumMoviesInPage(e.target.value)}
						/>
						<InputNumButton>Show</InputNumButton>
					</InputBox>
					<PaginationBox>
						<Pagination>
							<PaginationItem>
								<Button onClick={handleFirst}>1</Button>
							</PaginationItem>
							<PaginationItem>
								<Button onClick={handlePrev}>Prev</Button>
							</PaginationItem>
							<PaginationItem>
								<Button current>{currentPage}</Button>
							</PaginationItem>
							<PaginationItem>
								<Button onClick={handleNext}>Next</Button>
							</PaginationItem>
							<PaginationItem>
								<Button onClick={handleLast}>{totalPages}</Button>
							</PaginationItem>
						</Pagination>
					</PaginationBox>
				</WrapperBottom>
			) : null}
		</Container>
	);
};

export default Movies;