import React, { useState, useEffect } from "react";
import "./Teacher-Page.css";
import Teacher from "../../Components/Teacher/Teacher";
import { getTeachersFromServer } from "../../util/Api";
import Header from "../../Components/Header/Header";

const TeacherPage = (props) => {
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        getTeachersFromServer(setTeacher);
    }, []);

    return (
        <>
            <Header />
            <div className="teacher-page-container">
                <Teacher
                    setTeacherId={props.setTeacherId}
                    setDisplay={props.setDisplay}
                    teacher={teacher}
                    setTeacherName={props.setTeacherName}
                />
            </div>
        </>
    );
};

export default TeacherPage;
