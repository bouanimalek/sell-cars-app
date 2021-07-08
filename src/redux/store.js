import { createStore, applyMiddleware } from 'redux';
import carReducer from './car/carReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(carReducer, composeWithDevTools(applyMiddleware(logger)))

export default store