import React, { useState } from "react";
import axios from "../src/axios";

export function useUpdate(url, oldValues, newValues) {
    const [error, setError] = useState();

    const handleSave = () => {
        const values = { ...oldValues, ...newValues };
        console.log("useInfoSubmit.handleSave", values);

        let ignore = false;
        axios
            .post("/api/find/kita", { val: val })
            .then(({ data }) => {
                if (!ignore) {
                    setKitas(data.rows);
                    //console.log("matching kitas inside then", kitas);
                }
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });

        return () => {
            ignore = true;
        };
    };

    return [error, handleSave];
}
