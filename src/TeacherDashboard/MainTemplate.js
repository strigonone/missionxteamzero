import React from "react";
import SideNav from "./SideNavigation/SideNav";
import DashboardTopNav from "./DashboardTopNav";
import MainDashboardFooter from "./DashboardFooter";
import DashboardTopButtons from "./DashboardTopButtons";
import "./MainTemplate.css";

// Use this as a template when creating a teacher Dashboard content / Student Project builder page

function MainTemplate() {
	return (
		<div className="webcontainer">
			<DashboardTopNav />
			<div className="profile-main-container">
				<SideNav />
				<div className="DashboardContent">
					<DashboardTopButtons />
					<div className="profile-maininner-container"></div>
				</div>
			</div>

			<MainDashboardFooter />
		</div>
	);
}

export default MainTemplate;
