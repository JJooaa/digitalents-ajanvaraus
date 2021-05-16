import React from "react";
import "./FrontPage.css";
import StartButton from "../../Components/Start-Button/Start-Button";
import newlogo from "../../images/newlogo.png";
import Header from "../../Components/Header/Header";

//<img src="https://digitalentshelsinki.fi/static/DT_pysty_white.png" />

const FrontPage = (props) => {
    return (
        <div className="front-page-container">
            <Header />
            <div className="start-container">
                <h1 className="start-h1">Siirry ajanvarausjärjestelmään</h1>
                <StartButton setDisplay={props.setDisplay} />
            </div>
        </div>
    );
};

export default FrontPage;
