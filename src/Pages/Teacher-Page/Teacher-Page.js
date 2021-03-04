import React, { useState, useEffect } from "react";
import "./Teacher-Page.css";
import Teacher from "../../Components/Teacher/Teacher";
import { getTeachersFromServer } from "../../util/Api";

const TeacherPage = (props) => {
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        getTeachersFromServer(setTeacher);
    }, []);

    return (
        <div className="teacher-page-container">
            <Teacher
                setTeacherId={props.setTeacherId}
                setDisplay={props.setDisplay}
                teacher={teacher}
            />
            {props.teacherId > 0 ? (
                <button onClick={() => props.setDisplay(2)}>Seuraava</button>
            ) : null}
        </div>
    );
};

export default TeacherPage;
