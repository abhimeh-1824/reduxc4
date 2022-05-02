import {SHOW_DATA,ADD_DATA} from "./actions"

const init = {
  items:[]
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case SHOW_DATA:
      console.log(payload,"payload")
      return {
        ...store,items:payload
      }
    case ADD_DATA:
    default:
      return store;
  }
};
