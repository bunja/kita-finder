import React, { useState } from "react";
import axios from "../src/axios";

export function useAuthSubmit(url, values, replUrl) {
    const [error, setError] = useState(false);

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
