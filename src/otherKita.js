import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { receiveOtherKitaInfo } from "./actions";
import { useParams } from "react-router-dom";

export default function Kita() {
    const dispatch = useDispatch();
    const kita = useSelector(state => state && state.otherkita);
    console.log("kita kitaComponent", kita);
    const { id } = useParams();
    console.log("id KOKKKKKK", id);
    useEffect(() => {
        dispatch(receiveOtherKitaInfo(id));
    }, []);

    if (!kita) {
        return <div>NOTHING</div>;
    }

    return (
        <div className="kita-profile">
            <div className="content">
                <div className="post main">
                    <div className="preview">
                        <img className="kita-pic" src="./public/logo.png" />
                    </div>
                    <div className="main-info">
                        <div className="name">
                            <p className="kitaname">{kita.kitaname}</p>
                        </div>
                        <div className="address">
                            Address:
                            <p>
                                Zip:{kita.zip_code}
                                <br />
                                City:{kita.city}
                                <br />
                                Street:{kita.street_hous}
                                <br />
                            </p>
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
                <div className="post sec">
                    <div className="desc">
                        Some information:
                        <p>{kita.description}</p>
                    </div>
                    <div className="time-of-work">
                        {" "}
                        Open: {kita.time_of_work}{" "}
                    </div>
                    <div className="age"> Age of kids: {kita.age}</div>
                    <div className="website"> www.zandec.com</div>
                </div>

                <div className="post ter">
                    <div className="application">Aplication:</div>
                    <div className="places">Places:{kita.num_of_places}</div>
                    <div className="available">Available:{kita.available}</div>
                </div>
            </div>
        </div>
    );
}
