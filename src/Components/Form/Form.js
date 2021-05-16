import React from "react";
import "./Form.css";

const Form = (props) => {
    return (
        <div className="form-container">
            <form onSubmit={props.handleSubmit}>
                <label>
                    <p className="label-p padding1">Nimi</p>
                    <input
                        autoComplete="off"
                        spellCheck="false"
                        type="text"
                        value={props.postRequest.reserver || ""}
                        onChange={props.handleChange}
                        name="reserver"
                    />
                </label>
                <label>
                    <p className="label-p padding2">Lisätietoa</p>
                    <textarea
                        autoComplete="off"
                        spellCheck="false"
                        type="text"
                        value={props.postRequest.title || ""}
                        onChange={props.handleChange}
                        name="title"
                    />
                </label>

                <input className="center-button" type="submit" value="Lähetä" />
            </form>
        </div>
    );
};

export default Form;
