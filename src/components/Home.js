import classes from './Home.module.css';
import SinglePlace from "./SinglePlace";
const DUMMY_DATA=[{
    id:'p1',
    src:'../images/bali.jpg' ,
    place: 'Abiansemal, Indonesia',
    distance: '5,807 km',
    price: '28,751 night'
},
{
    id:'p2',
    src:"../images/indo.jpg" ,
    place: 'Abiansemal, Indonesia',
    distance: '5,807 km',
    price: '95,836 night' 
},
{
    id:'p3',
    src:"../images/selat.jpg" ,
    place: 'Selat, Indonesia',
    distance: '5,807 km',
    price: '18,636 night' 
},

]

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