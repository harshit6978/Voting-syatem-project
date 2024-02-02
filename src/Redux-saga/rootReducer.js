import { combineReducers } from "redux";
import Ereducer  from "./Admin/Reducer/Election/Reducer";
import PReducer from "./Admin/Reducer/Party/Reducer"

const rootReducer = combineReducers({
    Ereducer,
    PReducer,
});

export default rootReducer;