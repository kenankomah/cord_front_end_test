import React from "react";
import {
	CloseSideBar,
	Hamburger,
	HeaderText,
	NavIcon,
	NavLink,
	SideNavBarCont,
	SideNavBarText,
	SideNavHeader,
	SideNavMainLink,
} from "./styles";

export default class SideNavBar extends React.Component {
	state = {
		activeSideBar: false,
	};

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
