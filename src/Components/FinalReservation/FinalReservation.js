import React from "react";
import "./FinalReservation.css";

// <p>Aika on varattu opettajalle: {props.returnReservation.teacher.last_name}, {props.returnReservation.teacher.first_name} </p>

const FinalReservation = (props) => {
    return (
        <div className="infobox-container">
            <p>Ajanvaraus on päivälle: {props.returnReservation.date}</p>
            <p>Kello: {props.returnReservation.start_time}</p>
            <p>Ajanvaraus tehty henkilölle: {props.returnReservation.teacher_first_name} {props.returnReservation.teacher_last_name}</p>
            <p>Varauksen syy: {props.returnReservation.title}</p>
        </div>
    )
};

export default FinalReservation;