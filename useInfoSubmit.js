import React, { useState } from "react";
import axios from "../src/axios";

export function useInfoSubmit(url, values) {
    const [error, setError] = useState();

    const val = Object.values(values);
    console.log("Values of input fields", val);
    for (const value of val) {
        if (!value) {
            setError(true);
            return;
        }
    }

    const handleSave = () => {
        axios
            .post(url, values)
            .then(({ data }) => {
                if (!data.success) {
                    setError(true);
                } else {
                    // а тут чо?
                }
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
    };

    return [error, handleSave];
}
