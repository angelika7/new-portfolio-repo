import React, { useEffect } from 'react';
import ToolItem from './../ToolItem/ToolItem';
import classes from './Stack.module.scss';
import styleText from './../../styles/_typography.module.scss';
import styleBox from './../About/About.module.scss';
import styleImg from './../ToolItem/ToolItem.module.scss';
import data from './../../data/stack.data';
import decoration from './../../assets/images/decoration1.svg';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Stack = () =>  {
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

    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 1,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }


    const variants = {
        visible: i => ({
          opacity: 1,
          transition: {
            delay: i * 0.2,
          },
        }),
        hidden: { opacity: 0 },
    }

    const variantsStack = {
      visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2,
        },
      }),
      hidden: { 
        opacity: 0,
        y: -20 
      },
  }

    return (
        <section className={classes.stack} id='stack'>
            <img className={classes.decoration} src={decoration} alt=''/>
            <div className={styleBox.sloganBox}>
                <h2 className={styleText.headingSecondary}>Umiejętności</h2>
            </div>
            <motion.div ref={ref} initial="hidden" animate={controls} exit="hidden" variants={list} className={classes.toolsBox}> 
                {data.toolsArray.map((e, i) => {
                    return <motion.div key={i} custom={i} ref={ref} animate={controls} variants={variantsStack}><ToolItem key={i} info={e.info} url={e.url} alt={e.alt} backInfo={e.backInfo} id={e.id} /></motion.div>
                })}
                <motion.div ref={ref} initial="hidden" animate={controls} exit="hidden" variants={list} className={classes.imgOnly}>
                    {data.toolsImgOnly.map((e, i) => {
                        return <motion.div custom={i} ref={ref} animate={controls} variants={variants} className={classes.imgBox} key={i} id={e.id}><img small={e.small} className={e.small ? [styleImg.img, styleImg.img___small].join(' ') : styleImg.img} src={e.url} alt={e.alt}/></motion.div>
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Stack;