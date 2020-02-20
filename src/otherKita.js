import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { receiveOtherKitaInfo } from "./actions";
import { useParams } from "react-router-dom";
import { CircleItem } from "./circleItem";
import { Link } from "react-router-dom";

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
        <div className="kita-profile findkita">
            {isParent && <img src="/parent.png" className="circular--square" />}
            {!isParent && <img src="/kita.png" className="circular--square" />}
            <div className="findkita-container">
                <div className="wrap">
                    <div className="post main">
                        <div className="pic-info">
                            <img className="kita-pic" src="/logo.png" />
                        </div>
                        <div className="kita-info mb-10">
                            <div className="kita-info-row">
                                <span className="title">{kita.kitaname}</span>
                                <a href={"mailto:" + kita.email}>✉️</a>&nbsp;
                                <a href={kita.website}>🌍</a>
                            </div>
                            <div className="kita-info-row">
                                Address: {kita.street_hous}, {kita.zip_code}
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
                                {isParent &&
                                    kita.available > 0 &&
                                    !kita.applied && (
                                        <div className="appl-btn">
                                            <Link
                                                to={"/application/" + kita.id}
                                            >
                                                Apply
                                            </Link>
                                        </div>
                                    )}
                                {isParent &&
                                    kita.available == 0 &&
                                    !kita.applied && (
                                        <div className="error">
                                            Currently no places available
                                        </div>
                                    )}
                                {isParent && kita.applied && (
                                    <div className="error">Applied ✔️</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
