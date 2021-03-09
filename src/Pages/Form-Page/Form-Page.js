import React from "react";
import Form from "../../Components/Form/Form";
import { PostReservation } from "../../util/Api";

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
            <Form
                setDisplay={props.setDisplay}
                setPostRequest={props.setPostRequest}
                postRequest={props.postRequest}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </div>
    );
};

export default FormPage;
