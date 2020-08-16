import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './burger-ingredients/BurgerIngredients';
const burger = (props) => {

   let ingredients = 
   Object.keys(props.ingredients)
   .map(value=>{
     return [...Array(props.ingredients[value])]
     .map((_, i)=>{
       return <BurgerIngredient type={value} key={value+i}/>
     })
   })
   .reduce((arr,ele)=>{
     return arr.concat(ele);
   },[])

    if(ingredients.length===0){
       ingredients = <p>Please add some ingredients</p>
    }

  return (<div className={classes.Burger}>
       <BurgerIngredient type="bread-top"/>
        {  
            ingredients
        } 
       <BurgerIngredient type="bread-bottom"/>
  </div>
  )
};

export default burger;