import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import './NaviGationBar.css';

const NaviGationBar = () => {
    return (
        <Navbar style={{ background: '#343f40'}} expand="lg" variant="dark">
            <div className="container">
                <Navbar.Brand className="text-danger font-weight-bold" href="#">FilmFlick</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="navItem" href="#home">Home</Nav.Link>
                        <Nav.Link className="navItem" href="#movies">Movies</Nav.Link>
                        <Nav.Link className="navItem" href="#tv_shows">TV Shows</Nav.Link>
                        <Nav.Link className="navItem" href="#videos">Videos</Nav.Link>
                        <Nav.Link className="navItem" href="#blog">Blog</Nav.Link>
                        <NavDropdown title="PAGES" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#pricing1">Pricing Plan 1</NavDropdown.Item>
                            <NavDropdown.Item href="#pricing2">Pricing Plan 2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NaviGationBar;