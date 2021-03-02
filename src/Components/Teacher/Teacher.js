import React from "react";
import "./Teacher.css";

const Teacher = (props) => {
    const teacherArray = ["Arto", "Else", "Tuukka", "Nina"];

    return (
        <div className="teacher-flex-container">
            {teacherArray.map((teacher) => {
                return (
                    <div className="teacher-container">
                        <p className="teacher-p">{teacher}</p>
                        <div className="teacher-picture"></div>
                        <div
                            className="valitse-teacher-button"
                            onClick={() => props.setDisplay(2)}
                        >
                            <p className="valitse-button-p">Valitse</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Teacher;
