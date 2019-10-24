import {
  SET_BRAND,
  SET_COLLECTION,
  SET_WATCH,
  SET_WATCH_PHOTOS,
  SET_WATCH_FORM_DATA,
} from "../actions/sellWatch.js"





const INITIAL_STATE= {
  brand:"",
  collection:"",
  reference:"",
  watchName:"",
  watchPhotos:[],

  condition:"0",
  currency:"USD",
  price:"",
  boxIncluded:false,
  papersIncluded:false,
  yearInPapers:"2014",
  additionalItems:"",
  description:"",

}


export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BRAND:
      return (
        Object.assign({}, state, {
        brand: action.brand,
        })
      );


    case SET_COLLECTION:
        return (
          Object.assign({}, state, {
            brand: action.brand,
            collection: action.collection,
        })
        );


    case SET_WATCH:
        return (
          Object.assign({}, state, {
            brand: action.data.brand,
            collection: action.data.collection,
            reference: action.data.reference,
            watchName: action.data.watchName,
        })
        );

    case SET_WATCH_PHOTOS:
      return Object.assign({}, state, {
        watchPhotos: action.data,
      });

    case SET_WATCH_FORM_DATA:
      return Object.assign({}, state,
         action.data
      );


    default:
      return state;


  }
};



