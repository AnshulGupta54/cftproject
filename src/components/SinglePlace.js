import Card from "./UI/Card";
import classes from './SinglePlace.module.css';

const SinglePlace=(props)=>{
    return <Card>
        <div className={classes.place}>
            <img src={props.src} />
        </div>
        <div>
            {props.place}
        </div>
        <div>
            {props.distance}    
        </div>
        <div>
            {props.price}
        </div>
    </Card>
}

export default SinglePlace;