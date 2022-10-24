import React, { useState } from 'react';
import styles from "./style.module.css";
import Logo from "../../Images/airbnb.png";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Settings from "../../Images/setting.png";
import LoaderSection from '../LoaderSection';

const Navbar = () => {

    const [loading, setLoading] = useState(false);

    setTimeout(() => {
        setLoading(true);
    }, 1000)

    return (
        <div>
            <section className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo.png" />
                </div>
                <div className={styles.search}>
                    <div className={styles.searchcontent}>
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                        {loading && <span>Anywhere</span>}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                        {loading && <span>Any week</span>}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                        {loading && <span>Any guests</span>}
                        <div className={styles.searchIcon}>
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className={styles.signIn}>
                    <div className={styles.signInContent}>
                    {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                        {loading && <p>become a host</p>}
                        <div className={styles.languageIconContainer}>
                            <LanguageIcon />
                        </div>
                        <span className={styles.navIcons}>
                            <MenuIcon />
                            <AccountCircleIcon color='gray' />
                        </span>
                    </div>
                </div>
            </section>
            <section className={styles.navbarSmallScreen}>
                <div className={styles.searchSmallScreen}>
                    <div className={styles.searchcontentSmallScreen}>
                        <div className={styles.searchIconSmallScreen}>
                            <SearchIcon />
                        </div>
                        <div className={styles.ContainerSmallScreen}>
                            <div className={styles.whereTo}>
                                Where to?
                            </div>
                            <div className={styles.spanDivs}>
                                <span className={styles.changeTextOne}>Anywhere</span>
                                <i>.</i>
                                <span className={styles.changeTextTwo}>Any week</span>
                                <i>.</i>
                                <span className={styles.changeTextThree}>Any guests</span>
                            </div>
                        </div>
                        <div className={styles.sliderIcon}>
                            <img className={styles.settingIcon} src={Settings} alt="settings.png" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar;