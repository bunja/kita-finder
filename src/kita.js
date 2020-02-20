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
    const isParent = useSelector(state => state && state.isParent);
    console.log("kita kitaComponent", kita);
    console.log("!!!! WHAT IS THAT??? IS THAT PARENT==>", isParent);

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
        <div className="kita-profile findkita">
            <img src="/kita.png" className="circular--square" />

            <div className="findkita-container">
                <div className="wrap">
                    <div className="post main">
                        <div className="pic-info">
                            <img className="kita-pic" src="/logo.png" />
                        </div>
                        {!editMode && (
                            <div className="kita-info mb-10">
                                <div className="kita-info-row">
                                    <span className="title">
                                        {kita.kitaname}
                                    </span>
                                    <a href={"mailto:" + kita.email}>✉️</a>
                                    &nbsp;
                                    <a href={kita.web_site}>🌍</a>
                                </div>
                                <div className="kita-info-row">
                                    Address: {kita.city}, {kita.street_hous},
                                    {kita.zip_code}
                                </div>
                                <div className="kita-info-row">
                                    Open: {kita.time_of_work}, Age: {kita.age}
                                </div>
                                <div className="kita-info-row">
                                    Information: {kita.num_of_places} places,{" "}
                                    {kita.available} available
                                </div>
                                <div className="kita-info-row">
                                    <p>{kita.description}</p>
                                </div>
                                <div className="kita-info-row">
                                    <a href="#" onClick={e => editClick()}>
                                        Edit
                                    </a>
                                </div>
                            </div>
                        )}
                        {editMode && (
                            <div className="kita-info mb-10">
                                <div className="kita-info-row">
                                    Kita name:{" "}
                                    <input
                                        name="kitaname"
                                        defaultValue={kita.kitaname}
                                        onChange={e => handleChange(e)}
                                        className="grey-input"
                                    />
                                </div>
                                <div className="kita-info-row">
                                    Email:{" "}
                                    <input
                                        name="email"
                                        defaultValue={kita.email}
                                        onChange={e => handleChange(e)}
                                        className="grey-input"
                                    />
                                    , Website:
                                    <input
                                        name="web_site"
                                        defaultValue={kita.web_site}
                                        onChange={e => handleChange(e)}
                                        className="grey-input"
                                    />
                                </div>
                                <div className="kita-info-row">
                                    City:{" "}
                                    <input
                                        name="city"
                                        defaultValue={kita.city}
                                        onChange={e => handleChange(e)}
                                        className="grey-input"
                                    />
                                    , Street:{" "}
                                    <input
                                        name="street_hous"
                                        defaultValue={kita.street_hous}
                                        onChange={e => handleChange(e)}
                                        className="grey-input"
                                    />
                                    , Zip:{" "}
                                    <input
                                        name="zip_code"
                                        defaultValue={kita.zip_code}
                                        onChange={e => handleChange(e)}
                                        className="w100px grey-input"
                                    />
                                </div>
                                <div className="kita-info-row">
                                    Open:{" "}
                                    <input
                                        name="time_of_work"
                                        defaultValue={kita.time_of_work}
                                        onChange={e => handleChange(e)}
                                        className="w100px grey-input"
                                    />
                                    , Age:{" "}
                                    <input
                                        name="age"
                                        defaultValue={kita.age}
                                        onChange={e => handleChange(e)}
                                        className="w100px grey-input"
                                    />
                                </div>
                                <div className="kita-info-row">
                                    Total number of places:{" "}
                                    <input
                                        name="num_of_places"
                                        defaultValue={kita.num_of_places}
                                        onChange={e => handleChange(e)}
                                        className="w100px grey-input"
                                    />
                                    , Available:
                                    <input
                                        name="available"
                                        defaultValue={kita.available}
                                        onChange={e => handleChange(e)}
                                        className="w100px grey-input"
                                    />
                                </div>
                                <div className="kita-info-row">
                                    <textarea
                                        name="description"
                                        defaultValue={kita.description}
                                        onChange={e => handleChange(e)}
                                        className="w100 grey-input"
                                    />
                                </div>
                                <div className="kita-info-row">
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
