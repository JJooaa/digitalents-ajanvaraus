import React, { useState, useEffect, useRef } from "react";
import "./Varaus-Page.css";
import Column from "../../Components/Reservation Column/Column";
import { getTeacherById } from "../../util/Api";
//import { getTeacherTimesById } from "../../util/Api";
import ChangeWeekButtons from "../../Components/ChangeWeekButtons/ChangeWeekButtons";

const VarausPage = (props) => {
    const [counter, setCount] = useState(0);
    const [week, setWeek] = useState({
        Maanantai: [],
        Tiistai: [],
        Keskiviikko: [],
        Torstai: [],
        Perjantai: [],
    });

    const unmodifiedWeek = {
        Maanantai: [],
        Tiistai: [],
        Keskiviikko: [],
        Torstai: [],
        Perjantai: [],
    };

    let currDay = new Date();
    let currWeekDates = [];
    currDay.setDate(currDay.getDate() + counter * 7);
    for (let i = 1; i <= 7; i++) {
        let first = currDay.getDate() - currDay.getDay() + i;
        let day = new Date(currDay.setDate(first)).toISOString().slice(0, 10);
        let dd = day.slice(8, 10);
        let mm = day.slice(5, 7);
        let yyyy = day.slice(0, 4);
        // This date below is the new format for dd/mm/yyyy that displays on everyweekday
        let formattedDay = `${dd}/${mm}`;
        currWeekDates.push(formattedDay);
    };

    //  Sorts the days in start_time order. So when they get pushed into their corresponding days, its automatically the earliest time first.
    const sortDays = (response) => {
        let responseArray = [];
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
                prevstate.Maanantai.push(time);
            } else if (time.weekday === "Tuesday") {
                prevstate.Tiistai.push(time);
            } else if (time.weekday === "Wednesday") {
                prevstate.Keskiviikko.push(time);
            } else if (time.weekday === "Thursday") {
                prevstate.Torstai.push(time);
            } else if (time.weekday === "Friday") {
                prevstate.Perjantai.push(time);
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
            <p className="ajanvaraus-p">
                Ajanvaraus henkilölle: <span>{props.teacherName}</span>
            </p>
            <ChangeWeekButtons setCount={setCount} counter={counter} />
            <Column
                setDisplay={props.setDisplay}
                week={week}
                currWeekDates={currWeekDates}
                setCount={setCount}
                setChosenReservationDate={props.setChosenReservationDate}
                counter={counter}
                setPostRequest={props.setPostRequest}
                postRequest={props.postRequest}
                setChosenReservationTime={props.setChosenReservationTime}
            />
        </div>
    );
};

export default VarausPage;
