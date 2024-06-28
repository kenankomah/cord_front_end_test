import React from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import HamburgerIcon from "../../images/hamburger_icon.png";

interface NavIconProps {
	search?: boolean;
	arrow?: boolean;
}

interface HamburgerProps {
	activeSideBar: boolean;
}

export default class SideNavBar extends React.Component {
	state = {
		activeSideBar: false,
	};

	// Function to toggle the sidebar visibility
	openSideBar = () => {
		document.querySelector(".hamburger_icon")?.classList.add("hide");
		this.setState(() => ({
			activeSideBar: true,
		}));
	};

	closeSideBar = () => {
		document.querySelector(".hamburger_icon")?.classList.remove("hide");
		this.setState(() => ({
			activeSideBar: false,
		}));
	};

	render() {
		const { activeSideBar } = this.state;

		return (
			<div>
				<Hamburger
					activeSideBar
					onClick={this.openSideBar}
					className="hamburger_icon"
				></Hamburger>{" "}
				{/* Added onClick event */}
				<SideNavBarCont className={activeSideBar ? "visible" : ""}>
					<SideNavMainLink
						className="menu_nav_link"
						to="/"
						activeClassName="active"
						exact
					>
						Wesley
						<NavIcon arrow></NavIcon>
					</SideNavMainLink>
					<SideNavBarText
						className="menu_nav_link"
						to="/discover"
						activeClassName="active"
					>
						Discover
						<NavIcon search></NavIcon>
					</SideNavBarText>
					<SideNavHeader>
						<HeaderText>
							Watched <hr />
						</HeaderText>
					</SideNavHeader>
					<NavLink
						className="menu_nav_link"
						to="/watched/movies"
						activeClassName="active"
					>
						Movies
					</NavLink>
					<NavLink
						className="menu_nav_link"
						to="/watched/tv-shows"
						activeClassName="active"
					>
						Tv Shows
					</NavLink>
					<SideNavHeader>
						<HeaderText>
							Saved
							<hr />
						</HeaderText>
					</SideNavHeader>
					<NavLink
						className="menu_nav_link"
						to="/saved/movies"
						activeClassName="active"
					>
						Movies
					</NavLink>
					<NavLink
						className="menu_nav_link"
						to="/saved/tv-shows"
						activeClassName="active"
					>
						Tv Shows
					</NavLink>
					<CloseSideBar onClick={this.closeSideBar}>
						Close
					</CloseSideBar>
				</SideNavBarCont>
			</div>
		);
	}
}

const CloseSideBar = styled.div`
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

const Hamburger = styled.div<HamburgerProps>`
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

const SideNavBarCont = styled.div`
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

const SideNavMainLink = styled(Link)`
	position: relative;
	display: block;
	padding: 25px 35px;
	font-size: 1.6em;
	font-weight: 700;
	color: white;
`;

const SideNavBarText = styled(Link)`
	position: relative;
	display: block;
	padding: 25px 35px;
	font-size: 1.6em;
	font-weight: 400;
	color: white;
`;

const NavIcon = styled.div<NavIconProps>`
	background-image: url(${(props) => (props.arrow ? Arrow : SearchWhite)});
	background-repeat: no-repeat;
	position: absolute;
	right: 35px;
	top: 55%;
	transform: translateY(-50%);
	height: 30px;
	width: 30px;
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div`
	position: relative;
	display: block;
	padding: 20px 35px;
	font-size: 1.6em;
	font-weight: 400;
	color: white;
`;

const NavLink = styled(Link)`
	display: block;
	position: relative;
	display: block;
	padding: 5px 35px;
	font-size: 1em;
	font-weight: 400;
	color: grey;
`;
