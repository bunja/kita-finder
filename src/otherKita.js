import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { receiveOtherKitaInfo } from "./actions";
import { useParams } from "react-router-dom";

export default function Kita() {
    const dispatch = useDispatch();
    const kita = useSelector(state => state && state.kita);
    console.log("kita kitaComponent", kita);
    const { id } = useParams();
    useEffect(() => {
        dispatch(receiveOtherKitaInfo(id));
    }, []);

    if (!kita) {
        return <div>NOTHING</div>;
    }

    return (
        <div className="container-form">
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
                    Places available: {kita.available}
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
        </div>
    );
}
