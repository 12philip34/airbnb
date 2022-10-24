import React, { useState } from 'react';
import styles from "./style.module.css";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoaderSection from '../LoaderSection';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import FootersModal from './Footer';

const Footer = () => {
  const footerIcon = {
    paddingRight: '1px'
  }

  const upFooterArrow = {
    fontSize: '30px',
    cursor: 'pointer'
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.mainFooterContainer}>
      {isOpen && <FootersModal setIsOpen={setIsOpen} />}
      <section className={styles.dropUpFooter}>
        <div className={styles.dropUpBox}>
          <div className={styles.contentOne}>
            <span className={styles.airbnbInc}>© 2022 Airbnb, Inc.</span>
            <span className={styles.spanDot}>.</span>
            <span className={styles.privacy}>privacy</span>
            <span className={styles.spanDot}>.</span>
            <span className={styles.terms}>terms</span>
            <span className={styles.spanDot}>.</span>
            <span className={styles.sitemap}>sitemap</span>
            <span className={styles.spanDot}>.</span>
            <span className={styles.destination}>destination</span>
          </div>
          <div className={styles.contentTwo}>
            <span> <LanguageIcon style={footerIcon} className={styles.language}/> English(US)</span>
            <span> <AttachMoneyRoundedIcon style={footerIcon}  className={styles.dollar}/> USD</span>
            <span className={styles.support}>support & resources</span>
            <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
              <ExpandLessRoundedIcon style={upFooterArrow} />
            </button>
          </div>
        </div>
      </section>
      <div className={styles.footercontainer}>
        <div className={styles.footerContent}>
          <div className={styles.searchCont}>
            <SearchIcon className={styles.search} />
            <h5>Explore</h5>
          </div>
          <div className={styles.whitelist}>
            <FavoriteBorderIcon className={styles.iconSize} />
            <h5>whitelist</h5>
          </div>
          <div className={styles.login}>
            <AccountCircleIcon className={styles.iconSize} />
            <h5>Login</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;