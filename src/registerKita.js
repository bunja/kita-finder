import React from "react";
import { Link } from "react-router-dom";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useAuthSubmit } from "../hooks/useAuthSubmit";

export default function RegisterKita() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleSubmit] = useAuthSubmit(
        "/api/register/kita",
        values,
        "/kita"
    );
    return (
        <div>
            {error && <p> Something went wrong! Please try again</p>}

            <div className="form-elements">
                <div className="form-element">
                    <input
                        name="kitaname"
                        placeholder="name of the kindergarten"
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
            <Link to="/welcome/login/kita">log in</Link>
        </div>
    );
}
