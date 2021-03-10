import React from "react";
import "./ChangeWeekButtons.css";

const ChangeWeekButtons = (props) => {
    return (
        <div className="chooseweek-container">
            <button onClick={() => props.setCount(props.counter === 0 ? props.counter + 0 : props.counter - 1)}>Previous Week</button>
            <button onClick={() => props.setCount(props.counter + 1)}>Next Week</button>
        </div>
    )
};

export default ChangeWeekButtons;