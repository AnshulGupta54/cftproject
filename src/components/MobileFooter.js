import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PortraitIcon from '@mui/icons-material/Portrait';
import classes from './MobileFooter.module.css';
function MobileFooter() {
  return (
    <div className={classes.mobile}>
        <div>
            <SearchIcon />
            <p>
                Explore
            </p>
        </div>
        <div>
            <FavoriteBorderIcon />
            <p>
                Wishlists
            </p>
        </div>
        <div>
            <PortraitIcon />
            <p>
                Login
            </p>
        </div>
    </div>
  )
}

export default MobileFooter;