import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    receiveKitaInfo
    //     acceptFriendRequest,
    //     unfriend
} from "./actions";

export default function Kita() {
    const dispatch = useDispatch();
    const kita = useSelector(state => state && state.kita);
    console.log("kita kitaComponent", kita);
    useEffect(() => {
        dispatch(receiveKitaInfo());
    }, []);
    if (!kita) {
        return <div>NOTHING</div>;
    }
    return (
        <div className="user">
            <div>
                <div className="user-userpic-container">
                    <img src="/logo.png" />
                </div>
            </div>
            <div className="user-info">
                <h3 className="user-name">
                    {kita.kitaname} {parent.last}
                </h3>
                <div className="email">{parent.email}&nbsp;</div>
            </div>
        </div>
    );
}
