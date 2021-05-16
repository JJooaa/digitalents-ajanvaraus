import React from "react";
import "./Form-Info.css";

const FormInfo = (props) => {
    const format = () => {
        let formatDate = props.chosenReservationDate;
        let dd = formatDate.slice(8, 10);
        let mm = formatDate.slice(5, 7);
        let yyyy = formatDate.slice(0, 4);
        let formattedDate = `${dd}.${mm}.${yyyy}`;
        return formattedDate;
    };
    return (
        <div className="formflex-second">
            <div className="infocont">
                <h3 className="form-h3">
                    Tarkista varauksen tiedot alta ja täytä tietosi viereiseen
                    lomakkeeseen. <br /> <br />
                    Painettuasi "Lähetä" et voi enää perua ajanvarausta.
                </h3>
            </div>
            <div className="detailscont">
                <h2 className="forminfo-h2">
                    Henkilö
                    <span className="spannedtext p1">{props.teacherName}</span>
                </h2>
                <h2 className="forminfo-h2">
                    Päivä
                    <span className="spannedtext p2">{format()}</span>
                </h2>
                <h2 className="forminfo-h2">
                    Aika
                    <span className="spannedtext p3">
                        {props.chosenReservationTime}
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default FormInfo;
