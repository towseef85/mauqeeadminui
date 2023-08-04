import React, {createContext, useContext, useEffect, useState} from 'react';
import { 
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,


 } from "../helpers/ActionTypes";
 import {useDispatch} from 'react-redux';
 import httpApi,{setAuthToken} from "../helpers/api";

const AuthContext = createContext();
const AuthActionsContext = createContext();

export const useJWTAuth = () => useContext(AuthContext);

export const useJWTAuthActions = () => useContext(AuthActionsContext);

const AuthContextProvider=({children})=>{
    const [authData, setJWTAuthData] = useState({
        user: null,
        isAuthenticated: false,
        isLoading: true,
      });
      const dispatch = useDispatch();
      useEffect(() => {
        const getAuthUser = () => {
          const token = localStorage.getItem('token_ecom');
    
          if (!token) {
            setJWTAuthData({
              user: undefined,
              isLoading: false,
              isAuthenticated: false,
            });
            return;
          }
          setAuthToken(token);
       
          httpApi
            .get('Users/CurrentUser')
            .then(({data}) =>
              setJWTAuthData({
                user: data,
                isLoading: false,
                isAuthenticated: true,
              })
            )
            .catch(() =>
              setJWTAuthData({
                user: undefined,
                isLoading: false,
                isAuthenticated: false,
              }),
            );
        };
    
        getAuthUser();
      }, []);
    
      const signInUser = async ({username, password}) => {
        dispatch({type: FETCH_START});
        try {
          const {data} = await httpApi.post('Users/Login', {username, password});
          
          //console.log("login data", data)
          localStorage.setItem('token_ecom', data.token);
          setAuthToken(data.token);
         // const res = await jwtAxios.get('/auth');
          setJWTAuthData({user: data, isAuthenticated: true, isLoading: false});
          dispatch({type: FETCH_SUCCESS});
        } catch (error) {
          setJWTAuthData({
            ...authData,
            isAuthenticated: false,
            isLoading: false,
          });
          dispatch({type: FETCH_ERROR, payload: error.message});
        }
      };

      const logout = async () => {
        localStorage.removeItem('token_ecom');
        setAuthToken();
        setJWTAuthData({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        });
      };

      return (
        <AuthContext.Provider
          value={{
            ...authData,
    
          }}>
          <AuthActionsContext.Provider
            value={{
              signInUser,
              logout,
    
            }}>
            {children}
          </AuthActionsContext.Provider>
        </AuthContext.Provider>
      );
    
}


export default AuthContextProvider;