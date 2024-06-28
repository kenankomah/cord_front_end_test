import { CheckboxCont, LabelText } from "./styles";

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
