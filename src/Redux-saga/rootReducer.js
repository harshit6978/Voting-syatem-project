import { combineReducers } from "redux";
import Ereducer  from "./Admin/Reducer/Election/Reducer";
import PReducer from "./Admin/Reducer/Party/Reducer"
import userReducer from "./Admin/Reducer/User/Reducer"
import CReducer from "./Admin/Connection/Reducer";


const rootReducer = combineReducers({
    Ereducer,
    PReducer,
    userReducer,
    CReducer,
});

export default rootReducer;