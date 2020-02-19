import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    receiveKitaInfo,
    updateKitaInfo
    //     unfriend
} from "./actions";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useUpdate } from "../hooks/useUpdate";

export default function Kita() {
    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch();
    const kita = useSelector(state => state && state.kita);
    console.log("kita kitaComponent", kita);

    const [values, handleChange] = useStatefulFields();
    console.log("kita values", values);

    const [error, handleSave] = useUpdate("/api/update/kita", kita, values);

    useEffect(() => {
        dispatch(receiveKitaInfo());
    }, []);

    if (!kita) {
        return <div>NOTHING</div>;
    }

    const editClick = () => {
        setEditMode(true);
    };

    return (
        <div>
            {!editMode && (
                <div>
                    <div className="kita-profile ">
                        <div className="content post">
                            <div className=" main">
                                <div className="preview">
                                    <img className="kita-pic" src="/logo.png" />
                                </div>
                                <div className="main-info">
                                    <div className="name">
                                        <p className="kitaname">
                                            {kita.kitaname}
                                        </p>
                                    </div>
                                    <div className="address">
                                        <span className="title">Address:</span>
                                        <br /> Zip: {kita.zip_code}
                                        <br />
                                        City: {kita.city}
                                        <br />
                                        Street: {kita.street_hous}
                                        <br />
                                    </div>
                                    <div className="contact-info">
                                        <p>
                                            Phone: {kita.phone_number}
                                            <br />
                                            email: {kita.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=" sec">
                                <div className="desc">
                                    Some information:
                                    <p>{kita.description}</p>
                                </div>
                                <div className="time-of-work">
                                    {" "}
                                    Open: {kita.time_of_work}{" "}
                                </div>
                                <div className="age">
                                    {" "}
                                    Age of kids: {kita.age}
                                </div>
                                <div className="website"> www.zandec.com</div>
                            </div>

                            <div className=" ter">
                                <div className="application">Aplication:</div>
                                <div className="places">
                                    Places: {kita.num_of_places}
                                </div>
                                <div className="available">
                                    Available: {kita.available}
                                </div>
                                <div className="kita-edit ">
                                    <a href="#" onClick={e => editClick()}>
                                        Edit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {editMode && (
                <div className="kita-profile ">
                    <div className="content post">
                        <div className=" main">
                            <div className="preview">
                                <img className="kita-pic" src="/logo.png" />
                            </div>
                            <div className="main-info">
                                <div className="name">
                                    <p className="kitaname">
                                        <input
                                            name="kitaname"
                                            defaultValue={kita.kitaname}
                                            onChange={e => handleChange(e)}
                                        />
                                    </p>
                                </div>
                                <div className="address">
                                    <p>
                                        <span className="title">Address:</span>
                                        <br />
                                        Zip:
                                        <input
                                            name="zip_code"
                                            defaultValue={kita.zip_code}
                                            onChange={e => handleChange(e)}
                                        />
                                        <br />
                                        City:
                                        <input
                                            name="city"
                                            defaultValue={kita.city}
                                            onChange={e => handleChange(e)}
                                        />
                                        <br />
                                        Street:
                                        <input
                                            name="street_hous"
                                            defaultValue={kita.street_hous}
                                            onChange={e => handleChange(e)}
                                        />
                                        <br />
                                    </p>
                                </div>
                                <div className="contact-info">
                                    <p>
                                        Phone:{" "}
                                        <input
                                            name="phone_number"
                                            defaultValue={kita.phone_number}
                                            onChange={e => handleChange(e)}
                                        />
                                        <br />
                                        email:{" "}
                                        <input
                                            name="email"
                                            defaultValue={kita.email}
                                            onChange={e => handleChange(e)}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" sec">
                            <div className="desc">
                                Some information:
                                <p>
                                    <textarea
                                        name="description"
                                        defaultValue={kita.description}
                                        onChange={e => handleChange(e)}
                                    />
                                </p>
                            </div>
                            <div className="time-of-work">
                                {" "}
                                Open:{" "}
                                <input
                                    name="time_of_work"
                                    defaultValue={kita.time_of_work}
                                    onChange={e => handleChange(e)}
                                />{" "}
                            </div>
                            <div className="age">
                                {" "}
                                Age of kids:{" "}
                                <input
                                    name="age"
                                    defaultValue={kita.age}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                            <div className="website">
                                {" "}
                                www.zandec.com
                                <input
                                    name="web_site"
                                    defaultValue={kita.web_site}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className=" ter">
                            <div className="application">Aplication:</div>
                            <div className="places">
                                Places:&nbsp;&nbsp;
                                <input
                                    name="num_of_places"
                                    defaultValue={kita.num_of_places}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                            <div className="available">
                                Available:&nbsp;
                                <input
                                    name="available"
                                    defaultValue={kita.available}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                            <div className="kita-save">
                                <a
                                    href="#"
                                    onClick={e => {
                                        handleSave();
                                        setEditMode(false);
                                        dispatch(updateKitaInfo(values));
                                    }}
                                >
                                    Save
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
