import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../App";
import { mobile } from "../responsive";
import { AiFillCloseCircle } from "react-icons/ai";

const FullWidth = styled.div`
	max-width: 100%;
	padding: 15px 0;
	background-color: #001d46;
`;
const Container = styled.div`
	max-width: 1170px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;
const Logo = styled.div`
	text-align: left;
	flex: 1;
	color: #fff;
	& h3 {
		font-family: "Monoton", cursive;
		font-size: 25px;
		letter-spacing: 3px;

		& span {
			color: yellow;
		}
	}
`;
const SearchBar = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: right;
	position: relative;
	${mobile({ marginTop: '20px' })}
	& select {
		padding: 8px;
		font-size: 14px;
		border-radius: 8px;
		background-color: #8b00b2;
		color: #fff;
		font-weight: 800;
		border: none;
		margin-right: 5px;
		& option {
			font-weight: 600;
		}
	}
`;
const SearchInput = styled.input`
	width: 35%;
	border: none;
	padding: 8px;
	font-size: 14px;
	border-radius: 5px;
	background-color: #E4E4E4;
	color: #000;
`;
const CloseIcon = styled(AiFillCloseCircle)`
	color: #c90000;
	font-size: 25px;
`;

const Navbar = () => {
	const { searchTitle, setSearchTitle, setSearchOption } = useContext(StateContext);

	return (
		<FullWidth>
			<Container>
				<Logo>
					<h3>
						<span>Movies</span> Kingdom
					</h3>
				</Logo>
				<SearchBar>
					<select onChange={(e) => setSearchOption(e.target.value)}>
						<option value="">Advance Search</option>
						<option value="movie">Movies</option>
						<option value="person">Person</option>
						<option value="multi">Multi</option>
					</select>

					<SearchInput
						type="text"
						placeholder="search..."
						value={searchTitle}
						onChange={(e) => setSearchTitle(e.target.value)}
					/>
					<CloseIcon onClick={() => setSearchTitle("")} />
				</SearchBar>
			</Container>
		</FullWidth>
	);
};

export default Navbar;
