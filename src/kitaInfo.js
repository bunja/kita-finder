import React from "react";
import { Link } from "react-router-dom";
import Application from "./application";

export default function KitaInfo(props) {
    console.log("props.kitaname", props);
    return (
        <div className="kita-profile">
            <div className="post main kitainfo">
                <div className="pic-info">
                    <Link to={`/kita/${props.id}`} className="nav-link">
                        <img className="kita-pic" src="/logo.png" />
                    </Link>
                </div>
                <div className="adr-info">
                    <div className="name">
                        <p>{props.kita}</p>

                        <p>
                            Phone: {props.phone_number}
                            <br />
                            email: {props.email}
                            <br />
                            Address:&nbsp;{props.zip}
                            <br />
                            Street:{props.street}
                            <br />
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
                    <div className="available">Available:{props.available}</div>
                    <div className="appl-btn">
                        <Link to={"/application/" + props.id}>Apply</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
