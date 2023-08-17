import {combineReducers} from 'redux';
import  commonReducer from './Common'
import catalogReducer from './Catalog';
// import brandReducer from './Brands';

const reducers = (history) => combineReducers({
    common:commonReducer,
    catalog:catalogReducer
})

export default reducers;