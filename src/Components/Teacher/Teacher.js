import React, { useState, useEffect } from "react";
import "./Teacher.css";

const Teacher = (props) => {
    return (
        <div className="teacher-flex-container">
            {props.teacher.map((teacher) => {
                return (
                    <div className="teacher-container">
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
                        >Valitse
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Teacher;
