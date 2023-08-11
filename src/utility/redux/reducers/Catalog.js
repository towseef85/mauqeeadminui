import { BRAND_LIST, CATAGORY_LIST, TAXCATEGORY_LIST } from "../../helpers/ActionTypes";

const INIT_STATE = {
    brandList:[],
    categoryList:[],
    taxCategoryList:[]
  };

  const catalogReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case BRAND_LIST: 
        return{
           ...state, brandList:action.payload
        }
        case CATAGORY_LIST:
            return{
                ...state, categoryList:action.payload
            }
        case TAXCATEGORY_LIST:
            return{
                ...state, taxCategoryList:action.payload
            }
        default:
            return state;
        
    }
  }

  export default catalogReducer;