
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, SHOW_MESSAGE } from "../../helpers/ActionTypes";
import httpApi from "../../helpers/api";

export const onGetList=(controller, type)=>{
    return(dispatch)=>{
        dispatch({type: FETCH_START});
        httpApi.get(controller).then((data)=>{
            if(data.status === 200){
                dispatch({type:FETCH_SUCCESS})
                dispatch({type:type, payload:data.data})
            }
            else{
                dispatch({type:FETCH_ERROR, payload:"Something went wrong"})
            }
        }).catch((err)=>{
            dispatch({type:FETCH_ERROR, payload:err.message})
        })
    }
}

export const onPost=(controller,newValues, message)=>{
    return (dispatch) => {
        dispatch({type: FETCH_START});
        httpApi.post(controller,newValues)
          .then((data) => {
            if (data.status === 200) {
              dispatch({type: FETCH_SUCCESS});
              dispatch({
                type: SHOW_MESSAGE,
                payload: message,
              });
            } else {
              dispatch({
                type: FETCH_ERROR,
                payload: "Something went wrong",
              });
            }
          })
          .catch((error) => {
            dispatch({type: FETCH_ERROR, payload: error.message});
          });
      };
}

export const onEdit=(controller,newValues, message)=>{
    return (dispatch) => {
      dispatch({type: FETCH_START});
      httpApi.put(`${controller}/${newValues.id}`,newValues)
        .then((data) => {
          if (data.status === 200) {
            dispatch({type: FETCH_SUCCESS});
            dispatch({
              type: SHOW_MESSAGE,
              payload: message,
            });
          } else {
            dispatch({
              type: FETCH_ERROR,
              payload: "Something went wrong",
            });
          }
        })
        .catch((error) => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    };
  }
  
  export const onDelete=(controller, id, message)=>{
    return(dispatch)=>{
      dispatch({type: FETCH_START});
        httpApi.delete(`${controller}/${id}`)
        .then((data)=>{
          if(data.status === 200){
            dispatch({type:FETCH_SUCCESS});
            dispatch({
              type:SHOW_MESSAGE,
              payload:message
            });
          }else{
            dispatch({
              type: FETCH_ERROR,
              payload: "Something went wrong",
            });
          }
        })
        .catch((error) => {
          dispatch({type: FETCH_ERROR, payload: error.message});
        });
    }
  }