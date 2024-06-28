import React, { useState } from "react";

import Checkbox from "../checkbox";
import PlusIcon from "../../images/plus_icon.svg";
import MinusIcon from "../../images/minus_icon.svg";
import {
	ExpandableFiltersBody,
	ExpandableFiltersCont,
	ExpandableFiltersHeader,
	TitleStyle,
} from "./styles";

interface ExpandableFiltersProps {
	title: string;
	filters: { id: number | string; name: string | number }[];
}

const ExpandableFilters: React.FC<ExpandableFiltersProps> = ({
	title,
	filters,
}) => {
	const [filtersShown, setFiltersShown] = useState<boolean>(false);
	const filterSign = filtersShown ? MinusIcon : PlusIcon;

	return (
		<ExpandableFiltersCont>
			<ExpandableFiltersHeader
				onClick={() => setFiltersShown(!filtersShown)}
			>
				<img style={{ width: "25px" }} src={filterSign} alt="" />
				<TitleStyle>{title}</TitleStyle>
			</ExpandableFiltersHeader>
			{filtersShown && (
				<ExpandableFiltersBody>
					{filters?.map((filter) => (
						<Checkbox key={filter.id} label={filter.name} />
					))}
				</ExpandableFiltersBody>
			)}
		</ExpandableFiltersCont>
	);
};

export default ExpandableFilters;
