import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../../navigation/navigationitems/NavigationItems'
import Hamburger from '../../UI/Hamburger/Hamburger'
const toolbar = (props)=>{
    return (
   <header className={classes.Toolbar}>
        <Hamburger clicked = {()=>{props.clicked(true)}}/>
        <div className={classes.Logo}>
        <Logo/> 
        </div>
        <nav className={classes.desktopOnly}>
            <NavigationItems/>
        </nav>

   </header>


    );
}

export default toolbar;