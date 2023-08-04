import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import AppPageMetadata from '../../components/AppPageMetadata'
import AppContainer from '../../components/AppContainer'
import {useParams} from 'react-router-dom';
import BrandList from './BrandList';
import BrandDetails from './BrandDetails';

export default function Brands() {
   const dispatch = useDispatch()
   const {id} = useParams();
   const onGetMainComponent =()=>{
    if(id){    
      return <BrandDetails id={id} />
    } else{
      return <BrandList/>
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
