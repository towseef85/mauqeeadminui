import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/common/AppLayout';
import HomePage from './pages/home';
import { routesList } from './utility/helpers/RouterList';

export default function Router() {
  return (
    <Routes>
        <Route element={<AppLayout/>}>
           <Route index element={<HomePage/>}/>
            {
              routesList.map(path=>{     
                 return <Route  key={path.id} path={path.routePath} element={path.component}/>
              
            })
          }
          
            

        </Route>
    </Routes>
  )
}
