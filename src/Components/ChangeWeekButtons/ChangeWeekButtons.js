import React from "react";
import "./ChangeWeekButtons.css";

const ChangeWeekButtons = (props) => {
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
            <div
                className="arrow-button-right"
                onClick={() => props.setCount(props.counter + 1)}
            ></div>
        </div>
    );
};

export default ChangeWeekButtons;
