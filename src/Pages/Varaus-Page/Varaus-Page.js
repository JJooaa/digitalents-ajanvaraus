import React, { useState, useEffect } from "react";
import "./Varaus-Page.css";
import Column from "../../Components/Reservation Column/Column";
import { getTeacherById } from "../../util/Api";

const VarausPage = (props) => {
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(true);
    const [week, setWeek] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
    });

    const sortDays = () => {
        data.map((time) => {
            if (time.weekday === "Monday") {
                week.Monday.push(time);
            } else if (time.weekday === "Tuesday") {
                week.Tuesday.push(time);
            } else if (time.weekday === "Wednesday") {
                week.Wednesday.push(time);
            } else if (time.weekday === "Thursday") {
                week.Thursday.push(time);
            } else if (time.weekday === "Friday") {
                week.Friday.push(time);
            } else {
                console.log("Error");
            }
        });
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
            {mounted && <Column setDisplay={props.setDisplay} week={week} />}
        </div>
    );
};

export default VarausPage;
