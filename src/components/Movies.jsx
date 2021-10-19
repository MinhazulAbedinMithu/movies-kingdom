import React, { useContext, useState } from "react";
import { StateContext } from "../App";
import Movie from "../components/Movie";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	max-width: 100%;
	padding: 20px 50px;
	margin: 0 auto;
	${mobile({ padding: "20px 5px" })}
`;
const WrapperTop = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const WrapperBottom = styled.div`
	margin: 40px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}

`;
const PaginationBox = styled.div``;
const Pagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const PaginationItem = styled.div`
	padding: 5px;
`;
const InputBox = styled.div`
	& h4 {
		margin: 10px 0;
		color: #c13cff;
	}
`;

const Button = styled.button`
	padding: 5px 8px;
	font-weight: bold;
	border: 1px solid #003e76;
	border-radius: 8px;
	background-color: ${(props) => props.current && "#FFF850"};
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
						<span>How many items in a page: </span>
						<select onChange={(e) => setNumMoviesInPage(e.target.value)}>
							<option value="4">4</option>
							<option value="8" selected>8</option>
							<option value="10">10</option>
							<option value="12">12</option>
							<option value="16">16</option>
						</select>
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
