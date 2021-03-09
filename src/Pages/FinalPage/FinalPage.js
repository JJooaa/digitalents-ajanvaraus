import React from "react";
import "./FinalPage.css";
import FinalReservation from "../../Components/FinalReservation/FinalReservation";

const FinalPage = (props) => {
    return (
        <div className="final-info-container">
            <FinalReservation returnReservation={props.returnReservation}/>
        </div>
    )
};

export default FinalPage;