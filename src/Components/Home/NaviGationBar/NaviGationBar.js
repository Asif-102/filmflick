import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignInAlt, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NaviGationBar.css';
import { useAuth } from '../../Login/UseAuth';
import { useHistory } from "react-router-dom";

const NaviGationBar = () => {
    const auth = useAuth();

    let history = useHistory();

    function handleClick() {
      history.push("/login");
    }
    return (
        <Navbar id="main-nav" className="navbar-fixed topnav" collapseOnSelect expand="lg" sticky='top' expand="lg" variant="dark">
            <div className="container">
                <Navbar.Brand className="text-danger font-weight-bold" href="#">FilmFlick</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className="navItem nav-link">Home</Link>
                        <Link to="#" className="navItem nav-link">Movies</Link>
                        <Link to="#" className="navItem nav-link">TV Shows</Link>
                        <Link to="#" className="navItem nav-link">Videos</Link>
                        <Link to="/login" className="navItem nav-link">Blog</Link>
                        {/* <Nav.Link to="/login" className="navItem" href="#blog">Blog</Nav.Link> */}
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


                        <Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faUserCircle} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    auth.user ?
                                        <Dropdown.Item onClick={()=>auth.signOut()}>
                                            <FontAwesomeIcon style={{ marginRight: '4px' }} icon={faArrowCircleRight} />
                                            LogOut
                                        </Dropdown.Item>
                                        :
                                        <Dropdown.Item onClick={handleClick}>
                                            <FontAwesomeIcon icon={faSignInAlt} />
                                            Login
                                        </Dropdown.Item>
                                }

                            </Dropdown.Menu>
                        </Dropdown>

                    </Form>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NaviGationBar;