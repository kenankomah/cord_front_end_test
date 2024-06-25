import React from "react";
import styled from "styled-components";

export default function MovieItem({ movie }: any) {
	const { title, poster_path, overview, release_date, vote_average } = movie;
	return (
		// The MovieItemWrapper must be linked to the movie details popup
		<MovieItemWrapper>
			<LeftCont>
				<img
					src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
					alt="poster"
				/>
			</LeftCont>
			<RightCont>
				<TitleDiv>
					<Title>{title}</Title>
					<Ratings>{vote_average.toFixed(1)}</Ratings>
				</TitleDiv>
				<Overview>{overview}</Overview>
				{release_date}
			</RightCont>
		</MovieItemWrapper>
	);
}

const MovieItemWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	position: relative;
	background-color: white;
	border-radius: 3px;
`;

const Ratings = styled.div`
	display: inline-block;
	margin-right: 10px;
`;

const Title = styled.h2`
	color: #000;
	font-size: 20px;
	font-weight: bold;
`;

const TitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	height: fit-content;

	align-items: center;
	color: #000;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const LeftCont = styled.div`
	display: inline-block;
`;

const RightCont = styled.div``;

const Overview = styled.div``;
