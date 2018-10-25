import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router-dom";

import * as singleItemAction from "./../actions/singleItemActions";

class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newId : '',
            newName : '',
            newAge  :'',
            newDept : '',
            newDescription : ''
        }
    }
    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
    }
    submitForm = e =>{
        e.preventDefault();
        const newObj = this.state;
        this.props.actions.singleItemActions(newObj);
        //this.props.createItem(newObj);    //another way to dispatch action
        alert("Item has been added successfully");
       this.props.history.push("/list");
    }
    render() {
        const {newId ,newName , newAge ,newDept , newDescription } = this.state;     
        return(
            <div className="container">
            <form onSubmit={this.submitForm}>
                <label htmlFor="id">Id :</label>
                <input type="text" className="form-control" id="id" placeholder="Enter id" name="newId" value={newId} onChange={this.onChange}/>
                <br/>
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="newName" value={newName} onChange={this.onChange}/>
                <br/>
                <label htmlFor="age">Age:</label>
                <input type="text" className="form-control" id="age" placeholder="Enter Age" name="newAge" value={newAge} onChange={this.onChange}/>
                <br/>
                <label htmlFor="dept">Dept:</label>
                <input type="text" className="form-control" id="dept" placeholder="Enter Dept" name="newDept" value={newDept} onChange={this.onChange}/>
                <br/>
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" id="description" placeholder="Enter Description" name="newDescription" value={newDescription} onChange={this.onChange}/>
                <br/>
                <button type="submit" className="btn btn-default">Submit</button>
            </form> 
            <div><Link to="/list" className="btn btn-default backBtn">Back</Link></div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions : bindActionCreators(singleItemAction,dispatch),
   // createItem : (item) => dispatch(singleItemAction.singleItemActions(item))  //another way to dispatch action
});
export default withRouter(connect(null, mapDispatchToProps)(ListForm));
