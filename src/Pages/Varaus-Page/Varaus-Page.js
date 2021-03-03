import React, { useState, useEffect, useRef } from "react";
import "./Varaus-Page.css";
import Column from "../../Components/Reservation Column/Column";
import { getTeacherById } from "../../util/Api";

const VarausPage = (props) => {
    const [data, setData] = useState([]);
    const [week, setWeek] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
    });

    useEffect(() => {
        getTeacherById(2, 0, setData);
    }, [])

    const sortDays = () => {
        let prevstate = {...week};
        data.map((time) => {
            if (time.weekday === "Monday") {
                prevstate.Monday.push(time);
            } else if (time.weekday === "Tuesday") {
                prevstate.Tuesday.push(time);
            } else if (time.weekday === "Wednesday") {
                prevstate.Wednesday.push(time);
            } else if (time.weekday === "Thursday") {
                prevstate.Thursday.push(time);
            } else if (time.weekday === "Friday") {
                prevstate.Friday.push(time);
            } else {
                console.log("Error");
            }
        });
        setWeek(prevstate);
    };

    return (
        <div className="xcontainer">
            <button onClick={() => getTeacherById(2, 0, setData)}>
                Step 1, make the api Call and add to State Data
            </button>
            <button onClick={() => sortDays()}>
                Step 2, Sort days and add them to week Object
            </button>
            <button onClick={() => console.log(week)}>
                Step 3, Show Week Object with new dates
            </button>
            <Column setDisplay={props.setDisplay} week={week} />
        </div>
    );
};

export default VarausPage;
