import styled from "styled-components";
import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import filter from "../../images/filter-icon.png";

interface searchFieldProps {
	search?: boolean;
	calendar?: boolean;
}

export const FilterIcon = styled.div`
	background-image: url(${filter});
	background-repeat: no-repeat;
	background-position: center 8px;
	width: 48px;
	height: 48px;
	position: absolute;
	top: 27px;
	right: 10px;
	display: none;
	cursor: pointer;
	@media (max-width: 768px) {
		display: block;
	}
`;

export const SearchBarCont = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const InputField = styled.input<searchFieldProps>`
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
	@media (max-width: 768px) {
		margin-right: 20px;
	}
`;
