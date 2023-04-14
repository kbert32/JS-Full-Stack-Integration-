import { NavLink } from "react-router-dom";

import './NavLinks.css';

export default function NavLinks(props) {
    
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' end>All Users</NavLink>
            </li>
            <li>
                <NavLink to='/u1/places' >My Places</NavLink>
            </li>
            <li>
                <NavLink to='/places/new' >Add Place</NavLink>
            </li>
            <li>
                <NavLink to='/auth' >Authenticate</NavLink>
            </li>
        </ul>
    );
};