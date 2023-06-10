import { combineReducers, createStore } from "redux";
import doctorsReducer from "./reducers/DoctorsReducer";
import balanceReducer from "./reducers/BalanceReducer";
const store = createStore(combineReducers({docReducer:doctorsReducer, balanceRed:balanceReducer}))


export default store