import React from "react";
import "./Teacher-Page.css";
import Teacher from "../../Components/Teacher/Teacher";
import { getTeachersFromServer } from "../../util/Api";

const TeacherPage = () => {
    return (
        <div className="teacher-page-container">
            <Teacher />
            <button onClick={() => getTeachersFromServer()}>
                get teachers
            </button>
        </div>
    );
};

export default TeacherPage;
