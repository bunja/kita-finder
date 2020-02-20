import axios from "./axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import KitaInfo from "./kitaInfo";
import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
import { useDispatch, useSelector } from "react-redux";

export default function FindKita(props) {
    const dispatch = useDispatch();
    const [val, setVal] = useStateWithLocalStorage("myValueInLocalStorage");

    // const [val, setVal] = useState("");
    const [kitas, setKitas] = useState([]);
    // const [value, setValue] = useStateWithLocalStorage("myValueInLocalStorage");
    const isParent = useSelector(state => state && state.isParent);
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
        axios.post("/api/find/kita", { val: val }).then(({ data }) => {
            if (!ignore) {
                setKitas(data.rows);
                //console.log("matching kitas inside then", kitas);
            }
        });

        return () => {
            ignore = true;
        };
    }, [val]);

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
