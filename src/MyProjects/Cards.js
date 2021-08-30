import React from 'react'
import MyProject from "./MyProjects"
const url = process.env.PUBLIC_URL;
const cards = [
    {
        id: 1,
        title: "Stargate",
        image:  url+"/assets/stargate.png",
        description:"A full stack web app that provides a fun and interactive way to learn about celestial bodies!",
        link: "https://github.com/DaytimeDracula/Backup-Planit",
        demo: "https://stargate-app.herokuapp.com/",
    },
    {
        id: 2,
        title: "Calorie Hunter",
        image: url+"/assets/CalorieHunterSC.png",
        description:"This app uses food data API's to provide the user with more awareness of their food consumption.",
        link: "https://github.com/Endres2/CalorieHunter",
        demo: "https://endres2.github.io/CalorieHunter/",
    },
    {
        id: 3,
        title: "Password Generator",
        image:  url+"/assets/passwordGenerator.png",
        description:"A project to create a password with JavaScript and prompts.",
        link: "https://github.com/Endres2/passwordGenerator",
        demo: "https://endres2.github.io/passwordGenerator/",
    },
    {
        id: 4,
        title: "Budget Planner",
        image:  url+"/assets/budgetPlanner.png",
        description:"An full stack application that uses indexDB to help you plan your budget.",
        link: "https://github.com/Endres2/budgetPlanner",
        demo: "https://budget-app-ucf.herokuapp.com/",
    },
    {
        id: 5,
        title: "Employee Tracker",
        image:  url+"/assets/employeeTracker.png",
        description:"A command line app that uses inquirer to populate a data base on mySql as well as manipulate the data inside.",
        link: "https://github.com/Endres2/employeeTracker",
        demo: "https://www.youtube.com/watch?v=GVBeSE4Bfeg",
    },
    {
        id: 6,
        title: "Git Hire",
        image:  url+"/assets/workInProgress.png",
        description:"A full stack application to help you find a job.",
        link: "https://github.com/Endres2/git-hire",
        demo: "",
    },
]

function Cards() {
    return (
        <div className="container">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <MyProject title={card.title} image={card.image} description={card.description} link={card.link} demo={card.demo}/>
                        </div >
                    ))
                }
            </div>

        </div>
    )
}


export default Cards;