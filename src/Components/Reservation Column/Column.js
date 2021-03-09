import React, { useState, useEffect } from "react";
import "./Column.css";

const Column = (props) => {
    return (
        <div className="asdas">
            <button onClick={() => props.setCount(props.counter - 1)}>Previous</button>
            <button onClick={() => props.setCount(props.counter + 1)}>Next Week</button>
            <div className="reservation-container">
                {Object.entries(props.week).map((weekday) => {
                    return (
                        <div className="reservation-column">
                            <div className="date-container">
                                <p className="date-p">{weekday[0]}</p>
                                <p className="date-p">
                                    {weekday[1][0] ? weekday[1][0].date : ""}
                                </p>
                            </div>
                            {weekday[1].map((time) => {
                                return (
                                    <div className="choose-time-container">
                                        <p className="reservation-p">
                                            {time.start_time}
                                        </p>
                                        <div
                                            className="varaa-nappula"
                                            id={time.id}
                                            onClick={(e) => {
                                                console.log(e.target.id);
                                                props.setPostRequest({reservableTime_id: e.target.id})
                                                props.setDisplay(3);
                                            }}
                                        >
                                            Valitse
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Column;
