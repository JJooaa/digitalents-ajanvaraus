import React, { useState, useEffect } from "react";
import "./Teacher.css";

const Teacher = (props) => {
    const placeholder = {
        joa: [
            {first_name: "Else"},
            {first_name: "Arto"},
            {first_name: "Nina"},
            {first_name: "Tuukka"},
        ]
    }
    return (
        <div className="teacher-flex-container">
            {placeholder.joa.map((teacher) => {
                return (
                    <div className="teacher-container" key={teacher.id}>
                        <p className="teacher-p">{teacher.first_name}</p>
                        <div className="teacher-picture"></div>
                        <button
                            className="valitse-teacher-button"
                            id={teacher.id}
                            onClick={(e) => {
                                props.setTeacherId(e.target.id);
                                props.setTeacherName(teacher.first_name);
                                props.setDisplay(2);
                            }}
                        >
                            Valitse
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Teacher;
