import React from 'react'
import "./Navbar.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faGreaterThan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {


    return (
        <>
            <div className='highlightDetail'>
                <div>Lorem ipsum dolor</div>
                <div> Lorem ipsum dolor</div>
                <div> Lorem ipsum dolor</div>

            </div>
            <div className="navigation">
                <div className="logo">
                    <img src='./Vector.png' />
                </div>
                <div className="navigation-search-container">
                    <div className='logoName'>
                        LOGO
                    </div>
                    <div >
                        <ul className='navbarMenu' >
                            <li><a href="#">SHOP</a></li>
                            <li><a href="#">SKILLS</a></li>
                            <li><a href="#">STORIES</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
                {/* <i class="fa-sharp fa-thin fa-magnifying-glass"></i> */}
                <div className="navigation-icons">
                    <a href="#" className="navigation-link">
                        <img src='./search-normal.png' />
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="fas fa-check"  style={{ color: "red", fontWeight: 200 }} /> */}
                    </a>
                    <a href="#" className="navigation-link">
                        {/* <FontAwesomeIcon icon={faHeart} /> */}
                        <img src='./heart.png' />

                        {/* <i className="far fa-user-circle"></i> */}
                    </a>

                    <a href="#" className="navigation-link">
                        <img src='./shopping-bag.png' />

                        {/* <FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />
                        <FontAwesomeIcon icon={faBagShopping} /> */}
                        {/* <i className="far fa-user-circle"></i> */}
                    </a>

                    <a href="#" className="navigation-link">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <img src='./profile.png' />

                        {/* <i className="far fa-user-circle"></i> */}
                    </a>

                    <a href="#" className="navigation-link">
                        {/* <FontAwesomeIcon icon={faGreaterThan} rotation={90} />
                         */}
                        <div className='arrow-Left'>ENG  <img src='./arrow-left.png' /></div>

                        {/* <i className="far fa-user-circle"></i> */}
                    </a>

                </div>
            </div>

        </>
    )
}
