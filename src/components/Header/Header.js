import React, { useState, useEffect } from 'react';
import classes from './Header.module.scss';
import styles from './../../styles/_typography.module.scss';
import girl from './../../assets/images/10-min.jpg';

const Header = (props) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        window.onload = () => {
            setLoaded(true)
        };
    });

    return (
    <header className={classes.header} id='home'>
        <svg className={classes.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF" fillOpacity="1" d="M0,96L60,117.3C120,139,240,181,360,181.3C480,181,600,139,720,144C840,149,960,203,1080,192C1200,181,1320,107,1380,69.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div className={classes.sloganBox}>
            <h1 className={styles.headingPrimary}>Front-end Developer</h1>
        </div>
        <div className={classes.imgBox}>
            <img src={girl} className={classes.img} alt='Młoda dziewczyna siedzi przy laptopie i pracuje'/>
            <svg className={classes.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#538D7A" d="M13.8,-2.1C23.3,24.7,40.2,51.6,30,64.5C19.8,77.3,-17.4,76.2,-37.8,59.6C-58.2,43,-61.9,10.8,-52.8,-15.5C-43.7,-41.8,-21.9,-62.3,-9.8,-59.1C2.2,-55.9,4.3,-29,13.8,-2.1Z" transform="translate(100 100)" />
            </svg>
        </div>
        <div className={classes.nameBox}>
            <h2 className={loaded ? [classes.name, classes.typing].join(' ') : classes.name}>Angelika Chochorowska</h2> 
        </div>
        <svg className={[classes.wave, classes.wave___bottom].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,96L60,117.3C120,139,240,181,360,181.3C480,181,600,139,720,144C840,149,960,203,1080,192C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </header>

    )
};

export default Header;