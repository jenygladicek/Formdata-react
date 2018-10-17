import {DESCRIPTION_STATE} from "./action-types";

export const descriptionActions = (item) => {
  return {
    type: DESCRIPTION_STATE,
    payload: item
  };
}