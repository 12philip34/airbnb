import React from 'react';
import styles from "./style.module.css";
import Navbar from '../../Components/Navbar';
import RenderCard from "../../Components/RenderCard/RenderCard";
import Slider from '../../Components/slider';

const Homepage = () => {
  return (
    <div>
        <div className={styles.container}>
        <Navbar/>
        <Slider />
        <RenderCard />
        </div>
    </div>
  )
}

export default Homepage;