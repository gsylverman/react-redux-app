const initialState = {
    images: [],
    page: 1,
    load: false
};

const infSReducer = (state = initialState, action) => {

    const newState = { ...state };

    switch (action.type) {
        case "LOAD":

            newState.images = [
                ...state.images,
                ...action.payload[1]
            ];
            newState.load = false;
            newState.page = newState.page + 1;

            return newState;
        default:
            break;
    }

    return state;
};
export default infSReducer;

