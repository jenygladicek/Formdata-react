import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from "./../components/Logo"
import NavMenu from "./../components/NavMenu";
import NavItem from "./../components/NavItem";

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    submitLanding = () =>{
        this.props.history.push("/list");
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
            <div className="jumbotron"><h1>Landing page</h1>
                <button className="btn btn-primary" onClick={this.submitLanding}>Submit</button>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
