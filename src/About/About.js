import React from "react";
import "./About.scss"

function About() {
    return (
        <div className="About">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-6 col-sm-12"><p>I am a full stack web developer, with a passion for learning and creating!</p></div>
                    <div className="col col-md-6 col-sm-12"><img src={process.env.PUBLIC_URL +'/assets/web-dev.png'} all="Web developer" alt="Web developer"></img></div>
                </div>
                <div className="row">
                    <div className="col col-md-6 col-sm-12"><img  src={process.env.PUBLIC_URL +'/assets/ucf-logo.png'} alt="UCF"></img></div>
                    <div className="col col-md-6 col-sm-12"><p>Studied the current, and up and coming technologies in the University of Central Florida full stack web development bootcamp; where I got the base to my web development skills.</p></div>
                </div>
                <div className="row">
                    <div className="col col-md-6 col-sm-12"><p>Obtained my Bachelor's of Arts  in Computer Science from Florida International University where I got part of my theorical knowledge in software development like algorithms, big O notations and made some applications with Java and Python.</p></div>
                    <div className="col col-md-6 col-sm-12"><img src={process.env.PUBLIC_URL +'/assets/fiu-logo-vertical.png'} alt="FIU"></img></div>
                </div>
            </div>
        </div>
    );
}



export default About;