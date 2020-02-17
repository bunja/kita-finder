import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    receiveApplication
    //updateApplication
} from "./actions";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useInfoSubmit } from "../hooks/useInfoSubmit";

export default function Application() {
    const dispatch = useDispatch();
    const application = useSelector(state => state && state.application);
    console.log("applicationComponent", application);
    useEffect(() => {
        dispatch(receiveApplication());
    }, []);
    return (
        <div className="application">
            <p>{application.kidfirst}</p>
            <p>{application.kidlast}</p>
            <p>{application.birthdate}</p>
            <p>{application.gutschein}</p>
            <p>{application.valid_until}</p>
            <p>{application.street_hous}</p>
            <p>{application.zip_code}</p>
            <p>{application.city}</p>
        </div>
    );
}
