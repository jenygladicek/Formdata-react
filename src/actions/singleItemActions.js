import {SINGLEITEM_STATE} from "./action-types";

export function singleItemActions(item) {
  return {
    type: SINGLEITEM_STATE,
    item
  };
}