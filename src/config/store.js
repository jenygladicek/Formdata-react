import {combineReducers , createStore} from "redux";

import list from "./../reducers/listReducers";
import singleItem from "./../reducers/singleItemReducers";
import description from "./../reducers/descriptionReducers";
import counterReducer from "./../reducers/counterReducer";

export default createStore(combineReducers({
    list,
    singleItem,
    description,
    counterReducer
}));