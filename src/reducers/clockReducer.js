const initialState = {
    ora: null
};

const clockReducer = (state = initialState, action) => {
    const newState = {
        ...initialState
    };
    if (action.type === "UPDATE") {
        newState.ora = action.payload;
        return newState;
    }

    return state;
};

export default clockReducer;