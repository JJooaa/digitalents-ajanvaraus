import React from "react";
import "./Header.css";
import newLogo from "../../images/newlogo.png";

const Header = () => {
    return (
        <div className="headercont">
            <img className="logo" src={newLogo} />
            <h2 className="headertext">Ajanvarausjärjestelmä</h2>
        </div>
    )
};

export default Header;