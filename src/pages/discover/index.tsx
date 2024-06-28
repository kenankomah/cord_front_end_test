import styled from "styled-components";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

import useFetch from "./useFetch";

interface resultProp {
	desktop?: boolean;
}

export default function Discover() {
	const ratingOptions = [
		{ id: 7.5, name: 7.5 },
		{ id: 8, name: 8 },
		{ id: 8.5, name: 8.5 },
		{ id: 9, name: 9 },
		{ id: 9.5, name: 9.5 },
		{ id: 10, name: 10 },
	];

	const MOVIE_DATA_API_KEY = process.env.REACT_APP_MOVIE_DATA_API_KEY;

	const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIE_DATA_API_KEY}`;
	const movieListUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_DATA_API_KEY}`;
	const languagesUrl = `https://api.themoviedb.org/3/configuration/languages?api_key=${MOVIE_DATA_API_KEY}`;

	const { data: genreOptions } = useFetch(genreListUrl);
	const { data: results, setData: setResults } = useFetch(movieListUrl);
	const { data: languageOptions } = useFetch(languagesUrl);
	const genres = genreOptions?.genres;

	return (
		<div>
			<Results desktop>
				{results?.total_results?.toLocaleString("en") + " movies"}
			</Results>
			<DiscoverWrapper>
				<MobilePageTitle>Discover</MobilePageTitle>
				<MovieFilters>
					<SearchFilters
						genres={genres}
						ratings={ratingOptions}
						languages={languageOptions}
					/>
					<Results>
						{results?.total_results?.toLocaleString("en") +
							" movies"}
					</Results>
				</MovieFilters>
				<MovieResults>
					<MovieList
						movies={results || []}
						genres={genreOptions || []}
						setResults={setResults}
					/>
				</MovieResults>
			</DiscoverWrapper>
		</div>
	);
}

const Results = styled.div<resultProp>`
	margin: 20px 40px;
	@media (max-width: 768px) {
		display: ${(props) => (props.desktop ? "none" : "block")};
	}

	@media (min-width: 769px) {
		display: ${(props) => (props.desktop ? "block" : "none")};
	}
`;

const DiscoverWrapper = styled.div`
	padding: 10px 45px;
	display: flex;
	flex-direction: row-reverse;
	width: 100%;
	box-sizing: border-box;

	@media (max-width: 1200px) {
		flex-direction: column;
		padding: 10px 25px;
	}

	@media (max-width: 768px) {
		padding: 100px 25px;
	}
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div`
	margin-left: 20px;

	@media (max-width: 1200px) {
		margin-left: 0;
		margin-bottom: 20px;
	}
`;

const MobilePageTitle = styled.header`
	display: none;
`;
