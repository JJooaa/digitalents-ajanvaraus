import React from "react";
import Form from "../../Components/Form/Form";
import { PostReservation } from "../../util/Api";
import "./Form-Page.css";

const FormPage = (props) => {
    const handleSubmit = (event) => {
        PostReservation(props.postRequest, props.setReturnReservation);
        props.setDisplay(4);
        event.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setPostRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <button onClick={() => props.setDisplay(2)}>Taaksepäin</button>
            <div className="formflex-container">
                <div className="formflex-second">
                    <h3 className="form-h3">
                        Seuraavaksi täytä vieressä oleva lomake. <br />{" "}
                        Painettua "lähetä" nappulaa, et voi perua lähettämääsi
                        ajanvarausta.
                        <br />
                        <br />
                        Tarpeen tullessa voit soittaa Digitalents Academyn
                        henkilökunnalle.
                    </h3>
                    <h2 className="forminfo-h2">
                        Ajanvarausta henkilölle: {props.teacherName} <br />
                        Aika: {props.chosenReservationTime} <br />
                        Päivämäärä: {props.chosenReservationDate}
                    </h2>
                </div>
                <Form
                    setDisplay={props.setDisplay}
                    setPostRequest={props.setPostRequest}
                    postRequest={props.postRequest}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
};

export default FormPage;
