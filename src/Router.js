import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/common/AppLayout';
import HomePage from './pages/home';
import Brands from './pages/brands';
import AddBrand from './pages/brands/AddBrand';

export default function Router() {
  return (
    <Routes>
        <Route element={<AppLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='catalog/brands' element={<Brands/>}/>
            {["catalog/brands/create","catalog/brands/create/:id"].map(path=>(
              <Route key="Brands" path={path} element={<AddBrand/>}/>
            ))}
            

        </Route>
    </Routes>
  )
}
