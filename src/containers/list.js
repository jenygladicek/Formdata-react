import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

import Logo from "./../components/Logo"
import NavMenu from "./../components/NavMenu";
import NavItem from "./../components/NavItem";
import BackGroundApp from "./../components/BackGroundApp";

//var data =require("./../hardCodedData").data; 

class List extends Component {

    constructor(props) {
        super(props);
       /* this.state = {
            listItems : []
        }*/
    }
    description = (singleItem) =>{
        this.props.history.push("/description:"+singleItem.name);
        this.props.dispatch({ type: 'DESCRIPTION_STATE', payload : singleItem });
    }
    /*componentDidMount() {
        this.setState({listItems : data});
    }*/

    render() {
        var createRowItems = (rowItem) =>{
            return(
                <tr key={rowItem.id}>
                    <td key={rowItem.newName}>{rowItem.newName}</td>
                    <td key={rowItem.newAge}>{rowItem.newAge}</td>
                    <td key={rowItem.newDept}>{rowItem.newDept}</td>
                    <td key={rowItem.newDescription}><button onClick={() => this.description(rowItem)}>Description</button></td>
                </tr>
            )
        }
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
          <div className="container">
              <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Dept</th>  
                        <th>Description</th>  
                    </tr>                
                </thead>
                <tbody>
                    {this.props.listItems.map(createRowItems,this)}
                </tbody>
              </table>
            </div>
            <div className="container"><Link to="/singleItem" className="btn btn-primary">Add New Item</Link></div>
            <br/>
            <BackGroundApp />
          </div>
        )
    }
}
const mapStateToProps = state => ({
    listItems : state.singleItem
});
export default connect(mapStateToProps)(List);
