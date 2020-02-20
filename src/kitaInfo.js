import React from "react";
import { Link } from "react-router-dom";
import Application from "./application";

export default function KitaInfo(props) {
    const kita = props.kita;
    console.log("KitaInfo kita", kita);

    return (
        <div className="kita-profile">
            <div className="post main kitainfo">
                <div className="pic-info">
                    <Link to={`/kita/${kita.id}`} className="nav-link">
                        <img className="kita-pic" src="/logo.png" />
                    </Link>
                </div>
                <div className="adr-info">
                    <div className="name">
                        <p>{kita.kita}</p>

                        <p>
                            Phone: {kita.phone_number}
                            <br />
                            email: {kita.email}
                            <br />
                            Address:
                            <br />
                            Zip code:{kita.zip}
                            <br />
                            Street:{kita.street}
                            <br />
                        </p>
                    </div>
                </div>
                <div className="some-info">
                    Information:
                    <div className="time-of-work">Open: {kita.time}</div>
                    <div className="age"> Age of kids: {kita.age}</div>
                    <div className="website"> www.zandec.com</div>
                </div>
                <div className="application">
                    Aplication:
                    <div className="places">Places: {kita.places}</div>
                    <div className="available">Available: {kita.available}</div>
                    {kita.available > 0 && !kita.applied && (
                        <div className="appl-btn">
                            <Link to={"/application/" + kita.id}>Apply</Link>
                        </div>
                    )}
                    {kita.available == 0 && !kita.applied && (
                        <div className="error">
                            Currently no places available
                        </div>
                    )}
                    {kita.applied && <div className="error">Applied ✔️</div>}
                </div>
            </div>
        </div>
    );
}
