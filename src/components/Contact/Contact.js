import React from 'react';
import classes from './Contact.module.scss';
import { Link } from 'react-router-dom';
import styleText from './../../styles/_typography.module.scss';
import styleBox from './../About/About.module.scss';
import styles from './../Input/Input.module.scss';
import Input from './../Input/Input';
import decoration from './../../assets/images/decoration3.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


const contact = (props) => (
    <section className={classes.contact} id='contact'>
        <svg className={classes.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,80C480,75,600,85,720,96C840,107,960,117,1080,117.3C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div className={classes.content}>
            <div className={[styleBox.sloganBox, classes.sloganBox].join(' ')}>
                <h2 className={[styleText.headingSecondary, styleText.headingSecondary___dark].join(' ')}>Kontakt</h2>
            </div>
            <div className={classes.infoBox}>
                <Link to={{ pathname: "https://www.facebook.com/angelika.chochorowska/" }} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className={classes.icon} /></Link>
                <a href="mailto:angelika.chochorowska7@gmail.com"><FontAwesomeIcon icon={faGooglePlusSquare} className={classes.icon} /></a>
                <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
                <Link to={{ pathname: "https://github.com/angelika7" }} target="_blank"><FontAwesomeIcon icon={faGithubSquare} className={classes.icon} /></Link>
            </div>
            <form className={classes.form}>
                <div className={styles.formElement}>
                    <label className={classes.bodySmall} htmlFor='message'>Twoja wiadomość</label>
                    <textarea placeholder='np. Mamy dla Ciebie ofertę współpracy :)' id='message'></textarea>
                </div>
                    <Input for='name' type='text' text='Twoje imię i nazwisko' placeholder='np. Jan Kowalski' />
                    <Input for='email' type='email' text='Twój adres email' placeholder='np. jan@kowalski.pl' />
                <div className={styles.formElement}>
                    <button className={classes.btn}>Wyślij wiadomość</button>
                </div>
            </form>
            <img className={classes.decoration} src={decoration} alt=''/>
            <div className={classes.describeBox}>
                <h3 className={styleText.headingTertiary}>Let's work together!</h3>
            </div>
        </div>
    </section>
);

export default contact;