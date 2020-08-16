import React from 'react'
import classes from './Sidedrawer.css'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../navigationitems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/aux/Aux'
const sideDrawer  = (props)=>{
   // console.log('show=',props.show);
    let activeClasses = [classes.Sidedrawer,classes.Close]
    if(props.show){
        activeClasses = [classes.Sidedrawer,classes.Open]
    }
    //console.log(activeClasses);
    return (
        <Aux>
        <Backdrop show={props.show} clicked={()=>{props.clicked(false)}} />
        <div className={activeClasses.join(' ')}>
             <button onClick={()=>{props.clicked(false)}} className={classes.CloseBtn}>Close X</button>
        <div className={classes.Logo}>
          <Logo/>
          </div>  
          <nav>
              <NavigationItems/>
          </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;