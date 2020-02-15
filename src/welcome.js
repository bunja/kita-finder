import React from "react";
//import Registration from "./registration";
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
                    <HashRouter></HashRouter>
                </div>
            </div>
        </div>
    );
}
