import classes from './Card.module.css';

const Card = (props) => {
    return (
    <div className={classes["card-wrapper"]}>
        <div className={classes["card-image"]}><img src={props.image} alt={props.alt}/></div>
        <div className={classes.text}>
            <h2 className={classes["card-header"]}>
                {props.title}    
            </h2>
            <p className={classes.description}>
                {props.description}
            </p>
        </div>
    </div>);
};

export default Card;