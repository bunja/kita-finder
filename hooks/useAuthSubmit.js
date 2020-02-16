import React, { useState } from "react";
import axios from "../src/axios";

export function useAuthSubmit(url, values, replUrl) {
    const [error, setError] = useState();

    const val = Object.values(values);
    console.log("Values of input fields", val);
    for (const value of val) {
        if (!value) {
            setError(true);
            return;
        }
    }

    const handleSubmit = () => {
        axios
            .post(url, values)
            .then(({ data }) => {
                if (!data.success) {
                    setError(true);
                } else {
                    location.replace(replUrl);
                }
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
    };

    return [error, handleSubmit];
}
