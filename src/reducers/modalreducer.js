const initialState = {
    show: false,
    content: ""
};

const modalReducer = (state = initialState, action) => {
    const newState = {
        ...initialState
    };

    switch (action.type) {
        case "SHOW":
            newState.show = true;
            return newState;
        case "HIDE":
            newState.show = false;
            return newState;
        default:
            break;
    }
    return state;
};

export default modalReducer;