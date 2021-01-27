import React from 'react';
import Navigation from '../NavList/NavList';
import Burger from './../Burger/Burger';

import classes from './Toolbar.module.scss';

const toolbar = (props) => {
    return (
    <nav className={classes.toolbar}>
        <div className={props.open ? [classes.circle, classes.expand].join(' ') : classes.circle}></div>
        <Burger onClick={props.onClick} open={props.open}/>
        <Navigation open={props.open} onClick={props.onClick} isVisible={props.isVisible}/>
    </nav>
    )
};

export default toolbar;