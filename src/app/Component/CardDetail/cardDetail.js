import React from 'react';
import './cardDetail.css';


import SideBar from '../Sidebar/Sidebar'

const CardDetail = () => {
  return (
    <div className='cardDetail'>
      <SideBar />
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=10"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p>Sign in or Create an account to see pricing</p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=5"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p>Sign in or Create an account to see pricing</p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=11"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p>Sign in or Create an account to see pricing</p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=14"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
                <p>Sign in or Create an account to see pricing</p>

              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=17"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=2"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>

              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=2"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>

              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=2"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>

              </div>
            </div>
          </li><li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={"https://picsum.photos/500/300/?image=2"} /></div>
              <div className="card_content">
                <h2 className="card_title">Card Grid Layout</h2>

              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
