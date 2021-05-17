import React, { useState } from "react";
import "./App.css";
import FrontPage from "../../Pages/Front-Page/FrontPage";
import TeacherPage from "../../Pages/Teacher-Page/Teacher-Page";
import VarausPage from "../../Pages/Varaus-Page/Varaus-Page";
import FormPage from "../../Pages/Form-Page/Form-Page";
import FinalPage from "../../Pages/FinalPage/FinalPage";

const App = () => {
    const [display, setDisplay] = useState(3);
    const [teacherId, setTeacherId] = useState(0);
    const [postRequest, setPostRequest] = useState({
        title: "",
        reserver: "",
        reservableTime_id: 0,
    });
    const [returnReservation, setReturnReservation] = useState([]);
    const [teacherName, setTeacherName] = useState("");
    const [chosenReservationTime, setChosenReservationTime] = useState([]);
    const [chosenReservationDate, setChosenReservationDate] = useState([]);

    return (
        <div>
            {display === 0 ? <FrontPage setDisplay={setDisplay} /> : null}
            {display === 1 ? (
                <TeacherPage
                    setDisplay={setDisplay}
                    setTeacherId={setTeacherId}
                    setTeacherName={setTeacherName}
                />
            ) : null}
            {display === 2 ? (
                <VarausPage
                    setDisplay={setDisplay}
                    setPostRequest={setPostRequest}
                    postRequest={postRequest}
                    teacherId={teacherId}
                    teacherName={teacherName}
                    setChosenReservationTime={setChosenReservationTime}
                    setChosenReservationDate={setChosenReservationDate}
                />
            ) : null}
            {display === 3 ? (
                <FormPage
                    setDisplay={setDisplay}
                    setPostRequest={setPostRequest}
                    postRequest={postRequest}
                    setReturnReservation={setReturnReservation}
                    teacherName={teacherName}
                    chosenReservationTime={chosenReservationTime}
                    chosenReservationDate={chosenReservationDate}
                />
            ) : null}
            {display === 4 ? (
                <FinalPage
                    returnReservation={returnReservation}
                    chosenReservationDate={chosenReservationDate}
                    chosenReservationTime={chosenReservationTime}
                    teacherName={teacherName}
                    setDisplay={setDisplay}
                />
            ) : null}
        </div>
    );
};

export default App;
