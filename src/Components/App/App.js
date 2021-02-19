import React, { useState } from "react";
import "./App.css";
import FrontPage from "../../Pages/Front-Page/FrontPage";
import TeacherPage from "../../Pages/Teacher-Page/Teacher-Page";
import VarausPage from "../../Pages/Varaus-Page/Varaus-Page";


const App = () => {
    const [display, setDisplay] = useState(2);
    return (
        <div>
            {display === 0 ? <FrontPage onClick={setDisplay} /> : null}
            {display === 1 ? <TeacherPage /> : null}
            {display === 2 ? <VarausPage /> : null}
        </div>
    );
};

export default App;
