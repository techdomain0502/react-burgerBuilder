import React, { Component } from 'react';
import Aux from '../../../hoc/aux/Aux';
import Button from '../../UI/Button/Button'

class Ordersummary extends Component {
 
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.ingredients!==this.props.ingredients
  }

  componentDidUpdate(){
    console.log('[OrderSummary] component did update')
  }


  render(){
    const ingredientSummary = this.props.ingredients;
    const arr = Object.keys(ingredientSummary)
    .map(value=>{
    return  <li key={value}>{<span style={{textTransform:'capitalize'}}>{value}</span>}:{ingredientSummary[value]}</li>
    })
    return (
<Aux>
      <h1>Your Order</h1>
      <ul>
          {arr}
      </ul>
  <p>Total Price:${this.props.totalPrice.toFixed(2)}</p>
      <p>Do you want to checkout ?</p>
      <Button clicked={()=>this.props.cancelFlow(false)} btnType="Danger">CANCEL</Button>
      <Button clicked={this.props.continueFlow} btnType="Success">CONFIRM</Button>
    </Aux>
    );
  }
 
  
}

export default Ordersummary;
