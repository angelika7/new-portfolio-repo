import React, { useState, useEffect } from 'react';
import Navigation from '../NavList/NavList';
import Burger from './../Burger/Burger';

import classes from './Toolbar.module.scss';

const Toolbar = (props) => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            let scrollPos = window.scrollY;
            if(scrollPos > 0) {
                setBg(true)
            } 
            if(scrollPos === 0 || window.innerWidth <= 850) {
                setBg(false)
            } 
        };
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
        
    }, [window.scrollY])

    return (
    <nav className={classes.toolbar} style={bg ? {backgroundColor: "white"} : {backgroundColor: "transparent"}}>
        <div className={props.open ? [classes.circle, classes.expand].join(' ') : classes.circle}></div>
        <Burger onClick={props.onClick} open={props.open}/>
        <Navigation open={props.open} onClick={props.onClick} isVisible={props.isVisible}/>
    </nav>
    )
};

export default Toolbar;