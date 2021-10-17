import React, { useContext } from "react";
import styled from "styled-components";
import { TitleContext } from "../App";

const Container = styled.div`
	max-width: 100%;
  padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #860086;
`;
const Logo = styled.div`
	text-align: left;
	flex: 1;
  color: #FFDE00;
`;
const SearchBar = styled.div`
	flex: 1;
	text-align: right;
`;
const SearchInput = styled.input`
  border: none;
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
`;

const Navbar = () => {
  const [searchTitle, setSearchTitle] = useContext(TitleContext);

  
	return (
		<Container>
			<Logo>
				<h3>Movies Kingdom</h3>
			</Logo>
			<SearchBar>
				<SearchInput type="text" placeholder="search..." onChange={(e)=> setSearchTitle(e.target.value)}/>
			</SearchBar>
		</Container>
	);
};

export default Navbar;
