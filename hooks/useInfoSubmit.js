import React, { useState } from "react";
import axios from "../src/axios";

export function useInfoSubmit(url, values) {
    const [error, setError] = useState();

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
