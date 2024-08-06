import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./Component/Footer/footer";
import Navbar  from './Component/Navbar/navbar'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
    <Navbar />
    {/* <Footer /> */}
        </>
  );
}
