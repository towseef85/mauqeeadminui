import { BRAND_LIST, CATAGORY_LIST, PRODUCTATTRIBUTE_LIST, TAXCATEGORY_LIST } from "../../helpers/ActionTypes";

const INIT_STATE = {
    brandList:[],
    categoryList:[],
    taxCategoryList:[],
    productAttributeList:[]
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
        case PRODUCTATTRIBUTE_LIST:
            return{
                ...state, productAttributeList:action.payload
            }
        default:
            return state;
        
    }
  }

  export default catalogReducer;