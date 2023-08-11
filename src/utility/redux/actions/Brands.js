import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, BRAND_LIST, SHOW_MESSAGE } from "../../helpers/ActionTypes";
import httpApi from "../../helpers/api";

export const onGetBrandList=()=>{
    return(dispatch)=>{
        dispatch({type: FETCH_START});
        httpApi.get('Brand').then((data)=>{
          debugger;
            if(data.status === 200){
                dispatch({type:FETCH_SUCCESS})
                dispatch({type:BRAND_LIST, payload:data.data})
            }
            else{
                dispatch({type:FETCH_ERROR, payload:"Something went wrong"})
            }
        }).catch((err)=>{
            dispatch({type:FETCH_ERROR, payload:err.message})
        })
    }
}

export const onPostBrands=(newValues)=>{
    return (dispatch) => {
        dispatch({type: FETCH_START});
        httpApi.post('Brand',newValues)
          .then((data) => {
            if (data.status === 200) {
              dispatch({type: FETCH_SUCCESS});
              dispatch({
                type: SHOW_MESSAGE,
                payload: "Brand Created",
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

export const onGetSingleBrand=(id, setstate, setFileList,setShowInHomePage)=>{
  return(dispatch)=>{
    dispatch({type: FETCH_START});
      httpApi.get(`Brand/${id}`)
      .then((data)=>{
        if(data.status === 200){
          setstate(data.data)
          setFileList(data.data.imageData)
          setShowInHomePage(data.data.showOnHomepage)
          dispatch({type:FETCH_SUCCESS});
          dispatch({
            type:SHOW_MESSAGE,
            payload:"Fetch Successful"
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

export const onEditBrand=(newValues)=>{
  return (dispatch) => {
    dispatch({type: FETCH_START});
    httpApi.put(`Brand/${newValues.id}`,newValues)
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: SHOW_MESSAGE,
            payload: "Brand Updated",
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

export const onDeleteBrand=(id)=>{
  return(dispatch)=>{
    dispatch({type: FETCH_START});
      httpApi.delete(`Brand/${id}`)
      .then((data)=>{
        if(data.status === 200){
          dispatch(onGetBrandList())
          dispatch({type:FETCH_SUCCESS});
          dispatch({
            type:SHOW_MESSAGE,
            payload:"Deleted Successful"
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



