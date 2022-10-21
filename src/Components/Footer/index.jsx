import React from 'react';
import styles from "./style.module.css";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Footer = () => {
  return (
    <div>
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