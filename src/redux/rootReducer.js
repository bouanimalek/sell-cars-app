import { combineReducers } from "redux";
import carReducer from './car/carReducer'
import userReducer from './user/userReducer'



const rootReducer = combineReducers({
    car: carReducer,
    user: userReducer
})
export default rootReducer