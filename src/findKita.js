import axios from "./axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import KitaInfo from "./kitaInfo";
import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";

export default function FindKita(props) {
    // const [val, setVal] = useStateWithLocalStorage("myValueInLocalStorage");
    const [isParent, setIsParent] = useState(false);
    const [val, setVal] = useState("");
    const [kitas, setKitas] = useState([]);
    // const [value, setValue] = useStateWithLocalStorage("myValueInLocalStorage");

    console.log("!!!! FIND KITA??? is that parent==>", isParent);

    const onChange = ({ target }) => {
        setVal(target.value);
    };

    useEffect(() => {
        //console.log("val useEffect", val);

        if (val == "") {
            return;
        }
        let ignore = false;
        axios.post("/api/find/kita", { val: val }).then(res => {
            if (!ignore) {
                setKitas(res.data.rows);
                setIsParent(res.data.isParent);
                console.log("НУ КАК ПРОЕКТ", res.data.isParent);
            }
        });

        return () => {
            ignore = true;
        };
    }, [val]);

    return (
        <div className="kita-profile findkita">
            {isParent && <img src="/parent.png" className="circular--square" />}
            {!isParent && <img src="/kita.png" className="circular--square" />}
            <div className="findkita-container">
                <div className="form-element">
                    <p>Enter zip code:</p>
                    <input
                        className="kita-search"
                        onChange={onChange}
                        defaultValue={val}
                    />
                </div>

                {kitas.map(kita => {
                    return (
                        <div key={kita.id} className="kita">
                            <KitaInfo kita={kita} isParent={isParent} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
