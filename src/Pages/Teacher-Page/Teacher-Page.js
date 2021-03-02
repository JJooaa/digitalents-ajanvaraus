import React from "react";
import "./Teacher-Page.css";
import Teacher from "../../Components/Teacher/Teacher";
import { getTeachersFromServer } from "../../util/Api";

const TeacherPage = (props) => {
    return (
        <div className="teacher-page-container">
            <Teacher setDisplay={props.setDisplay}/>
            <button onClick={() => getTeachersFromServer()}>
                get teachers
            </button>
        </div>
    );
};

export default TeacherPage;
