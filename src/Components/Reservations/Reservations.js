import React, { useState } from "react";
import Column from "../Reservation Column/Column";
import "./Reservations.css";
import { getTeacherById } from "../../util/Api";

const Reservations = () => {
    return (
        <div>
            <Column />
            <button onClick={() => getTeacherById(2, "2021-02-26")}>
                Get teachers data
            </button>
        </div>
    );
};

export default Reservations;
