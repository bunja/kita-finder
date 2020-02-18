import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Application from "./application";

export default function KitaInfo(props) {
    return (
        <div className="kitainfo-container">
            <div className="pic">
                <img className="pic-kita" src="./logo.png" />
            </div>
            <div className="kita-contact">
                <Link to={`/user/${props.id}`} className="nav-link">
                    <p>{props.kitaname}</p>
                </Link>

                <p>Email{props.email}</p>
                <p>
                    Address{props.zip}
                    <br />
                    {props.street}
                </p>
                <p>Openning Hours{props.time}</p>
            </div>
            <div className="kita-apply-to">
                <p>Places{props.places}</p>
                <p>Available</p>
                <div className="appl-btn">
                    <Link to="/application">Apply</Link>
                </div>
            </div>
        </div>
    );
}
