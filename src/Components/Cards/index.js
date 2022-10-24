import React, { useState } from 'react';
import styles from "./style.module.css";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarSharpIcon from '@mui/icons-material/StarSharp';
import LoaderSection from '../LoaderSection/index';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
// import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const Card = (props) => {
    const [loading, setLoading] = useState(false);

    setTimeout(() => {
        setLoading(true);
    }, 1000)

    const starSize = {
        fontSize: "14px"
    }

    const heartColor = {
        color: '#fff',
        position: 'absolute',
        background: 'transparent',
        top: '5%',
        right: '5%'
    }

    const rightArrow = {
        color: '#fff',
        position: 'absolute',
        bottom: '45%',
        right: '5%'
    }

    return (
        <div>
            <div className={styles.cards}>
                <div className={styles.cardImageBox}>
                    {!loading && <LoaderSection extraStyles={{ height: '100%' }} />}
                    <img src={props.cardImage} alt="product.jpg" />
                    <FavoriteTwoToneIcon style={heartColor} />
                    <label className={styles.labelForspan}>
                        <span className={styles.spanOne}></span>
                        <span className={styles.spanTwo}></span>
                        <span className={styles.spanThree}></span>
                        <span className={styles.spanFour}></span>
                    </label>
                    <ArrowCircleRightTwoToneIcon style={rightArrow} className={styles.ArrowCircleRightTwoToneIcon} />
                </div>
                <div className={styles.cardTextBox}>
                    <div className={styles.content}>
                        {!loading && <LoaderSection extraStyles={{ height: '100%', borderRadius: '4px' }} />}
                        {loading && <h3 className={styles.textTitle}>{props.title}</h3>}
                        <label>
                            <StarSharpIcon style={starSize} />
                            {!loading && <LoaderSection extraStyles={{ height: '100%', borderRadius: '4px', width: '40px' }} />}
                            {loading && <h3 className={styles.textRating}>{props.rating}</h3>}
                        </label>
                    </div>
                    <div className={styles.contentTwo}>
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '200px' }} />}
                        {loading && <p>{props.location}</p>}
                        {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', marginTop: '10px', width: '100px' }} />}
                        {loading && <p>{props.date}</p>}
                        <div className={styles.lastCardContent}>
                            {!loading && <LoaderSection extraStyles={{ height: '20px', borderRadius: '4px', width: '50px' }} />}
                            {loading && <h3 className={styles.textRating}>{props.price}</h3>}
                            {!loading && <LoaderSection extraStyles={{ height: '20px', marginLeft: '30px', marginTop: '10px', width: '50px' }} />}
                            {loading && <p className={styles.season}>{props.season}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;