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
                <p className="user-name">
                    First name:{parent.first}
                    <br />
                    Last name: {parent.last}
                    <br />
                    Email:&nbsp;{parent.email}
                </p>
            </div>
        </div>
    );
}
