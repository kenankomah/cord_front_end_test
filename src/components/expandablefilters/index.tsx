import React from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

interface ExpandableFiltersProps {
	title: string;
	filters: { id: number; name: string }[];
}

export default class ExpandableFilters extends React.Component<
	ExpandableFiltersProps,
	{ filtersShown: boolean }
> {
	constructor(props: ExpandableFiltersProps) {
		super(props);

		this.state = {
			filtersShown: false,
		};
	}

	// You need to create your own checkbox component with a custom checkmark
	// You can use the "Checkbox" component as a reference
	render() {
		const { title, filters } = this.props;
		const { filtersShown } = this.state;
		return (
			<ExpandableFiltersCont>
				<ExpandableFiltersHeader
					onClick={() =>
						this.setState({
							filtersShown: !filtersShown,
						})
					}
				>
					{title}
				</ExpandableFiltersHeader>
				{filtersShown && (
					<ExpandableFiltersBody>
						{filters.map((filter) => (
							<Checkbox key={filter.id} label={filter.name} />
						))}
					</ExpandableFiltersBody>
				)}
			</ExpandableFiltersCont>
		);
	}
}

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
