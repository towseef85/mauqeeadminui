import React from 'react'
import { useAuthUser } from '../../utility/helpers/AuthHooks'
import SignIn from '../../pages/Auth'
import Router from '../../Router'
import AppLoader from '../common/AppLoader'


 function AuthRoute(props) {
    const {isAuthenticated} = useAuthUser()

  return (
    <React.Suspense fallback={<AppLoader {...props.loadingProps}/>}>
    {isAuthenticated ? 
        <Router/>
        :
        <SignIn/>
    }
    </React.Suspense>
  )
}
export default React.memo(AuthRoute)