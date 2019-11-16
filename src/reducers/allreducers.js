import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import clockReducer from "./clockReducer";

const allReducers = combineReducers({
    clock: clockReducer,
    form: formReducer
});

export default allReducers;