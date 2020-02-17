import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    receiveKitaInfo,
    updateKitaInfo
    //     unfriend
} from "./actions";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useInfoSubmit } from "../hooks/useInfoSubmit";

export default function Kita() {
    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch();
    const kita = useSelector(state => state && state.kita);
    console.log("kita kitaComponent", kita);

    const [values, handleChange] = useStatefulFields();
    console.log("kita values", values);

    const [error, handleSave] = useInfoSubmit("/api/update/kita", values);

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
                <div className="container-kita">
                    <div className="kita-side">
                        <div className="kita main-info">
                            <div className="pic">
                                <img src="/logo.png" />
                            </div>
                            <div className="kita-info">
                                <h1>Name:{kita.kitaname}</h1>
                                <p>Number of places:{kita.num_of_places}</p>
                                <p>Time of work:{kita.time_of_work}</p>
                                <p>Age of kids:{kita.age}</p>
                            </div>
                        </div>
                        <div className="desc kita">
                            <p>Some info:{kita.description}</p>
                        </div>
                        <div className="kita-apply">
                            LOGIC LOGIC LOGIC <br />
                            Some smart important
                            <br /> logic is missing here
                        </div>
                    </div>
                    <div className="contact-side">
                        <h1>ADDRESS:</h1>
                        <p>
                            Zip:{kita.zip_code}
                            City:{kita.city}
                            Street:{kita.street_hous}
                        </p>
                        <p>Phone:{kita.phone_number}</p>
                        <p>email:{kita.email}</p>
                        <p>web-site:{kita.web_site}</p>
                    </div>
                    <div className="kita-edit">
                        <a href="#" onClick={e => editClick()}>
                            Edit
                        </a>
                    </div>
                </div>
            )}

            {editMode && (
                <div className="container-kita">
                    <div className="kita-side">
                        <div className="kita main-info">
                            <div className="pic">
                                <img src="/logo.png" />
                            </div>
                            <div className="kita-info">
                                <h1>
                                    <input
                                        name="kitaname"
                                        defaultValue={kita.kitaname}
                                        onChange={e => handleChange(e)}
                                    />
                                </h1>
                                <p>
                                    Number of places:
                                    <input
                                        name="num_of_places"
                                        defaultValue={kita.num_of_places}
                                        onChange={e => handleChange(e)}
                                    />
                                </p>
                                <p>
                                    Time of work:
                                    <input
                                        name="time_of_work"
                                        defaultValue={kita.time_of_work}
                                        onChange={e => handleChange(e)}
                                    />
                                </p>
                                <p>
                                    Age of kids:
                                    <input
                                        name="age"
                                        defaultValue={kita.age}
                                        onChange={e => handleChange(e)}
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="desc kita">
                            <p>
                                Some info:
                                <input
                                    name="description"
                                    defaultValue={kita.description}
                                    onChange={e => handleChange(e)}
                                />
                            </p>
                        </div>
                        <div className="kita-apply">
                            LOGIC LOGIC LOGIC <br />
                            Some smart important
                            <br /> logic is missing here
                        </div>
                    </div>
                    <div className="contact-side">
                        <h1>ADDRESS:</h1>
                        <p>
                            Zip:
                            <input
                                name="zip_code"
                                defaultValue={kita.zip_code}
                                onChange={e => handleChange(e)}
                            />
                            City:
                            <input
                                name="city"
                                defaultValue={kita.city}
                                onChange={e => handleChange(e)}
                            />
                        </p>
                        <p>
                            Phone:
                            <input
                                name="phone_number"
                                defaultValue={kita.phone_number}
                                onChange={e => handleChange(e)}
                            />
                        </p>
                        <p>
                            email:
                            <input
                                name="email"
                                defaultValue={kita.email}
                                onChange={e => handleChange(e)}
                            />
                        </p>
                        <p>
                            web-site:
                            <input
                                name="web_site"
                                defaultValue={kita.web_site}
                                onChange={e => handleChange(e)}
                            />
                        </p>
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
            )}
        </div>
    );
}
