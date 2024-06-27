import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar";

interface SearchFiltersContProps {
	marginBottom?: boolean;
	filters?: boolean;
}

interface Genres {
	id: number;
	name: string;
}

interface Ratings {
	id: number;
	name: number;
}

interface Languages {
	iso_639_1: string;
	english_name: string;
}

interface SearchFiltersProps {
	genres: Genres[];
	ratings: Ratings[];
	languages: Languages[];
	searchMovies: (keyword: string, year: string) => Promise<void>;
}

export default class SearchFilters extends React.Component<SearchFiltersProps> {
	render() {
		const { genres, ratings, languages, searchMovies } = this.props;

		const reformattedLanguages = languages?.map((language) => {
			return { id: language.iso_639_1, name: language.english_name };
		});

		return (
			<FiltersWrapper>
				<SearchFiltersCont className="search_inputs_cont" marginBottom>
					{/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
					<SearchBar />
				</SearchFiltersCont>
				<SearchFiltersCont filters>
					<CategoryTitle>Movie</CategoryTitle>
					{/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
					<ExpandableFilters
						title="Select Genre'(s)"
						filters={genres}
					/>
					<ExpandableFilters
						title="Select Language"
						filters={reformattedLanguages}
					/>
					<ExpandableFilters
						title="Select Rating"
						filters={ratings}
					/>
				</SearchFiltersCont>
			</FiltersWrapper>
		);
	}
}

const FiltersWrapper = styled.div`
	position: relative;
`;

const SearchFiltersCont = styled.div<SearchFiltersContProps>`
	background-color: white;
	padding: 20px;
	border-radius: 3px;
	transition: all 0.3s ease-in-out;

	${(props) =>
		props.marginBottom &&
		css`
			margin-bottom: 15px;
		`}

	${(props) =>
		props.filters &&
		css`
			@media (max-width: 768px) {
				display: none;
			}
		`}
`;

const CategoryTitle = styled.div`
	display: block;
`;
