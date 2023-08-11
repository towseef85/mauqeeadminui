import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import AppContainer from '../../components/AppContainer'
import {useParams,useLocation } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import AddProduct from './AddProduct';

export default function Product() {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const {id} = useParams();
    console.log("path",pathname.includes('/create'))
    //console.log("id",location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length))
    const onGetMainComponent =()=>{
     if(pathname.includes('/create')) return <AddProduct/>
     if(id) return <ProductDetails id={id} />
     else{
       return <ProductList/>
     }
   }
   return (
     <>
     {/* <AppPageMetadata title="Brands"/> */}
     <AppContainer title="Products" type='bottom' fullView>
         {onGetMainComponent()}
     </AppContainer>
     </>
   )
 }
