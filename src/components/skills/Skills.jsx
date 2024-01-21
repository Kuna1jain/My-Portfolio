import React from "react";
import "./Skills.scss";
import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
    return (

        <div className="bars">
            <h1 > My skills </h1>
            <div className="skillbox">
                <div className="Reactjs">
                    <p>Reactjs</p>
                    <ProgressBar completed={80}
                        bgColor="rgb(219, 219, 0)"
                        labelColor="black"
                        animateOnRender={true} />
                </div>
                <br />
                <div className="JavaScript">
                    <p>Javascript</p>
                    <ProgressBar completed={70}
                        // bgColor="yellow"
                        animateOnRender={true} />
                </div>
                <br />
                <div className="DSA">
                    <p>Data Structures</p>
                    <ProgressBar completed={90}
                        bgColor="#5C8374"
                        animateOnRender={true} />
                </div>
                <br />
                <div className="C++">
                    <p>C++ </p>
                    <ProgressBar completed={70}
                        bgColor="skyblue"
                        labelColor="rgb(12, 12, 29)"
                        animateOnRender={true} />
                </div>
                <br />
                {/* <div className="HTML">
                    <p>HTML </p>
                    <ProgressBar completed={80}
                        bgColor="skyblue"
                        labelColor="rgb(12, 12, 29)"
                        animateOnRender={true} />
                </div>
                <br />
                <div className="CSS">
                    <p>CSS </p>
                    <ProgressBar completed={80}
                        bgColor="skyblue"
                        labelColor="rgb(12, 12, 29)"
                        animateOnRender={true} />
                </div> */}
            </div>

        </div>
    );

};
export default Skills;