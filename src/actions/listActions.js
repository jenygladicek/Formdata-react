import {LIST_STATE} from "./action-types";

export const listActions = (list) => {
  return {
    type: LIST_STATE,
    payload: list
  };
}