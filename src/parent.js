import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    receiveParentInfo
    //     acceptFriendRequest,
    //     unfriend
} from "./actions";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <div className="parent-profile">
            <div className="post main kitainfo parent-info">
                <img src="/parent.png" className="circular--square" />
                <div className="parent-pic-info">
                    <img className="kita-pic" src="/logo.png" />
                </div>

                <div className="adr-info">
                    <p>
                        First name:{parent.first}
                        <br />
                        Last name: {parent.last}
                        <br />
                        Email:&nbsp;{parent.email}
                    </p>
                </div>
            </div>
        </div>
    );
}
