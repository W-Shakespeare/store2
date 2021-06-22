import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authorizationReducer from './authorization/authorization.reducer';
import processorReducer from './processors/processors.reducer';

const reducers = combineReducers({
    processorsList: processorReducer,
    authorization: authorizationReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
