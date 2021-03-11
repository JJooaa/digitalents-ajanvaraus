import React from "react";
import Form from "../../Components/Form/Form";
import { PostReservation } from "../../util/Api";
import "./Form-Page.css";
import FormInfo from "../../Components/Form-Info/Form-Info";

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
            <div className="formflex-container">
                <FormInfo
                    teacherName={props.teacherName}
                    chosenReservationTime={props.chosenReservationTime}
                    chosenReservationDate={props.chosenReservationDate}
                />
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
