import React from "react";
import styled from "styled-components";

export default function MovieItem({ movie }: any) {
	console.log("MovieItem", movie);
	const { title, poster_path, overview, release_date } = movie;
	return (
		// The MovieItemWrapper must be linked to the movie details popup
		<MovieItemWrapper>
			<LeftCont>
				<img
					src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
					alt="poster"
				/>
			</LeftCont>
			<RightCont></RightCont>
		</MovieItemWrapper>
	);
}

const MovieItemWrapper = styled.div`
	position: relative;
	background-color: white;
	border-radius: 3px;
`;

const LeftCont = styled.div`
	display: inline-block;
`;

const RightCont = styled.div`
	display: inline-block;
`;
