import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styleText from './../../styles/_typography.module.scss';
import classes from './ProjectItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'; 
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ProjectItem = (props) => {
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

    const variants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.3,
            },
        } 
    }

    return (
        <React.Fragment>
            <motion.div ref={ref} initial="hidden" animate={controls} exit="hidden" variants={variants} className={classes.item} onClick={() => {props.onClick(props.id)}}>
                <img className={classes.project} src={props.url} alt=''></img>
                <div className={classes.titleBox}>
                    <p className={styleText.info}>{props.info}</p>
                    <p className={[styleText.info, styleText.info___title].join(' ')}>{props.title}</p>
                </div>
                <div className={`${classes.back} ${props.isFlipped ? classes.isFlipped : ''}`}>
                    <div className={classes.closeBox}>
                        <FontAwesomeIcon icon={faTimes} className={classes.close} />
                    </div>
                    <div className={classes.icons}>
                        {props.active ?
                        <React.Fragment>
                            <div className={classes.iconBox}>
                                <Link to={{ pathname: props.live }} target="_blank"><FontAwesomeIcon icon={faGlobe} className={classes.icon} /></Link>
                            </div>
                            <div className={classes.iconBox}>
                                <Link to={{ pathname: props.github }} target="_blank"><FontAwesomeIcon icon={faGithubSquare} className={classes.icon} /> </Link>
                            </div>
                        </React.Fragment>
                        : null}
                    </div>
                    <div className={classes.textBox}>
                        <p className={[styleText.info, styleText.info___technologies].join(' ')}>{props.backInfo}</p>
                    </div> 
                </div> 
            </motion.div>
        </React.Fragment>
    );
}

export default ProjectItem;