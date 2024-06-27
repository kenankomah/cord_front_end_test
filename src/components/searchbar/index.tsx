import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

interface searchFieldProps {
	search?: boolean;
	calendar?: boolean;
}

export default function SearchBar() {
	return (
		<SearchBarCont>
			<InputField search type="text" placeholder="Search for movies" />
			<InputField calendar type="text" placeholder="Year of Release" />
		</SearchBarCont>
	);
}

const SearchBarCont = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-bottom: 20px;
`;

const InputField = styled.input<searchFieldProps>`
	background-image: url(${(props) =>
		props.search ? SearchIcon : CalendarIcon});

	@media (max-width: 768px) {
		display: ${(props) => (props.calendar ? "none" : "inline-block")};
	}

	background-repeat: no-repeat;
	background-position: 0 10px;
	background-size: 20px;
	padding: 12px 20px 12px 40px;
	border: none;
	border-bottom: 2px solid ${colors.primaryColor};
	&:focus {
		outline: none;
	}
	color: ${colors.fontColor};
`;
