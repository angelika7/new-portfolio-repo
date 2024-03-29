import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import classes from './Form.module.scss';
import styles from './../../styles/_typography.module.scss';
import stylesExit from './../ProjectItem/ProjectItem.module.scss';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Form = props => {
    const [error, setError] = useState(false);
    const [success, setSucces] = useState(false);
    const [exit, setExit] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'contact_form', e.target, 'qsV_Wkc-QPC8oqEGU')
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

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if(!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const showForm = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.3,
            },
        }
    }

    const form = (
        <motion.form className={classes.form} onSubmit={sendEmail} animate={{
            opacity: success ? 0 : 1,
            x: success ? -100 : 0
        }} initial={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} >
            {error && <motion.div className={classes.error} initial={{opacity: 0}} animate={{opacity: exit ? 0 : 1}} exit={{opacity: 0}}>
                    <div className={stylesExit.closeBox} onClick={() => setExit(true)}>
                        <FontAwesomeIcon icon={faTimes} className={stylesExit.close} />
                    </div>
                <p className={styles.textInfo}>Wystąpił błąd, wiadomość nie zostala wysłana! Odśwież stronę.</p>
                </motion.div>}
            <div className={classes.formElement}>
                <label htmlFor='message'>Twoja wiadomość</label>
                <textarea placeholder='np. Mamy dla Ciebie ofertę współpracy :)' id='message' name="message" required></textarea>
            </div>
            <div className={classes.formElement}>
                <label htmlFor='name'>Twoje imię i nazwisko</label>
                <input name="user_name" placeholder='np. Jan Kowalski' type='text' id='name' required></input>
            </div>
            <div className={classes.formElement}>
                <label htmlFor='email'>Twój adres email</label>
            <input name="user_email" placeholder='np. jan@kowalski.pl' type='email' id={props.for} required></input>
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
        <motion.div className={classes.content} ref={ref} animate={controls} variants={showForm}>
            {success ? message : form}
        </motion.div>
    )
};

export default Form;