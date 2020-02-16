import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    receiveParentInfo
    //     acceptFriendRequest,
    //     unfriend
} from "./actions";

export default function Parent() {
    const dispatch = useDispatch();
    const parent = useSelector(state => state && state.parent);
    console.log("parent parentComponent", parent);
    useEffect(() => {
        dispatch(receiveParentInfo());
    }, []);
    if (!parent) {
        return <div>HUI TEBE</div>;
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
                    {parent.first} {parent.last}
                </h3>
                <div className="email">{parent.email}&nbsp;</div>
            </div>
        </div>
    );
}
