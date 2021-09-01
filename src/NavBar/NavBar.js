import "./NavBar.css"
import React from "react";
import { Nav, Navbar} from "react-bootstrap";

import { Link } from 'react-router-dom';
// import  "../assets/resume.pdf";
function NavBar() {
    return (
        <div className="NavBar " >
            <Navbar   collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand>
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto"  >
                        <Nav.Link as={Link} style={{color:"#66fcf1"}} to={`/`}>Home</Nav.Link>
                        <Nav.Link as={Link} style={{color:"#66fcf1"}} to={`/about`}>About</Nav.Link>
                        <Nav.Link as={Link} style={{color:"#66fcf1"}} to={`/projects`}>Projects</Nav.Link>
                        <Nav.Link as={Link} style={{color:"#66fcf1"}} to={`/contact`}>Contact</Nav.Link>
                        <Nav.Link as={Link} style={{color:"#66fcf1"}} to={`/resume`} >Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}



export default NavBar;
