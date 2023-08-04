import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import reducers from './reducers';

export default function configureStore(initialState) {
    const store = createStore(
      reducers(),
      initialState
    );
    return store;
}