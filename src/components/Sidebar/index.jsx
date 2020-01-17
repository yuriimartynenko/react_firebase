import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import './style.scss';

const Sidebar = (props) => (
    <div className='edit-content'>
        <div className='d-flex justify-content-center'>
            <img className='img-fluid w-50 rounded-circle avatar-img' src='https://picsum.photos/200' alt='' />
        </div>
        <div className='mt-2 text-center'>
            <div className='profile-usertitle-name'>
                {`${props.firstName}  ${props.lastName}`}
            </div>
        </div>
        <Nav className='navbar'>
            <ul className='navbar-nav w-100'>
                <li className='nav-item'>
                    <NavLink
                        exact
                        to={`/`}
                        activeClassName='active'
                        className='nav-link pl-2 interaction'>
                        Головна
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        exact
                        to={`/dashboard/link1`}
                        activeClassName='active'
                        className='nav-link pl-2 interaction'>
                        Лінк 1
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to={`/dashboard/link2`}
                        activeClassName='active'
                        className='nav-link pl-2 interaction'>
                        Лінк 2
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to={`/dashboard/link3`}
                        activeClassName='active'
                        className='nav-link pl-2 interaction'>
                        Лінк 3
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to={`/dashboard/link4`}
                        activeClassName='active'
                        className='nav-link pl-2 interaction'>
                        Лінк 4
                    </NavLink>
                </li>
                {props.isAdmin &&
                <>
                    <li className='nav-item'>
                        <NavLink
                            to={`/dashboard/link5`}
                            activeClassName='active'
                            className='nav-link pl-2 interaction text-danger'>
                            Лінк 5
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            to={`/dashboard/link6`}
                            activeClassName='active'
                            className='nav-link pl-2 interaction  text-danger'>
                            Лінк 6
                        </NavLink>
                    </li>
                </>
                }
            </ul>
        </Nav>
    </div>
);

const mapStateToProps = (state) => ({
    isAdmin: state.auth.newData.isAdmin,
    firstName: state.auth.newData.firstName,
    lastName: state.auth.newData.lastName
});

export default connect(mapStateToProps)(Sidebar);