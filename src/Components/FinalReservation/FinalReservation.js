import React from "react";
import "./FinalReservation.css";

// <p>Aika on varattu opettajalle: {props.returnReservation.teacher.last_name}, {props.returnReservation.teacher.first_name} </p>

const FinalReservation = (props) => {
    return (
        <div className="infobox-container">
            <p>Ajanvaraus on päivälle: {props.returnReservation.date}</p>
            <p>Varattu aika kestää: {props.returnReservation.start_time} - {props.returnReservation.end_time}</p>
            <p>Varaajan nimi: {props.returnReservation.reserver}</p>
            <p>Varauksen syy: {props.returnReservation.title}</p>
        </div>
    )
};

export default FinalReservation;