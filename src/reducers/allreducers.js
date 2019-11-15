import { combineReducers } from "redux";
import clockReducer from "./clockReducer";

const allReducers = combineReducers({
    clock: clockReducer
});

export default allReducers;