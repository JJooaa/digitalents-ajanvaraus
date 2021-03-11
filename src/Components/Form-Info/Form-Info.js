import React from "react";
import "./Form-Info.css";

const FormInfo = (props) => {
    const format = () => {
        let formatDate = props.chosenReservationDate;
        let dd = formatDate.slice(8, 10);
        let mm = formatDate.slice(5, 7);
        let yyyy = formatDate.slice(0, 4);
        let formattedDate = `${dd}/${mm}/${yyyy}`;
        return formattedDate;
    };
    return (
        <div className="formflex-second">
            <h3 className="form-h3">
                Seuraavaksi täytä vieressä oleva lomake. <br /> Painettua
                "lähetä" nappulaa, et voi perua lähettämääsi ajanvarausta.
                <br />
                <br />
                Tarpeen tullessa voit soittaa Digitalents Academyn
                henkilökunnalle.
            </h3>
            <h2 className="forminfo-h2">
                Ajanvarausta henkilölle: {props.teacherName} <br />
                Aika: {props.chosenReservationTime} <br />
                Päivämäärä: {format()}
            </h2>
        </div>
    );
};

export default FormInfo;
