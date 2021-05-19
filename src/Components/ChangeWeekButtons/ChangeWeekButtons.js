import React from "react";
import "./ChangeWeekButtons.css";
import moment from "moment";

const ChangeWeekButtons = (props) => {
    let currentWeekNumber = parseInt(moment().format("W"));

    return (
        <div className="chooseweek-container">
            <div
                className="arrow-button-left"
                onClick={() =>
                    props.setCount(
                        props.counter === 0
                            ? props.counter + 0
                            : props.counter - 1
                    )
                }
            ></div>
            <p className="current-week">{currentWeekNumber + props.counter}</p>
            <div
                className="arrow-button-right"
                onClick={() => props.setCount(props.counter + 1)}
            ></div>
        </div>
    );
};

export default ChangeWeekButtons;
