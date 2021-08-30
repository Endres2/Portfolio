import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <div className="Contact">

            <h1>Send me a message:</h1>
            <form action="mailto:andresdhr99@gmail.com?subject" method="post" enctype="text/plain">
                <div className="row">
                    <div className="col">
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Name" />
                    </div>
                    <div className="col">
                        <input required type="text" name="email" id="email" className="form-control" placeholder="Email" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <input type="text" name="message" id="message" className="form-control" placeholder="Message..." />
                    </div>
                   
                </div>
                <button type ="submit" className="btn btn-md myBtn">Send</button>
            </form>
        </div>
    );
}



export default Contact;