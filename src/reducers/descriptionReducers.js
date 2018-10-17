import {DESCRIPTION_STATE} from "./../actions/action-types";

const initialState = {
    obj: {}
  };
export default (state = initialState, action) => {
    switch(action.type) {
        case DESCRIPTION_STATE:
            return {
                obj : action.payload
            }
        default:
            return state
    }
}
