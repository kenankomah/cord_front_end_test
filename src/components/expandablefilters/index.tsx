import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

interface ExpandableFiltersProps {
	title: string;
	filters: { id: number; name: string }[];
}

// You need to create your own checkbox component with a custom checkmark
// You can use the "Checkbox" component as a reference

const ExpandableFilters: React.FC<ExpandableFiltersProps> = ({
	title,
	filters,
}) => {
	const [filtersShown, setFiltersShown] = useState<boolean>(true);

	return (
		<ExpandableFiltersCont>
			<ExpandableFiltersHeader
				onClick={() => setFiltersShown(!filtersShown)}
			>
				{title}
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

const ExpandableFiltersCont = styled.div`
	position: relative;
`;

const ExpandableFiltersHeader = styled.div`
	cursor: pointer;
`;

const ExpandableFiltersBody = styled.div`
	display: flex;
	flex-direction: column;
`;

export default ExpandableFilters;
