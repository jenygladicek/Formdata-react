import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch , Redirect} from "react-router-dom";

import List from "./../containers/list";
import SingleItem from "./../containers/singleItem";
import Description from "./../containers/description";
import LandingPage from "./../containers/LandingPage";

const PageNotFound = () => (<div>404 Page Not Found</div>);
class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/list" exact component={List} />
                    <Route path="/singleItem" exact component={SingleItem} />
                    <Route path="/description:name" exact component={Description} />
                    <Route component={PageNotFound} />
                    <Redirect to="/" /> {/* default place*/}
                </Switch>
            </Router>
        );
    }
}

export default Routes;