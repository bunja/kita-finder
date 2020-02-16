import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import Parent from "./parent";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     receiveFriendsWannabes,
//     acceptFriendRequest,
//     unfriend
// } from "./actions";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/parent" component={Parent} />
        </BrowserRouter>
    );
}
