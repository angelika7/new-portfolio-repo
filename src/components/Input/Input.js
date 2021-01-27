import React from 'react';
import styles from './../../styles/_typography.module.scss';
import classes from './Input.module.scss';

const Input = props => (
    <div className={classes.formElement}>
        <label htmlFor={props.for}>{props.text}</label>
        <input placeholder={props.placeholder} type={props.type} id={props.for}></input>
    </div>
);

export default Input;