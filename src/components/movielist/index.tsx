import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

interface Movie {
	id: number;
	title: string;
}

interface Genre {
	id: number;
	name: string;
}

interface MovieListProps {
	movies: Movie[];
	genres: Genre[];
}

export default class MovieList extends React.Component<MovieListProps> {
	render() {
		const { movies, genres } = this.props;

		return (
			<MoviesWrapper>
				{/* Finish the MovieItem component and use it here to display the movie results */}
			</MoviesWrapper>
		);
	}
}

const MoviesWrapper = styled.div`
	position: relative;
`;
