import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import AppContainer from '../../components/AppContainer'
import {useParams} from 'react-router-dom';
import { onGetList } from '../../utility/redux/actions';
import { CATAGORY_LIST } from '../../utility/helpers/ActionTypes';
import CategoryDetails from './CategoryDetails';
import CategoryList from './CategoryList';

export default function Category() {
  const dispatch = useDispatch()
  const {categoryList} = useSelector(({catalog})=> catalog)
  const {loading} = useSelector(({common})=> common)
  const {id} = useParams();
  useEffect(()=>{
    dispatch(onGetList('Category', CATAGORY_LIST))
   },[dispatch])
   const onGetMainComponent =()=>{
    if(id){    
      return <CategoryDetails id={id} />
    } else{
      return <CategoryList loading={loading} categoryList={categoryList}/>
    }
  }
  return (
    <>
    {/* <AppPageMetadata title="Brands"/> */}
    <AppContainer title="Category" type='bottom' fullView>
        {onGetMainComponent()}
    </AppContainer>
    </>
  )
}