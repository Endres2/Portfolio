import React from "react";
import "./MyProjects.scss";


function MyProjects({ title, image, description, link, demo}) {
    return (
        // <div className="wrapper">
        //     <div className="cols">
        //         <div className="col" ontouchstart="this.classList.toggle('hover');">
        //             <div className="container">
        //                 <div className="front" >
        //                     <div className="inner">
        //                         <h1>{title}</h1>
        //                         <span>{image}</span>
        //                     </div>
        //                 </div>
        //                 <div className="back">
        //                     <div className="inner">
        //                         <p>{description}</p>
        //                         <button className="btn-sm ">{link}</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
        <div className="scene container justify-content-center mt-5 ">
            <div className="row " >
            <div className="card col-md-4  "  >
                <div className="card__face card__face--front" >
                <div className="p-3" style={{
                        backgroundImage: `url("")`, width: "240px",
                        height: "300px",borderRadius: "10%",backgroundSize:"contain",backgroundRepeat: "no-repeat", 
                    }}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    </div>
                </div>
                <div className="card__face card__face--back " >
                    <div style={{
                        backgroundImage: `url(${image})`, width: "100%",
                        height: "300px",borderRadius: "10%", backgroundRepeat: "no-repeat", backgroundSize:"cover"
                    }}>
                        <div style={{ position: "relative", top:"80%"}}>
                        <a href={link}><button className="btn-lg btn-dark "><i  className="fab fa-github"></i></button></a>
                        <a href={demo}><button className="btn-lg btn-dark ">Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>           
        </div>


    );
}



export default MyProjects;