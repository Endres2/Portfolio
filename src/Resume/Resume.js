import React from "react";
import "./Resume.css"
function Resume() {
    return (
        <div className="Resume">
            <div className="container-fluid">
            <a download href={process.env.PUBLIC_URL +'/resume.pdf'}><button  className="btn btn-md myBtn" >Download Resume</button></a>
            <h1>Skills</h1>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                    <h2 className="skillTitle">Front End</h2>
                        <ol>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SCSS</li>
                            <li>API's</li>
                            <li>handlebars</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                        </ol>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <h2 className="skillTitle">Back End</h2>
                        <ol>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>REST Api</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Atlas</li>
                            <li>Heroku</li>
                        </ol>

                    </div>
                    <div className="lastCol col-md-4 col-sm-12">
                        <h2 className="skillTitle">Languages</h2>
                        <ol>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C</li>
                        </ol>

                    </div>

                </div>
            </div>
        </div>
    );
}



export default Resume;