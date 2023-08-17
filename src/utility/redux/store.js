import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const store = createStore(
      reducers(history),
      initialState,
      composeEnhancers(applyMiddleware(...middlewares)),
    );
    if(module.hot){
      module.hot.accept('./reducers/index.js',()=>{
        const nextRootReducer = require('./reducers')
        store.replaceReducer(nextRootReducer);
      })
    }
    return store;
}