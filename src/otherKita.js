import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { receiveOtherKitaInfo } from "./actions";
import { useParams } from "react-router-dom";

export default function Kita() {
    const dispatch = useDispatch();
    const kita = useSelector(state => state && state.otherkita);
    console.log("kita kitaComponent", kita);
    const isParent = useSelector(state => state && state.isParent);
    // console.log("kita kitaComponent", kita);
    console.log("!!!! OTHER KITA??? IS THAT PARENT==>", isParent);
    const { id } = useParams();
    console.log("id KOKKKKKK", id);
    useEffect(() => {
        dispatch(receiveOtherKitaInfo(id));
    }, []);

    if (!kita) {
        return <div>NOTHING</div>;
    }

    return (
        <div className="kita-profile ">
            <div className="content post">
                <div className=" main">
                    <div className="preview">
                        <img className="kita-pic" src="/logo.png" />
                    </div>
                    <div className="main-info">
                        <div className="name">
                            <p className="kitaname">{kita.kitaname}</p>
                        </div>
                        <div className="address">
                            <span>Address:</span>
                            <p>
                                <span>Zip:</span>
                                {kita.zip_code}
                                <br />
                                <span>City:</span>
                                {kita.city}
                                <br />
                                <span>Street:</span>
                                {kita.street_hous}
                                <br />
                            </p>
                        </div>
                        <div className="contact-info">
                            <p>
                                <span>Phone:</span> {kita.phone_number}
                                <br />
                                <span>Email:</span> {kita.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" sec">
                    <div className="desc">
                        <span>
                            Some information:
                            <p>{kita.description}</p>
                        </span>
                    </div>
                    <div className="time-of-work">
                        {" "}
                        <span>Open:</span> {kita.time_of_work}{" "}
                    </div>
                    <div className="age">
                        <span> Age of kids:</span> {kita.age}
                    </div>
                    <div className="website">
                        {" "}
                        <span>www.zandec.com</span>
                    </div>
                </div>

                <div className=" ter">
                    <div className="application-name">
                        <span>Aplication:</span>
                    </div>
                    <div className="places">
                        <span>Places:</span>
                        {kita.num_of_places}
                    </div>
                    <div className="available">
                        <span>Available:</span>
                        {kita.available}
                    </div>
                </div>
            </div>
        </div>
    );
}
