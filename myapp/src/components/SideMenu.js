

import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export const SideMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState("");

    const handleMenuToggle = () => {
      openSubMenu === "open" ? setOpenSubMenu("") : setOpenSubMenu("open");
    };

  return (
    <div>

<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="app-brand demo">
            <Link to="/" class="app-brand-link">
             
              <span class="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
            </Link>

            <Link to="/" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </Link>
          </div>

          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">
            
            <li class="menu-item active">
              <Link to="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </Link>
            </li>

            
            <li className={`menu-item ${openSubMenu}`}>
            

            <li className={`menu-item ${openSubMenu}`}>
              <Link to="/" className="menu-link menu-toggle"
              onClick={() => handleMenuToggle()} >
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">Layouts</div>
              </Link>

              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="layouts-without-menu.html" className="menu-link">
                    <div data-i18n="Without menu">Without menu</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="layouts-without-navbar.html" className="menu-link">
                    <div data-i18n="Without navbar">Without navbar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="layouts-container.html" className="menu-link">
                    <div data-i18n="Container">Container</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="layouts-fluid.html" className="menu-link">
                    <div data-i18n="Fluid">Fluid</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="layouts-blank.html" className="menu-link">
                    <div data-i18n="Blank">Blank</div>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Pages</span>
            </li>
            <li className="menu-item">
              <Link
                to="/"
                className="menu-link menu-toggle"
              >
                <div data-i18n="Account Settings">Account Settings</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link
                    to="pages-account-settings-account.html"
                    className="menu-link"
                  >
                    <div data-i18n="Account">Account</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="pages-account-settings-notifications.html"
                    className="menu-link"
                  >
                    <div data-i18n="Notifications">Notifications</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="pages-account-settings-connections.html"
                    className="menu-link"
                  >
                    <div data-i18n="Connections">Connections</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
                <div data-i18n="Authentications">Authentications</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link
                    to="auth-login-basic.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <div data-i18n="Basic">Login</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="auth-register-basic.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <div data-i18n="Basic">Register</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="auth-forgot-password-basic.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <div data-i18n="Basic">Forgot Password</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-cube-alt"></i>
                <div data-i18n="Misc">Misc</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="/pages-misc-error.html" className="menu-link">
                    <to data-i18n="Error">Error</to>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/pages-misc-under-maintenance.html"
                    className="menu-link"
                  >
                    <div data-i18n="Under Maintenance">Under Maintenance</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Components</span>
            </li>
            <li className="menu-item">
              <Link to="cards-basic.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">User interface</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="ui-accordion.html" className="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-alerts.html" className="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-badges.html" className="menu-link">
                    <div data-i18n="Badges">Badges</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-buttons.html" className="menu-link">
                    <div data-i18n="Buttons">Buttons</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-carousel.html" className="menu-link">
                    <div data-i18n="Carousel">Carousel</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-collapse.html" className="menu-link">
                    <div data-i18n="Collapse">Collapse</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-dropdowns.html" className="menu-link">
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-footer.html" className="menu-link">
                    <div data-i18n="Footer">Footer</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-list-groups.html" className="menu-link">
                    <div data-i18n="List Groups">List groups</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-modals.html" className="menu-link">
                    <div data-i18n="Modals">Modals</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-navbar.html" className="menu-link">
                    <div data-i18n="Navbar">Navbar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-offcanvas.html" className="menu-link">
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="ui-pagination-breadcrumbs.html"
                    className="menu-link"
                  >
                    <div data-i18n="Pagination &amp; Breadcrumbs">
                      Pagination &amp; Breadcrumbs
                    </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-progress.html" className="menu-link">
                    <div data-i18n="Progress">Progress</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-spinners.html" className="menu-link">
                    <div data-i18n="Spinners">Spinners</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-tabs-pills.html" className="menu-link">
                    <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-toasts.html" className="menu-link">
                    <div data-i18n="Toasts">Toasts</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-tooltips-popovers.html" className="menu-link">
                    <div data-i18n="Tooltips & Popovers">
                      Tooltips &amp; popovers
                    </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="ui-typography.html" className="menu-link">
                    <div data-i18n="Typography">Typography</div>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <Link to="/" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-copy"></i>
                <div data-i18n="Extended UI">Extended UI</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link
                    to="extended-ui-perfect-scrollbar.html"
                    className="menu-link"
                  >
                    <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="extended-ui-text-divider.html"
                    className="menu-link"
                  >
                    <div data-i18n="Text Divider">Text Divider</div>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <Link to="icons-boxicons.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-crown"></i>
                <div data-i18n="Boxicons">Boxicons</div>
              </Link>
            </li>

            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Forms &amp; Tables</span>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">Form Elements</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="forms-basic-inputs.html" className="menu-link">
                    <div data-i18n="Basic Inputs">Basic Inputs</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="forms-input-groups.html" className="menu-link">
                    <div data-i18n="Input groups">Input groups</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Layouts">Form Layouts</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="form-layouts-vertical.html" className="menu-link">
                    <div data-i18n="Vertical Form">Vertical Form</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="form-layouts-horizontal.html" className="menu-link">
                    <div data-i18n="Horizontal Form">Horizontal Form</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="tables-basic.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-table"></i>
                <div data-i18n="Tables">Tables</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                target="_blank"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bx-support"></i>
                <div data-i18n="Support">Support</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                target="_blank"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bx-file"></i>
                <div data-i18n="Documentation">Documentation</div>
              </Link>
            </li>
          </li>

            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Pages</span>
            </li>
            <li class="menu-item">
              <Link to="/" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Account Settings</div>
              </Link>
              <ul class="menu-sub">
                <li class="menu-item">
                  <Link to="pages-account-settings-account.html" class="menu-link">
                    <div data-i18n="Account">Account</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="pages-account-settings-notifications.html" class="menu-link">
                    <div data-i18n="Notifications">Notifications</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="pages-account-settings-connections.html" class="menu-link">
                    <div data-i18n="Connections">Connections</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <Link to="/" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                <div data-i18n="Authentications">Authentications</div>
              </Link>
              <ul class="menu-sub">
                <li class="menu-item">
                  <Link to="auth-login-basic.html" class="menu-link" target="_blank">
                    <div data-i18n="Basic">Login</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="auth-register-basic.html" class="menu-link" target="_blank">
                    <div data-i18n="Basic">Register</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="auth-forgot-password-basic.html" class="menu-link" target="_blank">
                    <div data-i18n="Basic">Forgot Password</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <Link to="/" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-cube-alt"></i>
                <div data-i18n="Misc">Misc</div>
              </Link>
              <ul class="menu-sub">
                <li class="menu-item">
                  <Link to="pages-misc-error.html" class="menu-link">
                    <div data-i18n="Error">Error</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="pages-misc-under-maintenance.html" class="menu-link">
                    <div data-i18n="Under Maintenance">Under Maintenance</div>
                  </Link>
                </li>
              </ul>
            </li>
            
            <li class="menu-header small text-uppercase"><span class="menu-header-text">Components</span></li>
           
            <li class="menu-item">
              <Link to="cards-basic.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </Link>
            </li>
            
            <li class="menu-item">
              <Link to="/" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">User interface</div>
              </Link>
              <ul class="menu-sub">
                <li class="menu-item">
                  <Link to="ui-accordion.html" class="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-alerts.html" class="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-badges.html" class="menu-link">
                    <div data-i18n="Badges">Badges</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-buttons.html" class="menu-link">
                    <div data-i18n="Buttons">Buttons</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-carousel.html" class="menu-link">
                    <div data-i18n="Carousel">Carousel</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-collapse.html" class="menu-link">
                    <div data-i18n="Collapse">Collapse</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-dropdowns.html" class="menu-link">
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-footer.html" class="menu-link">
                    <div data-i18n="Footer">Footer</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-list-groups.html" class="menu-link">
                    <div data-i18n="List Groups">List groups</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-modals.html" class="menu-link">
                    <div data-i18n="Modals">Modals</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-navbar.html" class="menu-link">
                    <div data-i18n="Navbar">Navbar</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-offcanvas.html" class="menu-link">
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-pagination-breadcrumbs.html" class="menu-link">
                    <div data-i18n="Pagination &amp; Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-progress.html" class="menu-link">
                    <div data-i18n="Progress">Progress</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-spinners.html" class="menu-link">
                    <div data-i18n="Spinners">Spinners</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-tabs-pills.html" class="menu-link">
                    <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-toasts.html" class="menu-link">
                    <div data-i18n="Toasts">Toasts</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-tooltips-popovers.html" class="menu-link">
                    <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="ui-typography.html" class="menu-link">
                    <div data-i18n="Typography">Typography</div>
                  </Link>
                </li>
              </ul>
            </li>

         
            <li class="menu-item">
              <Link to="/" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-copy"></i>
                <div data-i18n="Extended UI">Extended UI</div>
              </Link>
              <ul class="menu-sub">
                <li class="menu-item">
                  <Link to="extended-ui-perfect-scrollbar.html" class="menu-link">
                    <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="extended-ui-text-divider.html" class="menu-link">
                    <div data-i18n="Text Divider">Text Divider</div>
                  </Link>
                </li>
              </ul>
            </li>

            <li class="menu-item">
              <Link to="icons-boxicons.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-crown"></i>
                <div data-i18n="Boxicons">Boxicons</div>
              </Link>
            </li>

          
            <li class="menu-header small text-uppercase"><span class="menu-header-text">Forms &amp; Tables</span></li>
           
            <li class="menu-item">
              <Link to="/" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">Form Elements</div>
              </Link>
              <ul class="menu-sub">
                <li class="menu-item">
                  <Link to="forms-basic-inputs.html" class="menu-link">
                    <div data-i18n="Basic Inputs">Basic Inputs</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="forms-input-groups.html" class="menu-link">
                    <div data-i18n="Input groups">Input groups</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <Link to="/" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Layouts">Form Layouts</div>
              </Link>
              <ul class="menu-sub">
                <li class="menu-item">
                  <Link to="form-layouts-vertical.html" class="menu-link">
                    <div data-i18n="Vertical Form">Vertical Form</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="form-layouts-horizontal.html" class="menu-link">
                    <div data-i18n="Horizontal Form">Horizontal Form</div>
                  </Link>
                </li>
              </ul>
            </li>
          
            <li class="menu-item">
              <Link to="tables-basic.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-table"></i>
                <div data-i18n="Tables">Tables</div>
              </Link>
            </li>
        
            <li class="menu-header small text-uppercase"><span class="menu-header-text">Misc</span></li>
            <li class="menu-item">
              <Link
                to="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                target="_blank"
                class="menu-link"
              >
                <i class="menu-icon tf-icons bx bx-support"></i>
                <div data-i18n="Support">Support</div>
              </Link>
            </li>
            <li class="menu-item">
              <Link
                to="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                target="_blank"
                class="menu-link"
              >
                <i class="menu-icon tf-icons bx bx-file"></i>
                <div data-i18n="Documentation">Documentation</div>
              </Link>
            </li>
          </ul>
        </aside>

    </div>
  )
}









//  import React, { useState } from "react";
//  import { Link } from "react-router-dom";

// export const SideMenu = () => {
//   const [openSubMenu, setOpenSubMenu] = useState("");

//   const handleMenuToggle = () => {
//     openSubMenu === "open" ? setOpenSubMenu("") : setOpenSubMenu("open");
//   };

//   return (
//     <div>
//       <aside
//         id="layout-menu"
//         classNameName="layout-menu menu-vertical menu bg-menu-theme"
//       >
//         <div classNameName="app-brand demo">
//           <Link to="index.html" classNameName="app-brand-link">
//             <span classNameName="app-brand-text demo menu-text fw-bolder ms-2">
//               Sneat
//             </span>
//           </Link>
//           <Link
//             to="/"
//             classNameName="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
//           >
//             <i classNameName="bx bx-chevron-left bx-sm align-middle" />
//           </Link>
//         </div>
//         <ul classNameName="menu-inner py-1">
//           <li classNameName="menu-item active">
//             <h1 classNameName="menu-link">
//               <i classNameName="menu-icon tf-icons bx bx-home-circle" />
//               <div data-i18n="Analytics">Dashboard</div>
//             </h1>
//           </li>
//           <li className={`menu-item ${openSubMenu}`}>
//             <Link
//               to="/"
//               classNameName="menu-link menu-toggle"
//               onClick={() => handleMenuToggle()}
//             >
//               handleMenuToggle(){"}"}&gt;
//               <i classNameName="menu-icon tf-icons bx bx-layout" />
//               <div data-i18n="Layouts">Layouts</div>
//             </Link>
//             <ul classNamename="menu-sub">
//               <li classNameName="menu-item">
//                 <Link to="linkpage" classNameName="menu-link">
//                   <div data-i18n="Without menu">Without menu</div>
//                 </Link>
//               </li>
//             </ul>

//             <li className="menu-item">
//               <Link to="/" className="menu-link menu-toggle">
//                 <i className="menu-icon tf-icons bx bx-layout"></i>
//                 <div data-i18n="Layouts">Layouts</div>
//               </Link>

//               <ul className="menu-sub">
//                 <li className="menu-item">
//                   <Link to="layouts-without-menu.html" className="menu-link">
//                     <div data-i18n="Without menu">Without menu</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="layouts-without-navbar.html" className="menu-link">
//                     <div data-i18n="Without navbar">Without navbar</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="layouts-container.html" className="menu-link">
//                     <div data-i18n="Container">Container</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="layouts-fluid.html" className="menu-link">
//                     <div data-i18n="Fluid">Fluid</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="layouts-blank.html" className="menu-link">
//                     <div data-i18n="Blank">Blank</div>
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             <li className="menu-header small text-uppercase">
//               <span className="menu-header-text">Pages</span>
//             </li>
//             <li className="menu-item">
//               <Link
//                 to="/"
//                 className="menu-link menu-toggle"
//               >
//                 <div data-i18n="Account Settings">Account Settings</div>
//               </Link>
//               <ul className="menu-sub">
//                 <li className="menu-item">
//                   <Link
//                     to="pages-account-settings-account.html"
//                     className="menu-link"
//                   >
//                     <div data-i18n="Account">Account</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link
//                     to="pages-account-settings-notifications.html"
//                     className="menu-link"
//                   >
//                     <div data-i18n="Notifications">Notifications</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link
//                     to="pages-account-settings-connections.html"
//                     className="menu-link"
//                   >
//                     <div data-i18n="Connections">Connections</div>
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="menu-item">
//               <Link to="/" className="menu-link menu-toggle">
//                 <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
//                 <div data-i18n="Authentications">Authentications</div>
//               </Link>
//               <ul className="menu-sub">
//                 <li className="menu-item">
//                   <Link
//                     to="auth-login-basic.html"
//                     className="menu-link"
//                     target="_blank"
//                   >
//                     <div data-i18n="Basic">Login</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link
//                     to="auth-register-basic.html"
//                     className="menu-link"
//                     target="_blank"
//                   >
//                     <div data-i18n="Basic">Register</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link
//                     to="auth-forgot-password-basic.html"
//                     className="menu-link"
//                     target="_blank"
//                   >
//                     <div data-i18n="Basic">Forgot Password</div>
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="menu-item">
//               <Link to="/" className="menu-link menu-toggle">
//                 <i className="menu-icon tf-icons bx bx-cube-alt"></i>
//                 <div data-i18n="Misc">Misc</div>
//               </Link>
//               <ul className="menu-sub">
//                 <li className="menu-item">
//                   <a to="pages-misc-error.html" className="menu-link">
//                     <to data-i18n="Error">Error</to>
//                   </a>
//                 </li>
//                 <li className="menu-item">
//                   <Link
//                     to="pages-misc-under-maintenance.html"
//                     className="menu-link"
//                   >
//                     <div data-i18n="Under Maintenance">Under Maintenance</div>
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="menu-header small text-uppercase">
//               <span className="menu-header-text">Components</span>
//             </li>
//             <li className="menu-item">
//               <Link to="cards-basic.html" className="menu-link">
//                 <i className="menu-icon tf-icons bx bx-collection"></i>
//                 <div data-i18n="Basic">Cards</div>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="javascript:void(0)" className="menu-link menu-toggle">
//                 <i className="menu-icon tf-icons bx bx-box"></i>
//                 <div data-i18n="User interface">User interface</div>
//               </Link>
//               <ul className="menu-sub">
//                 <li className="menu-item">
//                   <Link to="ui-accordion.html" className="menu-link">
//                     <div data-i18n="Accordion">Accordion</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-alerts.html" className="menu-link">
//                     <div data-i18n="Alerts">Alerts</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-badges.html" className="menu-link">
//                     <div data-i18n="Badges">Badges</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-buttons.html" className="menu-link">
//                     <div data-i18n="Buttons">Buttons</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-carousel.html" className="menu-link">
//                     <div data-i18n="Carousel">Carousel</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-collapse.html" className="menu-link">
//                     <div data-i18n="Collapse">Collapse</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-dropdowns.html" className="menu-link">
//                     <div data-i18n="Dropdowns">Dropdowns</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-footer.html" className="menu-link">
//                     <div data-i18n="Footer">Footer</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-list-groups.html" className="menu-link">
//                     <div data-i18n="List Groups">List groups</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-modals.html" className="menu-link">
//                     <div data-i18n="Modals">Modals</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <a to="ui-navbar.html" className="menu-link">
//                     <div data-i18n="Navbar">Navbar</div>
//                   </a>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-offcanvas.html" className="menu-link">
//                     <div data-i18n="Offcanvas">Offcanvas</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link
//                     to="ui-pagination-breadcrumbs.html"
//                     className="menu-link"
//                   >
//                     <div data-i18n="Pagination &amp; Breadcrumbs">
//                       Pagination &amp; Breadcrumbs
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-progress.html" className="menu-link">
//                     <div data-i18n="Progress">Progress</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-spinners.html" className="menu-link">
//                     <div data-i18n="Spinners">Spinners</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <a to="ui-tabs-pills.html" className="menu-link">
//                     <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
//                   </a>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-toasts.html" className="menu-link">
//                     <div data-i18n="Toasts">Toasts</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-tooltips-popovers.html" className="menu-link">
//                     <div data-i18n="Tooltips & Popovers">
//                       Tooltips &amp; popovers
//                     </div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="ui-typography.html" className="menu-link">
//                     <div data-i18n="Typography">Typography</div>
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             <li className="menu-item">
//               <Link to="javascript:void(0)" className="menu-link menu-toggle">
//                 <i className="menu-icon tf-icons bx bx-copy"></i>
//                 <div data-i18n="Extended UI">Extended UI</div>
//               </Link>
//               <ul className="menu-sub">
//                 <li className="menu-item">
//                   <Link
//                     to="extended-ui-perfect-scrollbar.html"
//                     className="menu-link"
//                   >
//                     <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link
//                     to="extended-ui-text-divider.html"
//                     className="menu-link"
//                   >
//                     <div data-i18n="Text Divider">Text Divider</div>
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             <li className="menu-item">
//               <Link to="icons-boxicons.html" className="menu-link">
//                 <i className="menu-icon tf-icons bx bx-crown"></i>
//                 <div data-i18n="Boxicons">Boxicons</div>
//               </Link>
//             </li>

//             <li className="menu-header small text-uppercase">
//               <span className="menu-header-text">Forms &amp; Tables</span>
//             </li>
//             <li className="menu-item">
//               <Link to="/" className="menu-link menu-toggle">
//                 <i className="menu-icon tf-icons bx bx-detail"></i>
//                 <div data-i18n="Form Elements">Form Elements</div>
//               </Link>
//               <ul className="menu-sub">
//                 <li className="menu-item">
//                   <Link to="forms-basic-inputs.html" className="menu-link">
//                     <div data-i18n="Basic Inputs">Basic Inputs</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link to="forms-input-groups.html" className="menu-link">
//                     <div data-i18n="Input groups">Input groups</div>
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="menu-item">
//               <Link to="/" className="menu-link menu-toggle">
//                 <i className="menu-icon tf-icons bx bx-detail"></i>
//                 <div data-i18n="Form Layouts">Form Layouts</div>
//               </Link>
//               <ul className="menu-sub">
//                 <li className="menu-item">
//                   <Link to="form-layouts-vertical.html" className="menu-link">
//                     <div data-i18n="Vertical Form">Vertical Form</div>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <a to="form-layouts-horizontal.html" className="menu-link">
//                     <div data-i18n="Horizontal Form">Horizontal Form</div>
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="menu-item">
//               <Link to="tables-basic.html" className="menu-link">
//                 <i className="menu-icon tf-icons bx bx-table"></i>
//                 <div data-i18n="Tables">Tables</div>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link
//                 to="https://github.com/themeselection/sneat-html-admin-template-free/issues"
//                 target="_blank"
//                 className="menu-link"
//               >
//                 <i className="menu-icon tf-icons bx bx-support"></i>
//                 <div data-i18n="Support">Support</div>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link
//                 to="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
//                 target="_blank"
//                 className="menu-link"
//               >
//                 <i className="menu-icon tf-icons bx bx-file"></i>
//                 <div data-i18n="Documentation">Documentation</div>
//               </Link>
//             </li>
//           </li>
//         </ul>
//       </aside>
//     </div>
//   );
// };
