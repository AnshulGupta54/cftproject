import { Fragment } from 'react';
import classes from './Footer.module.css';
import MobileFooter from './MobileFooter';
const Footer=()=>{
    return <Fragment>
     <div className={classes.footer}>
        <p>© 2022 Airbnb, Inc. ·Privacy·Terms ·Sitemap ·Company details ·Destinations</p>
    </div>
    <div className={classes.mobilefooter}>
        <MobileFooter />
    </div>
    </Fragment>

}

export default Footer;