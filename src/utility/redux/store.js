import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const store = createStore(
      reducers(),
      initialState,
      composeEnhancers(applyMiddleware(...middlewares)),
    );
    return store;
}