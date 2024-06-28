import { FilterIcon, InputField, SearchBarCont } from "./styles";

export default function SearchBar() {
	const toggleFilters = () => {
		const filters = document.querySelector(".filtersContainer");
		if (filters) {
			filters.classList.toggle("show_filters");
		}
	};

	return (
		<SearchBarCont>
			<InputField search type="text" placeholder="Search for movies" />
			<InputField calendar type="text" placeholder="Year of Release" />
			<FilterIcon onClick={toggleFilters}></FilterIcon>
		</SearchBarCont>
	);
}
