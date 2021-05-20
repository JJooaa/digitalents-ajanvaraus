import React, { useState, useEffect, useRef } from "react";
import "./Varaus-Page.css";
import Column from "../../Components/Reservation Column/Column";
import { getTeacherById } from "../../util/Api";
//import { getTeacherTimesById } from "../../util/Api";
import ChangeWeekButtons from "../../Components/ChangeWeekButtons/ChangeWeekButtons";
import Header from "../../Components/Header/Header";

const VarausPage = (props) => {
    const [counter, setCount] = useState(0);
    // In this build I've added template data to a state that handles holding the api data. 
    // So the functionality for getting nexts weeks data is not there.
    const [week, setWeek] = useState({
        Maanantai: [
            {
                date: "2021-05-10T00:00:00",
                weekday: "Monday",
                start_time: "09:30",
                id: "56",
            },
            {
                date: "2021-05-10T00:00:00",
                weekday: "Monday",
                start_time: "09:30",
                id: "56",
            },
        ],
        Tiistai: [
            {
                date: "2021-05-11T00:00:00",
                weekday: "Tuesday",
                start_time: "11:30",
                id: "56",
            },
        ],
        Keskiviikko: [
            {
                date: "2021-05-12T00:00:00",
                weekday: "Wednesday",
                start_time: "12:30",
                id: "56",
            },
        ],
        Torstai: [
            {
                date: "2021-05-13T00:00:00",
                weekday: "Thursday",
                start_time: "14:30",
                id: "56",
            },
        ],
        Perjantai: [
            {
                date: "2021-03-14T00:00:00",
                weekday: "Friday",
                start_time: "10:30",
                id: "56",
            },
        ],
    });

    const unmodifiedWeek = {
        Maanantai: [],
        Tiistai: [],
        Keskiviikko: [],
        Torstai: [],
        Perjantai: [],
    };

    // GENERATE DAYS FOR THE YEAR.
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
        let formattedDay = `${dd}.${mm}`;
        currWeekDates.push(formattedDay);
    }

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

    // When the page loads, get the current week for the chosen teacher. Also update everytime counter changes so we fetch the data for next week.
    useEffect(() => {
        getTeacherById(props.teacherId, counter, sortDays);
    }, [counter]);

    return (
        <>
            <Header />
            <div className="xcontainer">
                <p className="ajanvaraus-p">
                    Ajat henkilölle <span>{props.teacherName}</span>
                </p>
                <ChangeWeekButtons setCount={setCount} counter={counter} />
                <Column
                    setDisplay={props.setDisplay}
                    week={week}
                    currWeekDates={currWeekDates}
                    setChosenReservationDate={props.setChosenReservationDate}
                    setPostRequest={props.setPostRequest}
                    postRequest={props.postRequest}
                    setChosenReservationTime={props.setChosenReservationTime}
                />
            </div>
        </>
    );
};

export default VarausPage;
