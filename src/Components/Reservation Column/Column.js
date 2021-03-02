import React, { useState, useEffect } from "react";
import "./Column.css";

const Column = (props) => { 
    return (
        <div className="reservation-container">
            {Object.entries(props.week).map((weekday) => {
                return (
                    <div className="reservation-column">
                        <div className="date-container">
                            <p className="date-p">{weekday}</p>
                        </div>
                        {weekday[1].map((time) => {
                            return (
                                <div className="choose-time-container">
                                    <p className="reservation-p">
                                        {time.start_time}
                                    </p>
                                    <div className="varaa-nappula">Valitse</div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Column;
