import React, { useState } from "react";
import axios from "../src/axios";

export function useUpdate(url, oldValues, newValues) {
    const [error, setError] = useState();

    const handleSave = () => {
        const values = { ...oldValues, ...newValues };
        console.log("useInfoSubmit.handleSave", values);

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
