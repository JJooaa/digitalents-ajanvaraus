import React from "react";
import "./Column.css";

const Column = () => {

    const array = ["9.00-9.30", "9.30-10.00", "10.00-10.30"];

    const createTimeContainer = () => {

    };
    return (
        <div className="reservation-column">
            <div className="date-container">
                <p className="date-p">19.2</p>
                <p className="date-p">Perjantai</p>
            </div>
            <div className="choose-time-container">
                <p className="column-p">9.30-10.00</p>
                <div className="choose-button">
                    <p className="cp">Valitse</p>
                </div>
            </div>
        </div>

    )
};

export default Column;