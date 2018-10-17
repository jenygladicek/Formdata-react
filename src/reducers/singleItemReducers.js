import {SINGLEITEM_STATE} from "./../actions/action-types";

export default (state = [], action) => {
    switch(action.type) {
        case SINGLEITEM_STATE:{
            return [...state, Object.assign({}, action.item)];
        }
        default:
            return state;
    }
}
