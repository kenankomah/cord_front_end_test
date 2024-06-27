import React, { useEffect, useState } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import { movieResultsType } from "../../types";
import useFetch from "./useFetch";

interface apiResponseType {
	page: number;
	results: movieResultsType[];
}

export default function Discover() {
	// You don't need to keep the current structure of this state object. Feel free to restructure it as needed.

	// const [errorStatus, setErrorStatus] = useState<boolean>(false);

	const ratingOptions = [
		{ id: 7.5, name: 7.5 },
		{ id: 8, name: 8 },
		{ id: 8.5, name: 8.5 },
		{ id: 9, name: 9 },
		{ id: 9.5, name: 9.5 },
		{ id: 10, name: 10 },
	];

	const [state] = useState({
		keyword: "",
		year: 0,

		movieDetails: null,
		totalCount: 0,
		// ratingOptions: [
		// 	{ id: 7.5, name: 7.5 },
		// 	{ id: 8, name: 8 },
		// 	{ id: 8.5, name: 8.5 },
		// 	{ id: 9, name: 9 },
		// 	{ id: 9.5, name: 9.5 },
		// 	{ id: 10, name: 10 },
		// ],
		// languageOptions: [
		// 	{ id: "GR", name: "Greek" },
		// 	{ id: "EN", name: "English" },
		// 	{ id: "RU", name: "Russian" },
		// 	{ id: "PO", name: "Polish" },
		// ],
	});

	let year = new Date().getFullYear();

	const MOVIE_DATA_API_KEY = process.env.REACT_APP_MOVIE_DATA_API_KEY;

	const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIE_DATA_API_KEY}`;
	const movieListUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&primary_release_year=${year}&api_key=${MOVIE_DATA_API_KEY}`;
	const languagesUrl = `https://api.themoviedb.org/3/configuration/languages?api_key=${MOVIE_DATA_API_KEY}`;

	console.log("languagesUrl", useFetch(languagesUrl));

	const { data: genreOptions } = useFetch(genreListUrl);
	const { data: results, setData: setResults } = useFetch(movieListUrl);
	const { data: languageOptions } = useFetch(languagesUrl);
	const genres = genreOptions?.genres;

	// Write a function to preload the popular movies when page loads & get the movie genres

	// Write a function to get the movie details based on the movie id taken from the URL.

	const searchMovies = async (keyword: string, year: string) => {
		// Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
		const selectedYear = parseInt(year);

		// setApiResponse(null);
	};

	searchMovies(" ", "2021");

	// const { ratingOptions, totalCount, movieDetails } = state;

	return (
		<div>
			{results?.total_results?.toLocaleString("en") + " movies"}
			<DiscoverWrapper>
				<MobilePageTitle>Discover</MobilePageTitle>
				<MovieFilters>
					<SearchFilters
						genres={genres}
						ratings={ratingOptions}
						languages={languageOptions}
						searchMovies={(keyword: string, year: string) =>
							searchMovies(keyword, year)
						}
					/>
				</MovieFilters>
				<MovieResults>
					{/* {totalCount > 0 && (
						<TotalCounter>{totalCount} results</TotalCounter>
					)} */}
					<MovieList
						movies={results || []}
						genres={genreOptions || []}
						setResults={setResults}
					/>
					{/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
				</MovieResults>
			</DiscoverWrapper>
		</div>
	);
}

const DiscoverWrapper = styled.div`
	padding: 60px 45px;
	display: flex;
	flex-direction: row-reverse;
	width: 100%;
	box-sizing: border-box;
`;

const TotalCounter = styled.div`
	font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div`
	margin-left: 20px;
`;

const MobilePageTitle = styled.header`
	display: none;
`;
