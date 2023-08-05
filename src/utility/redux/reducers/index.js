import {combineReducers} from 'redux';
import  commonReducer from './Common'
import brandReducer from './Brands';

const reducers = () => combineReducers({
    common:commonReducer,
    brands:brandReducer
})

export default reducers;