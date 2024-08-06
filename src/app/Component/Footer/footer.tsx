import React from 'react'
// import { useNavigate } from 'react-router-dom'

import "./Footer.css"

export default function Footer() {
  // const navigate = useNavigate()




  return (

    <>
      <footer>
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <form>
              <input type="email" name="email" placeholder="Enter email address" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>
        </section>

        <section className='ft-About'>
          <div className="ft-main-item">
            <h2 className="ft-title">ABOUT  </h2>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">QUICK LINKS</h2>
            <ul>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">eBooks</a></li>
              <li><a href="#">Webinars</a></li>
            </ul>
          </div>
          <div className='ft-social'>
            <h2 className="ft-title">FOLLOW US</h2>
            <ul className="ft-social-list">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-github"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </section>

        <section className="">
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
