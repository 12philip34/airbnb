import React from 'react';
import styles from "./style.module.css";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const FooterModal = ({ setIsOpen }) => {
    const cancleButton = {
        color: '#333'
    }
    return (
        <div>
            <section className={styles.footer}>
                <div className={styles.container}>
                    <div className="row">
                        <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                            <CloseRoundedIcon style={cancleButton} />
                        </button>
                        <div className={styles.footerCol}>
                            <h4>support</h4>
                            <ul>
                                <li><a href="#">help center</a></li>
                                <li><a href="#">aircover</a></li>
                                <li><a href="#">safty information</a></li>
                                <li><a href="#">support people with disabilities</a></li>
                                <li><a href="#">cancellation options</a></li>
                                <li><a href="#">our covid-19 response</a></li>
                                <li><a href="#">report a neighbourhood concern</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerCol}>
                            <h4>community</h4>
                            <ul>
                                <li><a href="#">airbnb.org:disaster relief housing</a></li>
                                <li><a href="#">support afghan refugees</a></li>
                                <li><a href="#">combacting discrimination</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerCol}>
                            <h4>hosting</h4>
                            <ul>
                                <li><a href="#">try hosting</a></li>
                                <li><a href="#">air cover for hosts</a></li>
                                <li><a href="#">explore hosting resources</a></li>
                                <li><a href="#">visit our community forum</a></li>
                                <li><a href="#">how to host reponsibly</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerCol}>
                            <h4>airbnb</h4>
                            {/* <div className={styles.socialLinks}>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div> */}
                             <ul>
                                <li><a href="#">newsroom</a></li>
                                <li><a href="#">learn about new features</a></li>
                                <li><a href="#">letter from our founders</a></li>
                                <li><a href="#">careers</a></li>
                                <li><a href="#">investors</a></li>
                                <li><a href="#">gift cards</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FooterModal