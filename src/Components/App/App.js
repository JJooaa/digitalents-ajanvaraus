import React, { useState } from "react";
import "./App.css";
import FrontPage from "../../Pages/Front-Page/FrontPage";
import TeacherPage from "../../Pages/Teacher-Page/Teacher-Page";
import VarausPage from "../../Pages/Varaus-Page/Varaus-Page";
import FormPage from "../../Pages/Form-Page/Form-Page";

const App = () => {
    const [display, setDisplay] = useState(0);

    return (
        <div>
            {display === 0 ? <FrontPage setDisplay={setDisplay} /> : null}
            {display === 1 ? <TeacherPage setDisplay={setDisplay} /> : null}
            {display === 2 ? <VarausPage setDisplay={setDisplay} /> : null}
            {display === 3 ? <FormPage setDisplay={setDisplay} /> : null}
        </div>
    );
};

export default App;
