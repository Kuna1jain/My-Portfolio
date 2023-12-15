import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
    return(
    <div className="bars">
        <div className="Reactjs">
            <p>Reactjs</p>
            <ProgressBar completed={80}
            bgColor="yellow"
            animateOnRender={true}/>
        </div>
        <div className="JavaScript">
            <p>Javascript</p>
            <ProgressBar completed={80}
            // bgColor="yellow"
            animateOnRender={true}/>
        </div>
        <div className="DSA">
            <p>Data Structures</p>
            <ProgressBar completed={80}
            // bgColor="yellow"
            animateOnRender={true}/>
        </div>
        <div className="C++">
            <p>C++ </p>
            <ProgressBar completed={80}
            // bgColor="yellow"
            animateOnRender={true}/>
        </div>

    </div>
    );
    4
};
export default Skills;