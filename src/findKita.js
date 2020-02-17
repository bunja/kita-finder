import axios from "./axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FindKita() {
    // const [mostRecentUsers, setMostRecentUsers] = useState([]);
    const [val, setVal] = useState("");
    const [kitas, setKitas] = useState([]);

    // useEffect(() => {
    //     axios.get("/users").then(({ data }) => {
    //         //console.log("data.rows AGRHHHHH", data.rows);
    //         setMostRecentUsers(data.rows);
    //         //console.log("most recent users", mostRecentUsers);
    //     });
    // }, []);

    const onChange = ({ target }) => {
        setVal(target.value);
    };

    useEffect(() => {
        console.log("val useEffect", val);
        //setMostRecentUsers([]);
        if (val == "") {
            return;
        }
        let ignore = false;
        axios.post("/api/find/kita", { val: val }).then(({ data }) => {
            if (!ignore) {
                setKitas(data.rows);
                console.log("matching users inside then", users);
            }
        });

        return () => {
            ignore = true;
        };
    }, [val]);

    // let usr = [];
    // if (mostRecentUsers.length != 0) {
    //     usr = mostRecentUsers;
    // } else if (mostRecentUsers.length == 0) {
    //     usr = users;
    // }
    return (
        <div>
            <div className="form-element mb-10">
                <p>Enter zip_code</p>
                <input onChange={onChange} />
            </div>
            <div>
                {kitas.map(kita => {
                    return (
                        <div key={kita.id} className="kita">
                            <div className="friend-userpic-container">
                                <img
                                    className="friend-userpic"
                                    src={kita.imageurl}
                                />
                            </div>
                            <h4>
                                <Link
                                    to={`/user/${kita.id}`}
                                    className="nav-link"
                                >
                                    {kita.kitaname} {kita.email}
                                </Link>
                                <p>
                                    {" "}
                                    ADRESS: Zip:{kita.zip_code}
                                    City:{kita.city}
                                    Address:{kita.street_hous}
                                </p>
                                <p>{kita.time_of_work}</p>
                                <p>{kita.num_of_places}</p>
                            </h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
