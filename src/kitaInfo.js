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
                <div className="kita-info">
                    <div className="kita-info-row">
                        <span className="title">
                            <Link to={`/kita/${kita.id}`} className="nav-link">
                                {kita.kitaname}
                            </Link>
                        </span>
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
                        {isParent && kita.available > 0 && !kita.applied && (
                            <div className="appl-btn">
                                <Link to={"/application/" + kita.id}>
                                    Apply
                                </Link>
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
        </div>
    );
}
