import axios from "./axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import KitaInfo from "./kitaInfo";
import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
import { useDispatch, useSelector } from "react-redux";

export default function FindKita(props) {
    const [val, setVal] = useStateWithLocalStorage("myValueInLocalStorage");
    const [isParent, setIsParent] = useState([]);
    // const [val, setVal] = useState("");
    const [kitas, setKitas] = useState([]);
    // const [value, setValue] = useStateWithLocalStorage("myValueInLocalStorage");

    // console.log("kita kitaComponent", kita);
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
                console.log("НУ КАК ЖЕЖ ЗАЕБАЛ ЭТОТ ПРОЕКТ", res.data.isParent);
            }
        });

        return () => {
            ignore = true;
        };
    }, [val]);

    console.log("НУ КАК ЖЕЖ ЗАЕБАЛ ЭТОТ ПРОЕКТ22", isParent);

    return (
        <div>
            <div>{kitas.available}</div>
            <div className="form-element mb-10">
                <p>Enter zip code:</p>
                <input onChange={onChange} defaultValue={val} />
            </div>
            <div>
                {kitas.map(kita => {
                    return (
                        <div key={kita.id} className="kita">
                            <KitaInfo kita={kita} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
