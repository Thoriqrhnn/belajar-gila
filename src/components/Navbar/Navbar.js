import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Link >
                    <Link to="/" className="text-black" style={{ textDecoration: "none" }}>About</Link>
                </Nav.Link>
                <Nav.Link >
                    <Link to="/porto" className='text-black' style={{ textDecoration: "none" }}>Porto</Link>
                </Nav.Link>
                <Nav.Link >
                    <Link to="/contact" className='text-black' style={{ textDecoration: "none" }}>Contact Me</Link>
                </Nav.Link>
            </Nav>
        </>
    );
}

export default Navbar
