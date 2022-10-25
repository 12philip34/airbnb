import React, {useState} from 'react';
import image from "../../Images/hus1.jpg";
import styles from "./style.module.css";
import DeckRoundedIcon from '@mui/icons-material/DeckRounded';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import ForestRoundedIcon from '@mui/icons-material/ForestRounded';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import BeachAccessRoundedIcon from '@mui/icons-material/BeachAccessRounded';
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import CastleRoundedIcon from '@mui/icons-material/CastleRounded';
import SailingRoundedIcon from '@mui/icons-material/SailingRounded';
import CleanHandsRoundedIcon from '@mui/icons-material/CleanHandsRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import LoaderSection from '../LoaderSection';

const Slider = () => {

   const [loading, setLoading] = useState(false);
   setTimeout(() => {
      setLoading(true);
  }, 1000)

   return (
      <div>

         <div className={styles.container}>
            <div className={styles.faders}>
               <div className={styles.left}></div>
               <div className={styles.right}></div>
               <div className={styles.filteredDiv}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <TuneRoundedIcon />}
                  {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '100px' }} />}
                  {loading && <h3>Filters</h3>}
               </div>
            </div>

            <div className={styles.items}>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <DeckRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>Shared homes</h3>}
               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                 {loading && <HomeWorkRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>designs</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                 {loading && <ForestRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>tropical</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <EmojiFoodBeverageRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>breakfast</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                 {loading && <RocketRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>caves</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <BeachAccessRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                 {loading && <h3>omg!</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                 {loading && <PoolRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>beach</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <CastleRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>mansions</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <SailingRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>boats</h3>}
               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <CleanHandsRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>luxe</h3>}
               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <LocationCityRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>cities</h3>}
               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <DeckRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>Shared homes</h3>}
               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                 {loading && <HomeWorkRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>designs</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                 {loading && <ForestRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>tropical</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <EmojiFoodBeverageRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>breakfast</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                 {loading && <RocketRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>caves</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <BeachAccessRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                 {loading && <h3>omg!</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                 {loading && <PoolRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>beach</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <CastleRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>mansions</h3>}

               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <SailingRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>boats</h3>}
               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <CleanHandsRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>luxe</h3>}
               </div>
               <div className={styles.entry}>
               {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '40px', marginRight: '10px' }} />}
                  {loading && <LocationCityRoundedIcon className={styles.navbarSlideIcons} />}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                  {loading && <h3>cities</h3>}
               </div>
            </div>
         </div>

      </div>
   )
}

export default Slider