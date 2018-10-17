import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from "./../components/Logo"
import NavMenu from "./../components/NavMenu";
import NavItem from "./../components/NavItem";
import ListForm from "./../components/listForm";
class SingleItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

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
          <div><h1>Add Item</h1><ListForm /></div>
        </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
