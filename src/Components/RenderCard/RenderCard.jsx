import React from 'react';
import Card from '../Cards/index';
import hus1 from "../../Images/hus1.jpg";
import styles from './style.module.css';

const RenderCard = (props) => {
  return (
    <div className={styles.cardBox}>
        <Card 
          cardImage={hus1}
          title="philip, Britain"
          rating="2.33"
          location="2,333 Kilometers away"
          date="jan9-13"
          price="$111.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="ronaldo, spain"
          rating="2.33"
          location="4,122 Kilometers away"
          date="dec1-13"
          price="$212.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="sahade, masxo"
          rating="2.33"
          location="1,222 Kilometers away"
          date="may12-23"
          price="$132.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="asreo, menero"
          rating="2.33"
          location="2,354 Kilometers away"
          date="jan9-13"
          price="$321.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="asese, morroco"
          rating="2.33"
          location="2,122 Kilometers"
          date="apr12-13"
          price="$432.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="wesborg, garmany"
          rating="2.33"
          location="3,756 Kilometers away"
          date="feb-mar13"
          price="$222.00"
          season="night"
        />
          <Card 
          cardImage={hus1}
          title="philip, Britain"
          rating="2.33"
          location="2,333 Kilometers away"
          date="jan9-13"
          price="$111.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="ronaldo, spain"
          rating="2.33"
          location="4,122 Kilometers away"
          date="dec1-13"
          price="$212.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="sahade, masxo"
          rating="2.33"
          location="1,222 Kilometers away"
          date="may12-23"
          price="$132.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="asreo, menero"
          rating="2.33"
          location="2,354 Kilometers away"
          date="jan9-13"
          price="$321.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="asese, morroco"
          rating="2.33"
          location="2,122 Kilometers"
          date="apr12-13"
          price="$432.00"
          season="night"
        />
         <Card 
          cardImage={hus1}
          title="wesborg, garmany"
          rating="2.33"
          location="3,756 Kilometers away"
          date="feb-mar13"
          price="$222.00"
          season="night"
        />
    </div>
  )
}

export default RenderCard;