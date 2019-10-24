import { createStore, combineReducers, } from 'redux';



import reducers from '../reducers';



function configureStore() {

  let store = createStore(combineReducers({
    ...reducers
  })
  );

  return store
};

export const store = configureStore();