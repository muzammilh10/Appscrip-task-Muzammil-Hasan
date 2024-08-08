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
              <input type='checkbox' className='checkbox' /> CUSTOMIZABLE
            </label>

          </div>
          <div className="sidebar-menu">
            <ul>
              {['Dashboard New', 'E-commerce', 'Components', 'Charts', 'Maps'].map((item, index) => (
                <li className={`sidebar-dropdown ${activeDropdown === index ? 'active' : ''}`} key={index}>
                  <a href="#" onClick={() => handleDropdownClick(index)}>
                    <span className='title'>{item} <img src='./arrow-left.png' /></span>
                    <span>ALL</span>
                  </a>
                  <div className={`sidebar-submenu ${activeDropdown === index ? 'show' : ''}`}>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" /> Men
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" /> Women
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" /> Baby & Kids
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
