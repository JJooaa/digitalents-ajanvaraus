import React from "react";
import "./FinalPage.css";
import Header from "../../Components/Header/Header";

const FinalPage = (props) => {
    const format = () => {
        let formatDate = props.chosenReservationDate;
        let dd = formatDate.slice(8, 10);
        let mm = formatDate.slice(5, 7);
        let yyyy = formatDate.slice(0, 4);
        let formattedDate = `${dd}.${mm}.${yyyy}`;
        return formattedDate;
    };

    return (
        <>
            <Header />
            <h2 className="final-header">Varauksesi on suoritettu!</h2>
            <div className="final-info-container">
                <h2 className="final-h2">Varauksen tiedot</h2>
                <div className="detailscont nomargin">
                    <h2 className="forminfo-h2">
                        Henkilö{" "}
                        <span className="spannedtext p1">
                            {props.teacherName}
                        </span>
                    </h2>
                    <h2 className="forminfo-h2">
                        Päivä <span className="spannedtext p2">{format()}</span>
                    </h2>
                    <h2 className="forminfo-h2">
                        Aika{" "}
                        <span className="spannedtext p3">
                            {props.chosenReservationTime}
                        </span>
                    </h2>
                </div>
            </div>
            <div className="etusivulle" onClick={() => props.setDisplay(0)}>
                Etusivulle
            </div>
        </>
    );
};

export default FinalPage;
