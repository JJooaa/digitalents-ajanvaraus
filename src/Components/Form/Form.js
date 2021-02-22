import React from "react";
import "./Form.css";

const Form = () => {
    return (
        <div className="form-container">
            <h2 className="form-h2">Lisätiedot lomake</h2>
            <label>
                <p className="label-p">Nimi</p>
            </label>
            <input type="text" placeholder={"Nimi"} />

            <label>
                <p className="label-p">Lisätietoa ( tapaamisen syy ) </p>
            </label>
            <input type="text" placeholder={"Lisätietoa"}/>
            <div className="center-button">
                <p className="button-p">Lähetä</p>
            </div>
        </div>
    );
};

export default Form;
