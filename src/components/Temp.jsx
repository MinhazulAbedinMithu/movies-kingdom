import React from "react";
import MovieDetails from "./MovieDetails";

const Temp = ({ id, showDetails, setShowDetails }) => {
	return (
		<div>
			<MovieDetails
				showDetails={showDetails}
				setShowDetails={setShowDetails}
				id={id}
			/>
		</div>
	);
};

export default Temp;
