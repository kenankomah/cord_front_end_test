import styled from "styled-components";
import * as colors from "../../colors";

export const ReleaseDate = styled.div`
	color: ${colors.emeraldGreen};
	margin-top: 20px;
`;

export const Genre = styled.h3`
	color: ${colors.emeraldGreen};
	font-size: 12px;
	font-weight: bold;
`;

export const MovieItemWrapper = styled.div`
	display: grid;
	grid-template-columns: 190px 2fr;
	gap: 20px;
	position: relative;
	background-color: white;
	border-radius: 3px;
	margin-bottom: 15px;
	padding: 20px;

	@media (max-width: 768px) {
		grid-template-columns: 100px 2fr;
	}
`;

export const Ratings = styled.div`
	color: #fff;
	display: inline-block;
	margin-right: 10px;
	background-color: ${colors.primaryColor};
	padding: 5px;
	font-size: 12px;
	border-radius: 3px;
	padding-bottom: 2px;
`;

export const Title = styled.h2`
	color: #000;
	font-size: 20px;
	font-weight: bold;
	margin: 0;
`;

export const TitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	height: fit-content;

	align-items: start;
	color: #000;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const LeftCont = styled.div`
	display: inline-block;
`;

export const RightCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Overview = styled.div`
	position: relative;
	overflow: hidden;

	@media (max-width: 768px) {
		height: 80px;
		&::before {
			content: "";
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: linear-gradient(transparent 40px, white);
		}
	}
`;
