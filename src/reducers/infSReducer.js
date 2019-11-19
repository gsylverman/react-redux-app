const initialState = {
    images: [],
    load: false
};

const infSReducer = (state = initialState, action) => {

    const newState = {
        ...state,
        images: [...state.images]
    };
    
    switch (action.type) {
        case "LOAD":
            newState.images = [
                ...state.images,
                ...action.payload
            ];
            return newState;
        case "RESET":
            newState.images = [];
            return newState;
        default:
            break;
    }
    return state;
};
export default infSReducer;
