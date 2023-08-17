import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector, connect} from 'react-redux';
import AppContainer from '../../components/AppContainer'
import {useParams} from 'react-router-dom';
import BrandList from './BrandList';
import BrandDetails from './BrandDetails';
import { onGetBrandList, onGetListWithState } from '../../utility/redux/actions';
import { useJWTAuth } from '../../utility/AppContextProvider/AuthContextProvider';
import { BRAND_LIST } from '../../utility/helpers/ActionTypes';

function Brands() {
   const dispatch = useDispatch()
   const { isLoading } = useJWTAuth();
   const {brandList} = useSelector(({catalog})=> catalog)
   const [brandData, setBrandData] = useState(null)
   const {loading} = useSelector(({common})=> common)
   console.log("loding", loading, isLoading)
   const {id} = useParams();
   useEffect(()=>{
     dispatch(onGetBrandList())
    //dispatch(onGetListWithState('Brand',BRAND_LIST,setBrandData))
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

export default connect()(Brands)
