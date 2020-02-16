import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import App from "./app";
///////////////////Redux///////////////////
import { Provider } from "react-redux";
//provider gives  an access to redux to every component
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
//import { init } from "./socket";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);
//creating a store for global state and methods that allow us to interact us with store
// /////////////////Redux///////////////
console.log("hi!");
// checking if user logged in
let elem;
if (location.pathname.startsWith("/welcome")) {
    elem = <Welcome />;
} else {
    //init(store);
    elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(elem, document.querySelector("main"));
