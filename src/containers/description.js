import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from "./../components/Logo"
import NavMenu from "./../components/NavMenu";
import NavItem from "./../components/NavItem";
import "./../styles/style.css";

class Description extends Component {
    increment = () =>{
      this.props.increment()
    }
    decrement = () => {
       this.props.decrement()
    }
    render() {
        return(
        <div>           
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <Logo/>
                <NavMenu>
                    <NavItem path="/list">List of Items</NavItem>
                    <NavItem path="/singleItem">Add New Item</NavItem>
                </NavMenu>
            </div>
        </nav> 
        <div>
        <div className="col-lg-12">{this.props.myDesc}</div>
        </div>
        <div>
            Counter Sample
        <button className="button" onClick={this.increment}>+</button>
        <span>{this.props.count}</span>
        <button className="button" onClick={this.decrement}>-</button>
        </div>
    </div>
          
        )
    }
}

const mapStateToProps = state => ({
 count : state.counterReducer.count,
 myDesc : state.description.obj.newDescription
});

const mapDispatchToProps = dispatch => ({
   increment : () =>{
        dispatch({ type: 'INCREMENT' })
    },
    decrement : () =>{
        dispatch({ type: 'DECREMENT' })
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Description);
