import React from "react";
import "./Form.css";

const Form = (props) => {
    return (
        <div className="form-container">
            <form onSubmit={props.handleSubmit}>
                <h2 className="form-h2">Lisää tietosi alla oleviin laatikoihin</h2>
                <label>
                    <p className="label-p">Nimi: (Etunimi, Sukunimi)</p>
                    <input
                        type="text"
                        value={props.postRequest.reserver || ""}
                        onChange={props.handleChange}
                        name="reserver"
                    />
                </label>
                <label>
                    <p className="label-p">Lisätietoa: (tapaamisen syy)</p>
                    <input
                        type="text"
                        value={props.postRequest.title || ""}
                        onChange={props.handleChange}
                        name="title"
                    />
                </label>

                <input className="center-button"type="submit" value="Lähetä" />
            </form>
        </div>
    );
};

export default Form;
