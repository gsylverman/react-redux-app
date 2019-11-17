import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import clockReducer from "./clockReducer";
import infSReducer from "./infSReducer";

const allReducers = combineReducers({
    clock: clockReducer,
    form: formReducer,
    infinite:infSReducer
});

export default allReducers;