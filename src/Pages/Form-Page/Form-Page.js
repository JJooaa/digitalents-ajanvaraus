import React from "react";
import Form from "../../Components/Form/Form";


const FormPage = (props) => {
    return (
        <div>
            <Form setDisplay={props.setDisplay}/>
        </div>
    )
};

export default FormPage;