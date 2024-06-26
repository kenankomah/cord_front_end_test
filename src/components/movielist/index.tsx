import { useEffect, useRef, useState } from "react";
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
	setResults: any;
}

export default function MovieList(props: MovieListProps) {
	const { movies, setResults } = props;
	const [inputValue, setInputValue] = useState("");
	const originalMoviesRef = useRef<MovieResultsType>({ results: [] });

	useEffect(() => {
		if (movies?.results?.length === 20) {
			originalMoviesRef.current = movies;
		}
	}, [movies]);

	useEffect(() => {
		const handleInputChange = (event: any) => {
			setInputValue(event.target.value);
		};

		const inputElement = document.querySelector("input");
		inputElement?.addEventListener("input", handleInputChange);

		return () => {
			inputElement?.removeEventListener("input", handleInputChange);
		};
	}, []);

	useEffect(() => {
		const filter = originalMoviesRef.current?.results?.filter(
			(movie: { title: string }) =>
				movie.title.toLowerCase().includes(inputValue.toLowerCase())
		);

		if (originalMoviesRef.current) {
			const updatedMovies = {
				...originalMoviesRef.current,
				results: filter || [],
			};
			setResults(updatedMovies);
		}
	}, [inputValue]);

	if (!movies) {
		return <div>Loading...</div>;
	}

	return (
		<MoviesWrapper>
			{movies.results?.map((movie) => (
				<MovieItem key={movie.id} movie={movie} />
			))}
		</MoviesWrapper>
	);
}
const MoviesWrapper = styled.div`
	position: relative;
`;
