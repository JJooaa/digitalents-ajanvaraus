import React from "react";
import "./Column.css";

const Column = () => {
    const dates = {
        Monday: {
            date: "22.02",
            times: ["9.00-9.30", "11.30-12.00"],
        },
        Tuesday: {
            date: "23.02",
            times: ["9.00-9.30", "13.30-14.00"],
        },
        Wednesday: {
            date: "24.02",
            times: ["9.00-9.30", "10.00-13.00"],
        },
        Thursday: {
            date: "25.02",
            times: ["9.00-9.30"],
        },
        Friday: {
            date: "26.02",
            times: ["9.00-9.30"],
        },
    };

    return (
        <div className="reservation-container">
            {Object.entries(dates).map((day) => {
                return (
                    <div className="reservation-column">
                        <div className="date-container">
                            <p className="date-p">{day[1].date}</p>
                            <p className="date-p">{day[0]}</p>
                        </div>
                        {day[1].times.map((x) => {
                            return (
                                <div className="choose-time-container">
                                    <p className="reservation-p">{x}</p>
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
