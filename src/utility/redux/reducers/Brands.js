import { BRAND_LIST } from "../../helpers/ActionTypes";

const INIT_STATE = {
    brandList:[]
  };

  const brandReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case BRAND_LIST: 
        return{
           ...state, brandList:action.payload
        }
        default:
            return state;
        
    }
  }

  export default brandReducer;