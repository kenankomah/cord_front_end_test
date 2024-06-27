import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";
import PlusIcon from "../../images/plus_icon.svg";
import MinusIcon from "../../images/minus_icon.svg";

interface ExpandableFiltersProps {
	title: string;
	filters: { id: number | string; name: string | number }[];
}

// You need to create your own checkbox component with a custom checkmark
// You can use the "Checkbox" component as a reference

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

const TitleStyle = styled.h3`
	margin-left: 10px;
`;

const ExpandableFiltersCont = styled.div`
	position: relative;
`;

const ExpandableFiltersHeader = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const ExpandableFiltersBody = styled.div`
	display: flex;
	flex-direction: column;
`;

export default ExpandableFilters;
