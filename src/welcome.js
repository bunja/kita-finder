import React from "react";
import RegisterParent from "./registerParent";
import { HashRouter, Route } from "react-router-dom";
//import Login from "./login";
//import ResetPassword from "./resetpassword";

export default function Welcome() {
    return (
        <div className="center-flex">
            <div className="container text-center">
                <div className="logo">
                    <img className="logo-pic" src="/logo.png" />
                </div>
                <div className="welcome">
                    <h1>Kita-Finder</h1>
                    <HashRouter>
                        <div>
                            <Route exact path="/" component={RegisterParent} />
                        </div>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
}
