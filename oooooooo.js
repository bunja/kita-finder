import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { receiveOtherKitaInfo } from "./actions";
import { useParams } from "react-router-dom";

export default function Kita() {
    return (
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
                            Address:
                            <p>
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
                                Street:{kita.street_hous}
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
                        Places:
                        <input
                            name="num_of_places"
                            defaultValue={kita.num_of_places}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className="available">
                        Available:
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
    );
}
