import React from "react";
import "./Start-Button.css";

const StartButton = (props) => {
    return (
        <div className="start-button" onClick={() => props.setDisplay(1)}>
            <h2 className="start-button-h2">Aloita</h2>
        </div>
    );
};

export default StartButton;
