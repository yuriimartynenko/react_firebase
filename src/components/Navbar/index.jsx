import React from 'react';
import { Button, Nav } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';

const NavBarMenu = (props) => (
    <Navbar bg='light' expand='lg'>
        <Link to={'/'}><Navbar.Brand>Logotype</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
                <NavLink
                    exact
                    to={`/dashboard/link1`}
                    activeClassName='active'
                    className='nav-link pl-2 interaction'>
                    Лінк 1
                </NavLink>
                <NavLink
                    exact
                    to={`/dashboard/link2`}
                    activeClassName='active'
                    className='nav-link pl-2 interaction'>
                    Лінк 2
                </NavLink>
                <NavLink
                    exact
                    to={`/dashboard/link3`}
                    activeClassName='active'
                    className='nav-link pl-2 interaction'>
                    Лінк 3
                </NavLink>
            </Nav>
            <Nav>
                <Button onClick={props.handleLogout} color='danger'>{props.isLoggingOut ? 'Зачекайте..' : 'Вийти'}</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBarMenu;