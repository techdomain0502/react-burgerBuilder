import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './buildcontrol/BuildControl.js';
const controls = [
  { label: 'salad', type: 'salad' },
  { label: 'bacon', type: 'bacon' },
  { label: 'cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' },
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Total Price: {props.totalPrice.toFixed(2)}</p>
     {
     // console.log(props.disabledInfo),
     controls.map((value) =>{
       
       return (
        
      <BuildControl
         disabled = {props.disabledInfo[value.label]}
        key={value.label}
        type={value.label}
        label={value.label}
        added={() => props.ingredientAdded(value.type)}
        deleted={() => props.ingredientDeleted(value.type)}
      />
    )})}
    <button disabled = {!props.orderBtnDisabledInfo} onClick={()=>props.modelController(true)} className={classes.OrderButton}>ORDER NOW</button>
  </div>
);

export default buildControls;
