import React from "react";
//import axios from "./axios";
import { Link } from "react-router-dom";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useAuthSubmit } from "../hooks/useAuthSubmit";

export default function RegisterParent() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleSubmit] = useAuthSubmit(
        "/register/parent",
        values,
        "/"
    );
    return (
        <div>
            {error && <p> Something went wrong! Please try again</p>}

            <div className="form-elements">
                <div className="form-element">
                    <input
                        name="first"
                        placeholder="first name"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="form-element">
                    <input
                        name="last"
                        placeholder="last name"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="form-element">
                    <input
                        name="email"
                        placeholder="email"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="form-element">
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={e => handleChange(e)}
                    />
                </div>
            </div>

            <div>
                <button className="btn-class" onClick={e => handleSubmit(e)}>
                    Sign up
                </button>
            </div>
            <Link to="/">log in</Link>
            <br />
            <Link to="/reset/start">reset password</Link>
        </div>
    );
}
