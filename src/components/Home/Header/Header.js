import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
             <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">PAHARICA HOSPITAL</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About US</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                        
                            <Button variant = 'light'>LogOut</Button>
                            <Nav.Link  as={Link} to="/login">Sign up</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                         
                        <Navbar.Text>
                            Signed in as: <a href="#login">user</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;