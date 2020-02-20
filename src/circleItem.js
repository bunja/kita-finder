import React from "react";
//import axios from "./axios";

export default function CircleItem(props) {
    return (
        <div className="user-userpic-container">
            {props.isParent && (
                <img src="/parent.png" className="circular--square" />
            )}
            {!props.isParent && (
                <img src="/kita.png" className="circular--square" />
            )}
        </div>
    );
}
