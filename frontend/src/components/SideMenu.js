import SideMenuItems from "./SideMenuItems";
import React, { useState } from 'react';

import logo from '../logo.svg'
function SideMenu() {
   const [activeTab, setActiveTab] = useState("")
   console.log(activeTab)
  return (
    <div className="SideMenu">
        <SideMenuItems text="Home" onClick={() => setActiveTab("Home")} logo={logo} activeTab={activeTab}/>
        <SideMenuItems text="Notes" onClick={() => setActiveTab("Notes")} logo={logo} activeTab={activeTab}/>
        <SideMenuItems text="Job Search" onClick={() => setActiveTab("Job Search")} logo={logo} activeTab={activeTab}/>
        <SideMenuItems text="To Do" onClick={() => setActiveTab("To Do")} logo={logo} activeTab={activeTab}/>
        <SideMenuItems text="wap" onClick={() => setActiveTab("wap")} logo={logo} activeTab={activeTab}/>
    </div>
  );
}

export default SideMenu;
