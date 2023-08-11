import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import AppContainer from '../../components/AppContainer'
import {useParams} from 'react-router-dom';
import BrandList from './BrandList';
import BrandDetails from './BrandDetails';
import { onGetBrandList } from '../../utility/redux/actions';
import { useJWTAuth } from '../../utility/AppContextProvider/AuthContextProvider';

export default function Brands() {
   const dispatch = useDispatch()
   const { isLoading } = useJWTAuth();
   const {brandList} = useSelector(({catalog})=> catalog)
   const {loading} = useSelector(({common})=> common)
   console.log("loding", loading, isLoading)
   const {id} = useParams();
   useEffect(()=>{
    dispatch(onGetBrandList())
   },[dispatch])
   const onGetMainComponent =()=>{
    if(id){    
      return <BrandDetails id={id} />
    } else{
      return <BrandList loading={loading} brandList={brandList}/>
    }
  }
  return (
    <>
    {/* <AppPageMetadata title="Brands"/> */}
    <AppContainer title="Brands" type='bottom' fullView>
        {onGetMainComponent()}
    </AppContainer>
    </>
  )
}
