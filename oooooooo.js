import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { receiveOtherKitaInfo } from "./actions";
import { useParams } from "react-router-dom";

export default function Kita() {
    return (
        <div className="kita-profile">
            <div className="content">
                <div className="post main">
                    <div className="preview">
                        <img className="kita-pic" src="./public/logo.png" />
                    </div>
                    <div className="main-info">
                        <div className="name">
                            <Link to={`/kita/${props.id}`} className="nav-link">
                                <p>{props.kitaname}</p>
                            </Link>
                            <p>
                                Phone: {props.phone_number}
                                <br />
                                email: {props.email}
                                Address:
                                <p>
                                    Zip:{props.zip}
                                    <br />
                                    Street:{props.street}
                                    <br />
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="some-info">
                        <div className="time-of-work">Open: {props.time}</div>
                        <div className="age"> Age of kids: {props.age}</div>
                        <div className="website"> www.zandec.com</div>
                    </div>
                    <div className="application">
                        Aplication:
                        <div className="places">Places:{props.places}</div>
                        <div className="available">
                            Available:{props.available}
                        </div>
                        <div className="appl-btn">
                            <Link to={"/application/" + props.id}>Apply</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
