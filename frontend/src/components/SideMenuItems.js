import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function SideMenuItems(props) {
  console.log(props.activeTab);
  console.log(props.text);

  
  return (
        <div
        className={
            "SideMenu-items" +
            (props.activeTab === props.text ? " SideMenu-items-is-active" : "")
        }
        onClick={props.onClick}
        >
        <img src={props.logo} className="logo" alt="logo" />
        <Link to={props.href}> {props.text} </Link>
        </div>
    
  );
}

export default SideMenuItems;
