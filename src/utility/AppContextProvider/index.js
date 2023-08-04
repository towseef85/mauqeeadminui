import React from 'react'
import LocaleContextProvider from './LocaleContextProvider'
import LayoutContextProvider from './LayoutContextProvider'

export default function AppContextProvider({children}) {
  return (
    <LocaleContextProvider>
        <LayoutContextProvider>
            {children}
        </LayoutContextProvider>
    </LocaleContextProvider>
  )
}
