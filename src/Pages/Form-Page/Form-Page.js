import React, { useEffect } from "react";
import Form from "../../Components/Form/Form";
import { PostReservation } from "../../util/Api";
import "./Form-Page.css";
import FormInfo from "../../Components/Form-Info/Form-Info";
import Header from "../../Components/Header/Header";

const FormPage = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // Validation for code, checks if inputs are valid.
    const handleValidation = () => {
        let formIsValid = true;
        let formValues = props.postRequest;
        let errors = {};

        //Check for name, cant be empty and can only contain letters.
        if (!formValues.reserver) {
            formIsValid = false;
        }

        if (typeof formValues.reserver !== "undefined") {
            if (!formValues.reserver.match(/^[a-zA-ZåöäÅÖÄ]+$/)) {
                formIsValid = false;
            }
        }

        //Check for title, can only contain letters and cant be empty.
        if (!formValues.title) {
            formIsValid = false;
        }

        if (typeof formValues.title !== "undefined") {
            if (!formValues.title.match(/^[a-zA-ZåöäÅÖÄ]+$/)) {
                formIsValid = false;
            }
        }
        return formIsValid;
    };

    const handleSubmit = (event) => {
        if (handleValidation()) {
            PostReservation(props.postRequest, props.setReturnReservation);
            props.setDisplay(4);
        }
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
        <>
            <Header />
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
        </>
    );
};

export default FormPage;
