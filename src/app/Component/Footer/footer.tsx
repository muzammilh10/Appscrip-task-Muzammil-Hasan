import React from 'react'
// import { useNavigate } from 'react-router-dom'

import "./Footer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  // const navigate = useNavigate()




  return (

    <>
      <footer>
        <section className="ft-main">
          <div className="ft-main-item main-width1 ">
            <h2 className="ft-title">Be the first to know</h2>
            <p>Sign up for updates from mettā muse.</p>
            <form className='formSubmit'>
              <input type="email" name="email" className='inputBox' placeholder="Enter email address" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          {/* <div className="ft-main-item "></div> */}
          <div className="ft-main-item main-width2">
            <div>
              <h2 className="ft-title">Contact</h2>
              <ul>
                <li><a href="#">+44 221 133 5360</a></li>
                <li><a href="#">customercare@mettamuse.com</a></li>
              </ul>
            </div>
            <div>
              <h2 className="ft-currency">CURRENCY</h2>
              <ul>
                <li><a href="#">+USD</a></li>
                <li><a href="#" id='ft-detail'>Transactions will be completed in Euros and a currency reference is available on hover.</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className='ft-About'>
          <div className='ft-nested-item main-width1'>

            <div className="ft-about-item">
              <h2 className="ft-title">mettā muse</h2>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">Artisian</a></li>
                <li><a href="#">Boutique</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="ft-about-item">
              <h2 className="ft-title">QUICK LINKS</h2>
              <ul>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">eBooks</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>
          </div>
          <div className='ft-main-item main-width2'>
            <h2 className="ft-title">FOLLOW US</h2>
            <ul className="ft-social-list">
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            </ul>
            <div>
              <h1>mettā muse Accepts</h1>
            </div>
          </div>
        </section>

   

        <section className="ft-legal">
          <ul className="ft-legal-list">


            <li>&copy; Copyright © 2023 mettamuse. All rights reserved.</li>
          </ul>
        </section>
      </footer>
    </>

  )
}
