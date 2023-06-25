import { combineReducers } from "redux";
import DoctorsReducer from "./DoctorsReducer";
import BalanceReducer from "./BalanceReducer";


const root = combineReducers({docReducer:DoctorsReducer, balanceReducer: BalanceReducer})

export default root