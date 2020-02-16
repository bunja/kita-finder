export default function reducer(state = {}, action) {
    let newState = state;

    if (action.type == "RECEIVE_PARENT_INFO") {
        console.log("REDUCE TO ASHES ", action);
        newState = { ...state, parent: action.parent.data };
    }
    return newState;
}
