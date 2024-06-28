import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import HamburgerIcon from "../../images/hamburger_icon.png";

interface HamburgerProps {
	activeSideBar: boolean;
}

interface NavIconProps {
	search?: boolean;
	arrow?: boolean;
}

export const CloseSideBar = styled.div`
	cursor: pointer;
	color: white;
	position: absolute;
	bottom: 0;
	right: 0;
	width: fit-content;
	padding: 15px;
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Hamburger = styled.div<HamburgerProps>`
	position: absolute;
	z-index: 10;
    left:${(props) => (props.activeSideBar ? "block" : "none")};);
	background-image: url(${HamburgerIcon});
	background-repeat: no-repeat;
	background-position: 10px center;
	background-size: 80%;
	width: 40px;
	height: 40px;
	padding-left: 45px;
	margin-top: 25px;
	cursor: pointer;
	@media (min-width: 768px) {
		display: none;
	}
`;

export const SideNavBarCont = styled.div`
	position: fixed;
	z-index: 9;
	width: 280px;
	height: 100%;
	background-color: ${colors.sideNavBar};
	left: -280px;
	&.visible {
		left: 0;
	}
	@media (min-width: 768px) {
		left: 0;
	}
	transition: left 0.3s ease-in-out;
`;

export const SideNavMainLink = styled(Link)`
	position: relative;
	display: block;
	padding: 25px 35px;
	font-size: 1.6em;
	font-weight: 700;
	color: white;
`;

export const SideNavBarText = styled(Link)`
	position: relative;
	display: block;
	padding: 25px 35px;
	font-size: 1.6em;
	font-weight: 400;
	color: white;
`;

export const NavIcon = styled.div<NavIconProps>`
	background-image: url(${(props) => (props.arrow ? Arrow : SearchWhite)});
	background-repeat: no-repeat;
	position: absolute;
	right: 35px;
	top: 55%;
	transform: translateY(-50%);
	height: 30px;
	width: 30px;
`;

export const SideNavHeader = styled.div``;

export const HeaderText = styled.div`
	position: relative;
	display: block;
	padding: 20px 35px;
	font-size: 1.6em;
	font-weight: 400;
	color: white;
`;

export const NavLink = styled(Link)`
	display: block;
	position: relative;
	display: block;
	padding: 5px 35px;
	font-size: 1em;
	font-weight: 400;
	color: grey;
`;
