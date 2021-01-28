import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import classes from './Form.module.scss';
import styles from './../../styles/_typography.module.scss';
import stylesExit from './../ProjectItem/ProjectItem.module.scss';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Form = props => {
    const [error, setError] = useState(false);
    const [success, setSucces] = useState(false);
    const [exit, setExit] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_kpDQsg8nY3Sy2Wm8ZBnYf')
          .then((result) => {
              console.log(result.text);
              if(result) {
                setSucces(true);
              }
          }, (error) => {
              console.log(error.text);
              if(error) {
                  setSucces(false)
                  setError(true)
              }
        });
    };

    const form = (
        <motion.form className={classes.form} onSubmit={sendEmail} animate={{
            opacity: success ? 0 : 1,
            x: success ? -100 : 0
        }} initial={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}}>
            {error && <motion.div className={classes.error} initial={{opacity: 0}} animate={{opacity: exit ? 0 : 1}} exit={{opacity: 0}}>
                    <div className={stylesExit.closeBox} onClick={() => setExit(true)}>
                        <FontAwesomeIcon icon={faTimes} className={stylesExit.close} />
                    </div>
                <p className={styles.textInfo}>Wystąpił błąd, wiadomość nie zostala wysłana! Odśwież stronę.</p>
                </motion.div>}
            <div className={classes.formElement}>
                <label htmlFor='message'>Twoja wiadomość</label>
                <textarea placeholder='np. Mamy dla Ciebie ofertę współpracy :)' id='message' name="message"></textarea>
            </div>
            <div className={classes.formElement}>
                <label htmlFor='name'>Twoje imię i nazwisko</label>
                <input name="user_name" placeholder='np. Jan Kowalski' type='text' id='name'></input>
            </div>
            <div className={classes.formElement}>
                <label htmlFor='email'>Twój adres email</label>
                <input name="user_email" placeholder='np. jan@kowalski.pl' type='email' id={props.for}></input>
            </div>
            <div className={classes.formElement}>
                <button className={classes.btn}>Wyślij wiadomość</button>
            </div>
        </motion.form>
    )

    const message = (
        <motion.div className={classes.message} animate={{
            opacity: success ? 1 : 0,
            x: success ? 0 : -100,
        }} initial={{opacity: 0, x: -100}} exit={{opacity: 0, x: -100}}>
            {success && <p className={styles.textInfo}>Twoja wiadomość została wysłana pomyślnie! </p>}
        </motion.div>
    )
    
    return(
        <React.Fragment>
            {success ? message : form}
        </React.Fragment>
    )
};

export default Form;