import React, { useState, useEffect, useRef } from "react";
import "./Varaus-Page.css";
import Column from "../../Components/Reservation Column/Column";
import { getTeacherById } from "../../util/Api";
import { getTeacherTimesById } from "../../util/Api";

const VarausPage = (props) => {
    const [week, setWeek] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
    });

    const sortDays = (response) => {
        let responseArray = [];
        responseArray.push(response);
        let prevstate = { ...week };
        responseArray[0].map((time) => {
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

    useEffect(() => {
        getTeacherById(props.teacherId, 0, sortDays);
    }, []);

    // Next Page functionality 
    //-> Just call getTeacherById(props.teacherId, week, sortDays)
    //With a different week

    return (
        <div className="xcontainer">
            <Column setDisplay={props.setDisplay} week={week} />
        </div>
    );
};

export default VarausPage;
