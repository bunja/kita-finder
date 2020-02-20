import React from "react";

import RegisterTab from "./registerTab";
//import Login from "./login";
//import ResetPassword from "./resetpassword";

export default function Welcome() {
    return (
        <div className="center-flex dark-overlay">
            <div className="container text-center">
                <div className="logo">
                    <img className="logo-pic" src="/logo.png" />
                    <h1>Kita-Finder</h1>
                </div>

                <div className="welcome">
                    <RegisterTab />
                </div>
            </div>
        </div>
    );
}
