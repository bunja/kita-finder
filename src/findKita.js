import axios from "./axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import KitaInfo from "./kitaInfo";

export default function FindKita() {
    const [val, setVal] = useState("");
    const [kitas, setKitas] = useState([]);

    const onChange = ({ target }) => {
        setVal(target.value);
    };

    useEffect(() => {
        console.log("val useEffect", val);

        if (val == "") {
            return;
        }
        let ignore = false;
        axios.post("/api/find/kita", { val: val }).then(({ data }) => {
            if (!ignore) {
                setKitas(data.rows);
                console.log("matching kitas inside then", kitas);
            }
        });

        return () => {
            ignore = true;
        };
    }, [val]);

    console.log("KiTaS", kitas);

    return (
        <div>
            <div>{kitas.available}</div>
            <div className="form-element mb-10">
                <p>Enter zip_code</p>
                <input onChange={onChange} />
            </div>
            <div>
                {kitas.map(kita => {
                    return (
                        <div key={kita.id} className="kita">
                            <KitaInfo
                                id={kita.id}
                                kita={kita.kitaname}
                                phone={kita.phone_number}
                                email={kita.email}
                                zip={kita.zip_code}
                                street={kita.street_hous}
                                time={kita.time_of_work}
                                places={kita.num_of_places}
                                available={kita.available}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
