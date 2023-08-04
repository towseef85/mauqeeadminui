import {   
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS, 
    SHOW_MESSAGE,
    HIDE_MESSAGE
} from "../../helpers/ActionTypes";

    const INIT_STATE = {
        error: '',
        loading: false,
        isAppDrawerOpen: false,
        updatingContent: false,
        displayMessage: '',
      };

      const commonReducer = (state = INIT_STATE, action) => {
        switch (action.type) {
          case FETCH_START: {
            return {...state, error: '', displayMessage: '', loading: true};
          }
          case FETCH_SUCCESS: {
            return {
              ...state,
              error: '',
              displayMessage: '',
              loading: false,
              updatingContent: false,
            };
          }
          case SHOW_MESSAGE: {
            return {
              ...state,
              error: '',
              displayMessage: action.payload,
              loading: false,
              updatingContent: false,
            };
          }
          case FETCH_ERROR: {
            return {
              ...state,
              loading: false,
              error: action.payload,
              displayMessage: '',
              updatingContent: false,
            };
          }
          case HIDE_MESSAGE: {
            return {
              ...state,
              loading: false,
              error: '',
              displayMessage: '',
              updatingContent: false,
            };
          }
          default:
            return state;
        }
      };
      export default commonReducer;