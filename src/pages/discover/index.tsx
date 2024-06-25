import React, { useEffect, useState } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import { movieResultsType } from "../../types";

interface apiResponseType {
	page: number;
	results: movieResultsType[];
}

export default function Discover() {
	// You don't need to keep the current structure of this state object. Feel free to restructure it as needed.
	const [results, setResults] = useState<movieResultsType[]>([]);
	const [state] = useState({
		keyword: "",
		year: 0,
		// results: [],
		movieDetails: null,
		totalCount: 0,
		genreOptions: [],
		ratingOptions: [
			{ id: 7.5, name: 7.5 },
			{ id: 8, name: 8 },
			{ id: 8.5, name: 8.5 },
			{ id: 9, name: 9 },
			{ id: 9.5, name: 9.5 },
			{ id: 10, name: 10 },
		],
		languageOptions: [
			{ id: "GR", name: "Greek" },
			{ id: "EN", name: "English" },
			{ id: "RU", name: "Russian" },
			{ id: "PO", name: "Polish" },
		],
	});

	const [errorStatus, setErrorStatus] = useState(false);
	const MOVIE_DATA_API_KEY = process.env.REACT_APP_MOVIE_DATA_API_KEY;

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_DATA_API_KEY}`
				);

				if (!response.ok) {
					setErrorStatus(errorStatus);
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setResults(data.results);
				console.log("data", data);
			} catch (error) {
				setErrorStatus(true);
				console.error(error);
			}
		}
		fetchData();
	}, [errorStatus]);

	// Write a function to preload the popular movies when page loads & get the movie genres

	// Write a function to get the movie details based on the movie id taken from the URL.

	const searchMovies = async (keyword: string, year: string) => {
		// Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
	};

	const {
		genreOptions,
		languageOptions,
		ratingOptions,
		totalCount,
		// results,
		movieDetails,
	} = state;

	return (
		<DiscoverWrapper>
			<MobilePageTitle>Discover</MobilePageTitle>
			<MovieFilters>
				<SearchFilters
					genres={genreOptions}
					ratings={ratingOptions}
					languages={languageOptions}
					searchMovies={(keyword: string, year: string) =>
						searchMovies(keyword, year)
					}
				/>
			</MovieFilters>
			<MovieResults>
				{totalCount > 0 && (
					<TotalCounter>{totalCount} results</TotalCounter>
				)}
				<MovieList movies={results || []} genres={genreOptions || []} />
				{/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
			</MovieResults>
		</DiscoverWrapper>
	);
}

const DiscoverWrapper = styled.div`
	padding: 60px 35px;
`;

const TotalCounter = styled.div`
	font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
