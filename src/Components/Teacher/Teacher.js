import React, { useState, useEffect } from "react";
import "./Teacher.css";

const Teacher = (props) => {
    // Placeholder for testing. No backend for this one, so hard coded info. 
    const teachers = {
        joa: [
            {first_name: "Person1"},
            {first_name: "Person2"},
            {first_name: "Person3"},
            {first_name: "Person4"}
        ]
    };

    return (
        <div className="teacher-flex-container">
            {teachers.joa.map((teacher) => {
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
