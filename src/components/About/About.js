import React, { useEffect } from 'react';
import classes from './About.module.scss';
import styles from './../../styles/_typography.module.scss';
import me1 from './../../assets/images/about1-min.jpg';
import me2 from './../../assets/images/about2-min.jpg';
import me3 from './../../assets/images/about6-min.jpg';
import me4 from './../../assets/images/about4-min.jpg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
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

    const variantsText = {
        hidden: { 
            y: -100,
            opacity: 0 
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        } 
    }

    const variantsImg = {
        hidden: { 
            y: 60,
            scale: 0 
        },
        visible: {
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
            },
        }
    }
    return (
    <section className={classes.about} id='about'>
        <div className={classes.sloganBox}>
            <h2 className={styles.headingSecondary}>O mnie</h2>
        </div>
        <div className={classes.content}>
        <div className={classes.leftSide}> 
            <motion.div ref={ref} initial="hidden" animate={controls} exit="hidden" variants={variantsText} className={classes.descriptionBox}>
                <p className={styles.textInfo}>Cześć! Mam na imię Angelika, od 2 lat pracuję jako Frontend Developer wykorzystując nowoczesne rozwiązania takie jak framework Vue.js i biblioteka React.js. Posiadam także doświadczenie w pracy z Shopify i Shopify Plus. Obecnie szukam pracy, która pozwoli mi rozwinąć zdobyte do tej pory umiejętności i pozyskać nowe.  </p>
            </motion.div>
        </div>
        <div className={classes.rightSide}>
            <motion.div ref={ref} initial="hidden" animate={controls} exit="hidden" variants={variantsImg} className={classes.fotoBox}>
                <svg className={classes.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F6E2DF" d="M56.8,-20.9C60.8,-6.4,42.2,13,20.4,29C-1.3,45,-26.1,57.5,-42.9,47.9C-59.8,38.3,-68.7,6.6,-60.2,-14.3C-51.7,-35.1,-25.8,-45,0.3,-45.1C26.5,-45.2,52.9,-35.5,56.8,-20.9Z" transform="translate(100 100)" />
                </svg>
                <svg className={[classes.blob, classes.blob___dark].join(' ')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EEC3BF" d="M64.8,-52.8C78.4,-34.6,80.1,-8,70,8C60,23.9,38.3,29.2,20.4,34.9C2.5,40.7,-11.5,46.9,-29.7,44.7C-47.9,42.5,-70.2,31.8,-73.9,16.6C-77.6,1.3,-62.8,-18.5,-47.4,-37.1C-32,-55.7,-16,-73.2,4.8,-77.1C25.6,-80.9,51.2,-71.1,64.8,-52.8Z" transform="translate(100 100)" />
                </svg>
                <figure className={classes.fotoBox_foto}>
                    <img className={classes.fotoBox_foto___one} src={me1} alt=''></img>
                </figure>
                <figure className={classes.fotoBox_foto}>
                    <img className={classes.fotoBox_foto___two} src={me4} alt=''></img>
                </figure>
                <figure className={classes.fotoBox_foto}>
                    <img className={classes.fotoBox_foto___three} src={me2} alt=''></img>
                </figure>
                <figure className={classes.fotoBox_foto}>
                    <img className={classes.fotoBox_foto___four} src={me3} alt=''></img>
                </figure>
            </motion.div>
        </div>
        </div>
    </section>
    
)};

export default About;