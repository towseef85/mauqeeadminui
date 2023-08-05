import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import AppPageMetadata from '../../components/AppPageMetadata'
import AppContainer from '../../components/AppContainer'
import {useParams} from 'react-router-dom';
import BrandList from './BrandList';
import BrandDetails from './BrandDetails';
import { onGetBrandList } from '../../utility/redux/actions';

export default function Brands() {
   const dispatch = useDispatch()
   const {brandList} = useSelector(({brands})=> brands)
   const {loading} = useSelector(({common})=> common)
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
    <AppPageMetadata title="Brands"/>
    <AppContainer title="Brands" type='bottom' fullView>
        {onGetMainComponent()}
    </AppContainer>
    </>
  )
}
