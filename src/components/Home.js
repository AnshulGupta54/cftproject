import classes from './Home.module.css';
import SinglePlace from "./SinglePlace";
import { DUMMY_DATA } from './Dummy';

const Home=()=>{
    const placesList=DUMMY_DATA.map((location)=> <SinglePlace 
    key={location.id}
    src={location.src} 
    place={location.place}
    distance={location.distance}
    price={location.price} />)
    return <div className={classes.places}>
        {placesList}
    </div>
}
export default Home;