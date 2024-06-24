//@ts-nocheck
import React from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

export default class ExpandableFilters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			filtersShown: false,
		};
	}

	// You need to create your own checkbox component with a custom checkmark
	// You can use the "Checkbox" component as a reference
	render() {
		return <div>ExpandableFilters component</div>;
	}
}
