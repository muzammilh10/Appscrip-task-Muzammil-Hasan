import React from 'react'
// import { useNavigate } from 'react-router-dom'

import "./Footer.css"


export default function Footer() {
  // const navigate = useNavigate()




  return (

    <>
      <footer>
        <section className="ft-main">
          <div className="ft-main-item main-width1 ">
            <h2 className="ft-title">BE THE FIRST TO KNOW </h2>
            <p>Sign up for updates from mettā muse.</p>
            <form className='formSubmit'>
              <input type="email" name="email" className='inputBox' placeholder="Enter email address" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          {/* <div className="ft-main-item "></div>*/}
          <div className="ft-main-item main-width2">

            <div>
              <h2 className="ft-title ft-contact" >Contact</h2>
              <h2 className="mt-title">CALL US</h2>

              <ul>
                <li><a href="#">+44 221 133 5360</a></li>
                <li><a href="#">customercare@mettamuse.com</a></li>
              </ul>
            </div>
            <div>
              <h2 className="ft-currency">CURRENCY</h2>
              <ul>
                <li><a href="#"><img src='./US.png' />+USD</a></li>
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
                <li><a href="#">Boutiques</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">EU Compliances Docs</a></li>
              </ul>
            </div>
            <div className="ft-about-item">
              <h2 className="ft-title">QUICK LINKS</h2>
              <ul>
                <li><a href="#">Orders & Shipping</a></li>
                <li><a href="#">Join/Login as a Seller</a></li>
                <li><a href="#">Payment & Pricing</a></li>
                <li><a href="#">WebinarsReturn & Refunds</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>

              </ul>
            </div>
          </div>
          <div className='ft-main-item main-width3'>
            <h2 className="ft-title">FOLLOW US</h2>
            <ul className="ft-social-list">
              <li><img src='./insta.png' /></li>
              <li><img src='./linkedin.png' /></li>
            </ul>
            <div className='paymentMethod'>
              <h2>mettā muse Accepts</h2>
              <div >
                <img src='./gpay.png' />
                <img src='./payment.png' />
                <img src='./paypal.png' />
                <img src='./amex.png' />
                <img src='./appplepay.png' />
                <img src='./pay.png' />
              </div>
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
