import React from "react";
import "./FrontPage.css";
import StartButton from "../../Components/Start-Button/Start-Button";
import newlogo from "../../images/newlogo.png";

//<img src="https://digitalentshelsinki.fi/static/DT_pysty_white.png" />

const FrontPage = (props) => {
    return (
        <div className="front-page-container">
            {/* <h1 className="digi-h1">Digitalents Academy</h1> */}
            <img src={newlogo} alt="logo" />
            <h3 className="digi-h3">Ajanvaraus järjestelmä pajalaisille.</h3>
            <StartButton setDisplay={props.setDisplay}/>
        </div>
    );
};

export default FrontPage;
