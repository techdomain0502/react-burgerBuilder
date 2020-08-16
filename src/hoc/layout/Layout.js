import React, { Component } from 'react';
import Aux from '../aux/Aux.js';
import classes from './Layout.css';
import Toolbar from '../../components/navigation/toolbar/Toolbar';
import SideDrawer from '../../components/navigation/sidedrawer/Sidedrawer';
class Layout extends Component {

  state={
   showSideDrawer :false
  }

  SideDrawerToggleHandler = (show)=>{
       //  console.log('clicked claled',show);
         this.setState({showSideDrawer:show})
     
  }


  render() {
    return (
      <Aux>
        <Toolbar clicked={(flag)=>this.SideDrawerToggleHandler(flag)} />
        <SideDrawer show={this.state.showSideDrawer} clicked = {(flag)=>this.SideDrawerToggleHandler(flag)}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
