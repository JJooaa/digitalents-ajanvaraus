import React from "react";
import "./ChangeWeekButtons.css";

const ChangeWeekButtons = (props) => {
    return (
        <div className="chooseweek-container">
            <button
                className="arrow-button"
                onClick={() =>
                    props.setCount(
                        props.counter === 0
                            ? props.counter + 0
                            : props.counter - 1
                    )
                }
            >
                <span className="arrow-hover">&#8592;</span>
            </button>
            <button
                className="arrow-button"
                onClick={() => props.setCount(props.counter + 1)}
            >
                <span className="arrow-hover">&#8594;</span>
            </button>
        </div>
    );
};

export default ChangeWeekButtons;
