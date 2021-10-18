import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Movies from "./Movies";
import Navbar from "./Navbar";

const MiddleBox = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;

const Home = () => {
	return (
		<>
			<Navbar />
			<MiddleBox>
				<Movies />
			</MiddleBox>
			<Footer />
		</>
	);
};

export default Home;
