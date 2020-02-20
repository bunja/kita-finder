import React from "react";
import { Link } from "react-router-dom";
import Application from "./application";

export default function KitaInfo(props) {
    const kita = props.kita;
    const isParent = props.isParent;
    console.log("A TUT CHTO", props);

    return (
        <div className="wrap">
            <div className="post main">
                <div className="pic-info">
                    <Link to={`/kita/${kita.id}`} className="nav-link">
                        <img className="kita-pic" src="/logo.png" />
                    </Link>
                </div>
                <div className="adr-info">
                    <span className="title">{kita.kitaname}</span>
                    <p>
                        Email: {kita.email}
                        <br />
                        Adresse:
                        {kita.zip_code} &nbsp;
                        {kita.street_hous}
                        <br />
                    </p>
                </div>
                <div className="some-info">
                    Information:
                    <div className="time-of-work">
                        Open: {kita.time_of_work}
                    </div>
                    <div className="age"> Age of kids: {kita.age}</div>
                    <div className="website">Web site:{kita.website}</div>
                </div>
                <div className="application">
                    Aplication:
                    <div className="places">Places: {kita.num_of_places}</div>
                    <div className="available">Available: {kita.available}</div>
                    {isParent && kita.available > 0 && !kita.applied && (
                        <div className="appl-btn">
                            <Link to={"/application/" + kita.id}>Apply</Link>
                        </div>
                    )}
                    {isParent && kita.available == 0 && !kita.applied && (
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
    );
}
