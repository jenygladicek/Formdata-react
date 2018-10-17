import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from "./../config/Routes";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return(
          <Routes/>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
