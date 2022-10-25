import React from 'react';
import styles from "./style.module.css";
import Navbar from '../../Components/Navbar';
import RenderCard from "../../Components/RenderCard/RenderCard";

const Homepage = () => {
  return (
    <div>
        <div className={styles.container}>
        <Navbar/>
        <RenderCard />
        </div>
    </div>
  )
}

export default Homepage;