import React from "react";

import RegisterTab from "./registerTab";
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

                    <RegisterTab />
                </div>
            </div>
        </div>
    );
}

// <div>
//     <Route
//         exact
//         path="/register/parent"
//         component={RegisterParent}
//     />
//     <Route
//         exact
//         path="/register/kita"
//         component={RegisterKita}
//     />
// </div>
