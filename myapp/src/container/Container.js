import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import {SideMenu} from '../components/SideMenu'

function Container() {
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
       <SideMenu/>
          <div className="layout-page">
            <Header />

            
            <Outlet />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
