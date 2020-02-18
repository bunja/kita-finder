import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { receiveApplication, updateApplication } from "./actions";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useInfoSubmit } from "../hooks/useInfoSubmit";

export default function Application() {
    const dispatch = useDispatch();
    const application = useSelector(state => state && state.application);
    console.log("applicationComponent", application);

    const [values, handleChange] = useStatefulFields();
    console.log("application values", values);

    const [error, handleSave] = useInfoSubmit(
        "/api/update/application",
        values
    );

    useEffect(() => {
        dispatch(receiveApplication());
    }, []);
    if (!application) {
        return <div>TYPIK</div>;
    }
    return (
        <div className="container-application">
            <div className="application" action="" method="post">
                <h3>Kita Application Form</h3>

                <fieldset>
                    <input
                        placeholder="Child's first name"
                        defaultValue={application.kidfirst}
                        name="kidfirst"
                        type="text"
                        tabIndex="1"
                        required
                        autoFocus
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Child's last name"
                        defaultValue={application.kidlast}
                        name="kidlast"
                        type="text"
                        tabIndex="2"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Date of birth"
                        defaultValue={application.birthdate}
                        name="birthdate"
                        type="text"
                        tabIndex="3"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Gutschein number"
                        defaultValue={application.gutschein}
                        name="gutschein"
                        type="text"
                        tabIndex="4"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Valid until "
                        defaultValue={application.valid_until}
                        name="valid_until"
                        type="text"
                        tabIndex="5"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Parent's first name"
                        defaultValue={application.first}
                        name="first"
                        type="text"
                        tabIndex="6"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Parent's last name"
                        defaultValue={application.last}
                        name="last"
                        type="text"
                        tabIndex="7"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Your Email Address"
                        defaultValue={application.email}
                        name="email"
                        type="email"
                        tabIndex="6"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Your Phone Number"
                        defaultValue={application.phone_number}
                        name="email"
                        type="tel"
                        tabIndex="7"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Street, house number"
                        defaultValue={application.street_hous}
                        name="street_hous"
                        type="text"
                        tabIndex="8"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="Zip code"
                        defaultValue={application.zip_code}
                        name="zip_code"
                        type="text"
                        tabIndex="9"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        placeholder="City"
                        defaultValue={application.city}
                        name="city"
                        type="text"
                        tabIndex="10"
                        required
                    />
                </fieldset>
                <fieldset>
                    <textarea
                        placeholder="Type your message here...."
                        defaultValue={application.notes}
                        name="notes"
                        tabIndex="11"
                        required
                    ></textarea>
                </fieldset>
                <fieldset>
                    <button
                        name="submit"
                        type="submit"
                        className="contact-submit"
                        onClick={e => {
                            handleSave();

                            dispatch(updateApplication(values));
                        }}
                    >
                        Send Application
                    </button>
                </fieldset>
            </div>
        </div>
    );
}
