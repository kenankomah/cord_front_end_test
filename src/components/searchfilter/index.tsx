import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar";

interface SearchFiltersContProps {
	marginBottom?: boolean;
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
	id: string;
	name: string;
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

		return (
			<FiltersWrapper>
				<SearchFiltersCont className="search_inputs_cont" marginBottom>
					{/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
					<SearchBar />
				</SearchFiltersCont>
				<SearchFiltersCont>
					<CategoryTitle>Movies</CategoryTitle>
					{/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
					<ExpandableFilters
						title=""
						filters={[{ name: "1", id: 1 }]}
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
`;

const CategoryTitle = styled.div``;
