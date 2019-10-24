
import {store} from "../config/configureStore.js";

import {
  SET_OFFICE_PHOTOS,
  SET_FORM_DATA,
} from "../actions/profile.js"




const INITIAL_STATE= {
  formData: {
    companyName: "",
    companyCountry: "US",
    companyStateProvinceRegion: "",
    companyCity: "",
    companyPostalCode:"",
    companyStreet:"",
    companyStreet2:"",
    companyWebSite:"",
    companyOwnerFirstName:"",
    companyOwnerLastName:"",
    companyOwnerPhone:{code:"",phone:""},
    companyOwnerEmail:"",
    companyTradeName:"",
    companyPhone:{code:"",phone:""},
    companyPhoneAdditional:{code:"",phone:""},
    companyWhatsApp:{code:"",phone:""},
    companyTelegramId:"",
    companyViber:{code:"",phone:""},
    companyWeChatId:"",
    companyEmail:"",
    sunday:{from:"day off",to:"day off"},
    monday:{from:"day off",to:"day off"},
    tuesday:{from:"day off",to:"day off"},
    wednesday:{from:"day off",to:"day off"},
    thursday:{from:"day off",to:"day off"},
    friday:{from:"day off",to:"day off"},
    saturday:{from:"day off",to:"day off"},
  },
    officePhotos:[],
}


export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_OFFICE_PHOTOS:
      return {
        ...state,
        officePhotos: action.data,
      };
    case SET_FORM_DATA:
      return Object.assign({}, state,{
        formData: Object.assign({},state.formData,action.data),
        }
      );
    default:
      return state;


  }
};



