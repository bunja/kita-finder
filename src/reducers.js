export default function reducer(state = {}, action) {
    let newState = state;

    if (action.type == "RECEIVE_PARENT_INFO") {
        console.log("REDUCE TO ASHES PARENT", action);
        newState = { ...state, parent: action.parent.data };
    }

    if (action.type == "RECEIVE_KITA_INFO") {
        console.log("REDUCE TO ASHES KITA", action);
        newState = { ...state, kita: action.kita.data };
    }

    if (action.type == "UPDATE_KITA_INFO") {
        console.log("UPDATE TO ASHES KITA", action);
        newState = { ...state, kita: { ...state.kita, ...action.kita } };
        console.log("newState", newState);
    }

    if (action.type == "RECEIVE_APPLICATION") {
        console.log("REDUCE TO ASHES APPLICATION", action);
        newState = { ...state, application: action.application.data };
    }

    if (action.type == "UPDATE_APPLICATION") {
        console.log("UPDATE TO ASHES APPLICATION", action);
        newState = {
            ...state,
            application: { ...state.application, ...action.application }
        };
        console.log("newState", newState);
    }

    return newState;
}
