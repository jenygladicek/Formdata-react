import {LIST_STATE} from "./../actions/action-types";

const listReducers = (state = {}, action) => {
    switch(action.type) {
        case LIST_STATE:
            return action.payload;
        default:
            return state;
    }
};
export default listReducers;
