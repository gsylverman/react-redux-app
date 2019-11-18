import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import clockReducer from "./clockReducer";
import infSReducer from "./infSReducer";
import modalreducer from "./modalreducer";

const allReducers = combineReducers({
    clock: clockReducer,
    form: formReducer,
    infinite:infSReducer,
    modal:modalreducer
});

export default allReducers;