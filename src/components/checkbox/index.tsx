import React, { useState } from "react";
import styled from "styled-components";

interface CheckBoxProps {
	label: string;
}

export default function CheckBox(props: CheckBoxProps) {
	const [checked, setChecked] = useState(false);

	return <CheckboxCont></CheckboxCont>;
}

const CheckboxCont = styled.div`
	position: relative;
`;
