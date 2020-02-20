import React from "react";
import { Link } from "react-router-dom";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useAuthSubmit } from "../hooks/useAuthSubmit";

export default function LoginKita() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleSubmit] = useAuthSubmit(
        "/api/login/kita",
        values,
        "/kita"
    );

    return (
        <div>
            <div className="form">
                {error && (
                    <div className="error">
                        Oops.Something went wrong.
                        <br />
                        Please try again.
                    </div>
                )}
                <div className="form-elements">
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
            </div>
            <div>
                <button className="btn-class" onClick={e => handleSubmit(e)}>
                    Log in
                </button>
            </div>
            <Link to="/welcome/register/kita">sign up</Link>
        </div>
    );
}
