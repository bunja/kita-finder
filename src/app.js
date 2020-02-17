import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import Parent from "./parent";
import Kita from "./kita";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     receiveFriendsWannabes,
//     acceptFriendRequest,
//     unfriend
// } from "./actions";

export default function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <div className="navbar">
                    <div className="nav-header">KITA FINDER</div>
                    <div className="nav-separator"></div>
                    <div className="nav-links">
                        <Link to="/parent" className="nav-link">
                            My profile
                        </Link>
                        <Link to="/find/kita" className="nav-link">
                            Find kita
                        </Link>

                        <a href="/logout">Logout</a>
                    </div>
                </div>

                <Route exact path="/parent" component={Parent} />
                <Route exact path="/kita" component={Kita} />
            </BrowserRouter>
        </div>
    );
}
