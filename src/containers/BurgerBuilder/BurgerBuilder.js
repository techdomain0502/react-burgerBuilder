import React, { Component } from 'react';
import Aux from '../../hoc/aux/Aux.js';

import Burger from '../../components/burger/Burger.js';
import BurgerBuildControls from '../../components/burger/buildcontrols/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js'
import Ordersummary from '../../components/burger/ordersummary/OrderSummary.js';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.3,
  meat: 1,
};
class BurgerBuilder extends Component {
  
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 4,
    updatePurchaseState:false,
    modalShown:false
  };

  disabledInfo = {salad:true,meat:true,bacon:true,cheese:true};

  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let updatedCount = oldCount + 1;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  deleteIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    if (oldCount === 0) return;
    let updatedCount = oldCount - 1;
    let updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - priceSubtraction;
    this.setState({
      ingredients:updatedIngredients,
      totalPrice:updatedPrice
    })
    this.updatePurchaseState(updatedIngredients);
  };
    
  updatePurchaseState(ingredients){
    this.disabledInfo = {...ingredients}
    let newpurchasestate = false;
    Object.keys(this.disabledInfo).map(
      value=>{
        let currentDisabledvalue = this.disabledInfo[value]<=0;
    //    console.log(value,currentDisabledvalue)

         this.disabledInfo[value] = currentDisabledvalue;
        newpurchasestate = newpurchasestate || !currentDisabledvalue;
         return this.disabledInfo[value];
      } 
    )
  //  console.log(newpurchasestate);
    this.setState({
      updatePurchaseState: newpurchasestate
    })
  //  console.log(this.disabledInfo);
   }

  toggleModal=(flag)=>{
      this.setState({
        modalShown:flag
      })
  }


  continueFlow = ()=>{
    alert('you continue!!');
  }


  render() {
    return (
      <Aux>
        <Modal showstate = {this.state.modalShown} modelController={(flag)=>this.toggleModal(flag)}>
          <Ordersummary 
          continueFlow = {this.continueFlow}
          cancelFlow = {(flag)=>this.toggleModal(flag)}
          totalPrice = {this.state.totalPrice}
          ingredients ={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerBuildControls
        modelController = {(flag)=>this.toggleModal(flag)}
        orderBtnDisabledInfo = {this.state.updatePurchaseState}
        disabledInfo = {this.disabledInfo}
        totalPrice = {this.state.totalPrice}
        ingredientAdded = {this.addIngredientHandler} 
        ingredientDeleted = {this.deleteIngredientHandler}  />
      </Aux>
    );
  }
}

export default BurgerBuilder;
