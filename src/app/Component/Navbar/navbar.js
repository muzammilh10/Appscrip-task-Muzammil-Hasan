import React from 'react'
import "./Navbar.css"


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
                    </a>
                    <a href="#" className="navigation-link">
                        <img src='./heart.png' />

                    </a>

                    <a href="#" className="navigation-link">
                        <img src='./shopping-bag.png' />

          
                    </a>

                    <a href="#" className="navigation-link">
                        <img src='./profile.png' />

                    </a>

                    <a href="#" className="navigation-link">
                         
                        <div className='arrow-Left'>ENG  <img src='./arrow-left.png' /></div>

                   </a>

                </div>
            </div>

        </>
    )
}
