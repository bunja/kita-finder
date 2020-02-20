import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { receiveApplication, updateApplication } from "./actions";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useUpdate } from "../hooks/useUpdate";
import Modal from "./modal";

export default function Application(props) {
    const { id } = useParams();
    console.log("Application", id);

    const dispatch = useDispatch();
    const application = useSelector(state => state && state.application);
    const kita = useSelector(state => state && state.kita);
    console.log("applicationComponent", application, kita);

    const [values, handleChange] = useStatefulFields();
    console.log("application values", values);

    const [error, handleSave] = useUpdate(
        `/api/application/${id}`,
        application,
        values
    );

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        dispatch(receiveApplication(id));
    }, []);

    if (!application) {
        return <div>TYPIK</div>;
    }

    return (
        <div className="kita-profile">
            <div className="application-form">
                <div className="form" action="" method="post">
                    <h3>Application for {kita.kitaname}</h3>
                    <div className="pain">
                        <div className="column">
                            <fieldset>
                                <input
                                    placeholder="Child's first name"
                                    defaultValue={application.kidfirst}
                                    onChange={e => handleChange(e)}
                                    name="kidfirst"
                                    type="text"
                                    tabIndex="1"
                                    required
                                    autoFocus
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Gutschein number"
                                    defaultValue={application.gutschein}
                                    onChange={e => handleChange(e)}
                                    name="gutschein"
                                    type="text"
                                    tabIndex="4"
                                    required
                                />
                            </fieldset>

                            <fieldset>
                                <input
                                    placeholder="Parent's last name"
                                    defaultValue={application.last}
                                    onChange={e => handleChange(e)}
                                    name="last"
                                    type="text"
                                    tabIndex="7"
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Child's date of birth"
                                    defaultValue={application.birthdate}
                                    onChange={e => handleChange(e)}
                                    name="birthdate"
                                    type="text"
                                    tabIndex="3"
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Parent's Phone Number"
                                    defaultValue={application.phone_number}
                                    onChange={e => handleChange(e)}
                                    name="phone_number"
                                    type="tel"
                                    tabIndex="7"
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Zip code"
                                    defaultValue={application.zip_code}
                                    onChange={e => handleChange(e)}
                                    name="zip_code"
                                    type="text"
                                    tabIndex="9"
                                    required
                                />
                            </fieldset>
                        </div>
                        <div className="column">
                            <fieldset>
                                <input
                                    placeholder="Child's last name"
                                    defaultValue={application.kidlast}
                                    onChange={e => handleChange(e)}
                                    name="kidlast"
                                    type="text"
                                    tabIndex="2"
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Valid until "
                                    defaultValue={application.valid_until}
                                    onChange={e => handleChange(e)}
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
                                    onChange={e => handleChange(e)}
                                    name="first"
                                    type="text"
                                    tabIndex="6"
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Parent's Email Address"
                                    defaultValue={application.email}
                                    onChange={e => handleChange(e)}
                                    name="email"
                                    type="email"
                                    tabIndex="6"
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Street, house number"
                                    defaultValue={application.street_hous}
                                    onChange={e => handleChange(e)}
                                    name="street_hous"
                                    type="text"
                                    tabIndex="8"
                                    required
                                />
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="City"
                                    defaultValue={application.city}
                                    onChange={e => handleChange(e)}
                                    name="city"
                                    type="text"
                                    tabIndex="10"
                                    required
                                />
                            </fieldset>
                        </div>
                    </div>

                    <div className="pain-no-gain">
                        <fieldset>
                            <textarea
                                placeholder="Type your message here...."
                                defaultValue={application.notes}
                                onChange={e => handleChange(e)}
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
                                    setIsVisible(true);
                                    console.log("AAAA?");
                                }}
                            >
                                Send Application to {kita.kitaname}
                            </button>
                            {isVisible && (
                                <Modal
                                    closeModal={() => {
                                        setIsVisible(false);
                                        props.history.push("/find/kita");
                                    }}
                                />
                            )}
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
}
