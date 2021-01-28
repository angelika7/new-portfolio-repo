import React from 'react';
import classes from './Contact.module.scss';
import { Link } from 'react-router-dom';
import styleText from './../../styles/_typography.module.scss';
import styleBox from './../About/About.module.scss';

import Form from '../Form/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


const Contact = (props) => {

    return (
    <section className={classes.contact} id='contact'>
        <svg className={classes.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,80C480,75,600,85,720,96C840,107,960,117,1080,117.3C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div className={classes.content}>
            <div className={[styleBox.sloganBox, classes.sloganBox].join(' ')}>
                <h2 className={[styleText.headingSecondary, styleText.headingSecondary___dark].join(' ')}>Kontakt</h2>
            </div>
            <div className={classes.infoBox}>
                <Link to={{ pathname: "https://www.facebook.com/angelika.chochorowska/" }} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className={classes.icon} /></Link>
                <a href="mailto:angelika.chochorowska7@gmail.com"><FontAwesomeIcon icon={faGooglePlusSquare} className={classes.icon} /></a>
                <Link to={{ pathname: "https://www.linkedin.com/in/angelika-chochorowska-18515b183/" }} target="_blank"><FontAwesomeIcon icon={faLinkedin} className={classes.icon} /></Link>
                <Link to={{ pathname: "https://github.com/angelika7" }} target="_blank"><FontAwesomeIcon icon={faGithubSquare} className={classes.icon} /></Link>
            </div>
            <Form />
            <div className={classes.describeBox}>
                <h3 className={styleText.headingTertiary}>Let's work together!</h3>
            </div>
        </div>
    </section>
    )
};

export default Contact;