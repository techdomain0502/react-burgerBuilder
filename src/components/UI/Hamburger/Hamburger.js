import React from 'react'
import classes from './Hamburger.css'
const hamburger = (props)=>{
  return(
      <div className={classes.Hamburger} onClick={props.clicked}>
          <div className={classes.stripe}></div>
          <div className={classes.stripe}></div>
          <div className={classes.stripe}></div>
      </div>
  );
}

export default hamburger;