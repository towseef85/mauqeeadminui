import React from 'react'
import { useAuthUser } from '../../utility/helpers/AuthHooks'
import SignIn from '../../pages/Auth'
import Router from '../../Router'


export default function AuthRoute() {
    const {isAuthenticated} = useAuthUser()

  return (
    <>
    {isAuthenticated ? 
        <Router/>
        :
        <SignIn/>
    }
    </>
  )
}
