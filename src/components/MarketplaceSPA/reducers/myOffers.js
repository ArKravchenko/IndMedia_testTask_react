
import {store} from "../config/configureStore.js";

import {
  SET_MY_OFFERS_DATA,
} from "../actions/myOffers.js"




const INITIAL_STATE= {
  data: "initial data",
}


export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_MY_OFFERS_DATA:
      return {
        ...state,
        data: action.data,
      };
  }
  return state;
};



