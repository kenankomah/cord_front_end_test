import React, { useState } from "react";
import styled from "styled-components";

interface CheckBoxProps {
	label: string | number;
}

export default function CheckBox(props: CheckBoxProps) {
	const { label } = props;

	return (
		<CheckboxCont>
			<input type="checkbox" />
			<LabelText>{label}</LabelText>
		</CheckboxCont>
	);
}

const CheckboxCont = styled.div`
	position: relative;
	&:checked {
		background-color: #2196f3;
	}
`;
const LabelText = styled.p`
	margin-left: 5px;
	margin-bottom: 6px;
	display: inline-block;
`;
