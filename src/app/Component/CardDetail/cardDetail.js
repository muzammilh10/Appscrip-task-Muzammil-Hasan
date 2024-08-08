import React from 'react';
import './cardDetail.css';
import { useState } from "react";



import SideBar from '../Sidebar/Sidebar'

const CardDetail = ({sidebar}) => {

  return (
    <div className='cardDetail'>
      {sidebar && <SideBar />}
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"./Group 136332.png"} /> </div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p>Sign in or Create an account to see pricing</p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"./Group 136349.png"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p>Sign in or Create an account to see pricing</p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"./Group 136359.png"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p>Sign in or Create an account to see pricing</p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"./Front Pic.png"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p>Sign in or Create an account to see pricing</p>

              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"./Front Pic.png"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>

              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"./Front Pic.png"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <div className='detail'>
                  <p>Sign in or Create an account to see pricing </p>
                </div>

              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={'./Group 136359.png'} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <div className='detail'>
                  <p>Sign in or Create an account to see pricing </p>
                </div>

              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"./Front Pic.png"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <div className='detail'>
                  <p>Sign in or Create an account to see pricing </p>
                </div>

              </div>
            </div>
          </li><li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"./Group 136359.png"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <div className='detail'>
                  <p>Sign in or Create an account to see pricing </p>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
