import React, { useState, useEffect, useRef } from "react";
import "./Varaus-Page.css";
import Column from "../../Components/Reservation Column/Column";
import { getTeacherById } from "../../util/Api";
//import { getTeacherTimesById } from "../../util/Api";

const VarausPage = (props) => {
    const [counter, setCount] = useState(0);
    const [week, setWeek] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
    });

    const unmodifiedWeek = {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
    };

    const sortDays = (response) => {
        let responseArray = [];
        //  Sorts the days in start_time order. So when they get pushed into their corresponding days, its automatically the earliest time first.
        let sortedResponse = response.sort((a, b) => {
            if (a.start_time < b.start_time) {
                return -1;
            } else {
                return 1;
            }
        });
        responseArray.push(sortedResponse);
        let prevstate = { ...unmodifiedWeek };

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


    // When the page loads, get the current week for the chosen teacher.
    useEffect(() => {
        getTeacherById(props.teacherId, counter, sortDays);
    }, [counter]);

    return (
        <div className="xcontainer">
            <Column setDisplay={props.setDisplay} week={week} setCount={setCount} counter={counter}/>
        </div>
    );
};

export default VarausPage;
