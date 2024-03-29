import React from "react";
import { SideNavBottomData } from "./SideNavBottomData";
import { Link } from "react-router-dom";
import "./SideNavStyle.css";

function SideNavBottom() {
  return (
    <div className="SideBarBottomMenu">
      {SideNavBottomData.map((item, index) => {
        return (
          <li key={index} className={item.BottomIconText}>
            <Link to={item.path}>
              {item.icon}
              {item.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default SideNavBottom;
