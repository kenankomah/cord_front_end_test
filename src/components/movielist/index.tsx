import { useEffect, useRef, useState } from "react";

import MovieItem from "../movieitem";
import { MoviesWrapper } from "./styles";

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
	setResults: Function;
	unfilteredData: MovieResultsType;
}

export default function MovieList(props: MovieListProps) {
	const { movies, setResults, unfilteredData } = props;
	const [inputValue, setInputValue] = useState("");

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
		const filter = unfilteredData?.results?.filter(
			(movie: { title: string }) =>
				movie.title.toLowerCase().includes(inputValue.toLowerCase())
		);

		if (unfilteredData) {
			const updatedMovies = {
				...unfilteredData,
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
