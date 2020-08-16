import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {

  shouldComponentUpdate(nextProps,nextState){
      return nextProps.showstate!==this.props.showstate
  }
  componentDidUpdate(){
    console.log('[Modal.js] component did update')
  }

  render() {
    let isShown = this.props.showstate;
    return (
      <Aux>
        <Backdrop show={isShown} clicked={() => this.props.modelController(false)} />
        <div
          className={classes.Modal}
          style={{
            transform: isShown ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: isShown ? 1 : 0,
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
