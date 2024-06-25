import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

interface MovieData {
	adult: false;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: false;
	vote_average: number;
	vote_count: number;
}

interface MovieResultsType {
	results: MovieData[];
}

interface Genre {
	id: number;
	name: string;
}

interface MovieListProps {
	movies: MovieResultsType;
	genres: Genre[];
}

export default function MovieList(props: MovieListProps) {
	const { movies, genres } = props;

	console.log("movies", movies);

	return (
		<MoviesWrapper>
			{/* Finish the MovieItem component and use it here to display the movie results */}
			{movies.results?.map((movie) => (
				<MovieItem key={movie.id} movie={movie} />
			))}
		</MoviesWrapper>
	);
}

const MoviesWrapper = styled.div`
	position: relative;
`;
