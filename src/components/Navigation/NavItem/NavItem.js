import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import classes from './NavItem.module.scss'

const navItem = (props) => {
    return (
        <li className={props.open ? [classes.navItem, classes.animate].join(' ') : classes.navItem} id={props.id} onClick={props.isVisible ? props.onClick : null}>
            <NavLink smooth to={props.link}>    
                {props.children}   
            </NavLink>
        </li>
    );
}
export default navItem;