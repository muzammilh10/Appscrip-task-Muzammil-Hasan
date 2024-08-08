'use client'
import Footer from "./Component/Footer/footer";
import Navbar from './Component/Navbar/navbar'
import SideBar from './Component/Sidebar/Sidebar'
import CardDetail from './Component/CardDetail/cardDetail'

import './globals.css'
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <Navbar />
      <section className="intro">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </section>
      <div className="filter">
        <div className="left">
          <div className="left-value1">3425 ITEMS</div>
          <div className="left-value2" onClick={() => setSidebar(!sidebar)}><img src="./arrow-left.png" className={`${sidebar ? 'rotate' :'rotate90'}`} alt="" />HIDE FILTER</div>
        </div>
        <div className="right">RECOMMENDED <img src="./arrow-left.png" alt="" /></div>
      </div>
      <CardDetail sidebar={sidebar} />
      <Footer />
    </>
  );
}
