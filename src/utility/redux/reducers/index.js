import {combineReducers} from 'redux';
import  commonReducer from './Common'

const reducers = () => combineReducers({
    common:commonReducer
})

export default reducers;