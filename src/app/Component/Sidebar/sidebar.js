// components/SidebarFilter.js
'use client'
import React, { useState } from 'react';
import './Sidebar.css';

const SidebarFilter = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarToggled(!sidebarToggled);
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className={`page-wrapper chiller-theme ${sidebarToggled ? 'toggled' : ''}`}>

      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <label>
              <input type='checkbox' /> CUSTOMIZABLE
            </label>
            <div id="close-sidebar" onClick={handleSidebarToggle}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              {['Dashboard New', 'E-commerce', 'Components', 'Charts', 'Maps'].map((item, index) => (
                <li className={`sidebar-dropdown ${activeDropdown === index ? 'active' : ''}`} key={index}>
                  <a href="#" onClick={() => handleDropdownClick(index)}>
                    <i className={`fa fa-${item.toLowerCase().replace(' ', '-')}`}></i>
                    <span className='title'>{item} <img src='./arrow-left.png' /></span>
                    <span>ALL</span>
                    {item === 'E-commerce' && <span className="badge badge-pill badge-danger">3</span>}
                  </a>
                  <div className={`sidebar-submenu ${activeDropdown === index ? 'show' : ''}`}>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" /> Item 1
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" /> Item 2
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" /> Item 3
                        </label>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default SidebarFilter;
