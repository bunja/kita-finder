import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RegisterParent from "./registerParent";
import RegisterKita from "./registerKita";
import LoginParent from "./loginParent";
import LoginKita from "./loginKita";

export default function RegisterTab() {
    return (
        <div className="form-elements tab-container">
            <BrowserRouter>
                <div className="tabs">
                    <div className="tab-nav">
                        <Link to="/welcome/register/parent">Parent</Link>
                        &nbsp; &nbsp;
                        <Link to="/welcome/register/kita">Kindergarten</Link>
                    </div>

                    <div className="reg-body">
                        <Route
                            exact
                            path="/welcome/register/parent"
                            component={RegisterParent}
                        />
                        <Route
                            exact
                            path="/welcome/register/kita"
                            component={RegisterKita}
                        />
                        <Route
                            exact
                            path="/welcome/login/kita"
                            component={LoginKita}
                        />
                        <Route
                            exact
                            path="/welcome/login/parent"
                            component={LoginParent}
                        />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}
