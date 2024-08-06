import React from 'react'
import "./Navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faGreaterThan } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {


    return (
        <>
            <div className="navigation">
                <div className="logo">
                    <img src='./Vector.png' />
                </div>
                <div className="navigation-search-container">
                    <div>

                        LOGO
                    </div>
                    <div>
                        Log
                    </div>
                </div>

                <div className="navigation-icons">

                    <a href="#" className="navigation-link">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        {/* <i className="far fa-user-circle"></i> */}
                    </a>
                    <a href="#" className="navigation-link">
                        <FontAwesomeIcon icon={faHeart} />
                        {/* <i className="far fa-user-circle"></i> */}
                    </a>

                    <a href="#" className="navigation-link">
                        <FontAwesomeIcon icon={faBagShopping} />
                        {/* <i className="far fa-user-circle"></i> */}
                    </a>

                    <a href="#" className="navigation-link">
                        <FontAwesomeIcon icon={faUser} />
                        {/* <i className="far fa-user-circle"></i> */}
                    </a>

                    <a href="#" className="navigation-link">
                        <FontAwesomeIcon icon={faGreaterThan} rotation={90} />
                        {/* <i className="far fa-user-circle"></i> */}
                    </a>

                </div>
            </div>

        </>
    )
}
