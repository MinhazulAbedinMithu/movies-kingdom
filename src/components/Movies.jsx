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
const WrapperBottom = styled.div``;
const PaginationBox = styled.div``;
const Pagination = styled.div``;
const PaginationItem = styled.div``;
const InputBox = styled.div``;
const InputField = styled.input``;
const Button = styled.button``;

const Movies = () => {
	const { movies } = useContext(StateContext);
	const [numMoviesInPage, setNumMoviesInPage] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);
	const [start, setStart] = useState(0);

	const totalPages = Math.ceil(movies?.length / numMoviesInPage);

	// let end = numMoviesInPage * currentPage;
	const sliceMovies = movies.slice(numMoviesInPage*(currentPage-1), numMoviesInPage * currentPage);

	const handleNext = () => {
		if(currentPage < totalPages){
			setCurrentPage(currentPage+1);
		}else{
			setCurrentPage(totalPages);
		}
	}

	const handlePrev = () => {
		if(currentPage > 1){
			setCurrentPage(currentPage-1);
		}else{
			setCurrentPage(1);
		}
	}
	const handleFirst = () => {
		setCurrentPage(1);
	}
	const handleLast = () => {
		setCurrentPage(totalPages);
	}

	console.log(totalPages);
	console.log(sliceMovies);

	return (
		<Container>
			<WrapperTop>
				{sliceMovies.map((movie) => (
					<Movie key={movie.id} movie={movie} />
				))}
			</WrapperTop>
			<WrapperBottom>
				<InputBox>
					<InputField
						placeholder="8"
						onBlur={(e) => setNumMoviesInPage(e.target.value)}
					/>
          <Button>Show</Button>
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
							<Button>{currentPage}</Button>
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
		</Container>
	);
};

export default Movies;
