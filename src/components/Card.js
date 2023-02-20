import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return (
    <div className={classes["card-wrapper"]}>
        <div className={classes["card-image"]}><img src={qrCode} /></div>
        <div className={classes.text}>
            <h2 className={classes["card-header"]}>
                {props.title}    
            </h2>
            <p className={classes.description}>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
    </div>);
};

export default Card;