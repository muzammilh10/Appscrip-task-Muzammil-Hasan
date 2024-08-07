import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./Component/Footer/footer";
import Navbar from './Component/Navbar/navbar'
import SideBar from './Component/Sidebar/Sidebar'
import CardDetail from './Component/CardDetail/CardDetail'

import './globals.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="intro">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </section>
      <div className="filter">
        <div className="left">
          <div className="left-value">3425 ITEMS</div>
          <div className="left-value"><img src="./arrow-left.png" className="rotate180" alt="" />HIDE FILTER</div>
        </div>
        <div className="right">RECOMMENDED <img src="./arrow-left.png" alt="" /></div>
      </div>
      {/* <SideBar /> */}


      <CardDetail />
      <Footer />
    </>
  );
}
