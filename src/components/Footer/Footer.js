import React from 'react';
import classes from './Footer.module.scss';
import styleText from './../../styles/_typography.module.scss';

const footer = () => (
    <footer className={classes.footer}>
        <p className={[styleText.info, styleText.info___footer].join(' ')}>Portfolio v2.0. A. Chochorowska 2023. &copy; wszystkie prawa zastrzeżone</p>
    </footer>
);

export default footer;