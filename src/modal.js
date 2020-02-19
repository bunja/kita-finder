import React from "react";

export default function Modal(props) {
    return (
        <div>
            <div className="modal-overlay" />
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="modal-close-button"
                            onClick={props.closeModal}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <p>Your application was sent successfully!!🚀</p>
                </div>
            </div>
        </div>
    );
}
