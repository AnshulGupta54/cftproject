import airbnb from '../../assests/Airbnb-Logo.jpg';
import classes from './MainNavigation.module.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import Profile from '../Profile';

const MainNavigation=()=>{

    const [profile,setProfile]= useState(false);

    const profileHandler=()=>{
        setProfile((prevState)=>!prevState);
    }

    return <header className={classes.header}>
        <img className={classes.header_icon} src={airbnb} />

        <div className={classes.header_center}>
            <input type="text" />
            <SearchIcon />
        </div>

        <div className={classes.header_right}>
            <p>Become a host</p>
            <LanguageIcon />
            
            <button onClick={profileHandler}>
            <ReorderIcon />
            <Avatar />
            </button>
            
        </div>
        {profile && <Profile />}
    </header>

}
export default MainNavigation;