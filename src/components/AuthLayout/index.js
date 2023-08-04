import React from 'react'
import AppLoader from '../common/AppLoader'
import { useAuthUser } from '../../utility/helpers/AuthHooks'

export default function AuthLayout({children}) {
    const {isLoading} = useAuthUser()
  return isLoading ? <AppLoader/> : <>{children}</>
}
