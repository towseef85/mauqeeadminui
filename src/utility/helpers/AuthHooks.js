import {getUserFromAuth} from './AuthHelper'
import { useJWTAuth, useJWTAuthActions } from '../AppContextProvider/AuthContextProvider'

export const useAuthUser = () => {
    const { user, isAuthenticated, isLoading } = useJWTAuth();
    return {
      isLoading,
      isAuthenticated,
      user: getUserFromAuth(user),
    };
  };
  
  export const useAuthMethod = () => {
    const { signInUser, logout } = useJWTAuthActions();
    return {
      signInUser,
      logout
    };
  };