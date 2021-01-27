import React, { Component } from 'react';
import { findItemAndModify } from './../../share';

import classes from './Projects.module.scss';
import styleText from './../../styles/_typography.module.scss';
import styleBox from './../About/About.module.scss';
import data from './../../data/projects.data';
import ProjectItem from './../ProjectItem/ProjectItem';

class Projects extends Component {
    
    onClickHandler = (id) => {
        const projects = data.projects;
        findItemAndModify(projects, id);
        this.setState({projects})
    } 

    render() {
        return (
            <section className={classes.projects} id='projects'>
                <svg className={classes.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,101.3C840,107,960,181,1080,181.3C1200,181,1320,107,1380,69.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <div className={classes.content}>
                    <div className={styleBox.sloganBox}>
                        <h2 className={[styleText.headingSecondary, styleText.headingSecondary___dark].join(' ')}>Projekty</h2>
                    </div>
                    <div className={classes.infoBox}>
                        <p className={styleText.textInfo}>- kliknij na projekt, żeby dowiedzieć się więcej</p>
                    </div>
                    <div className={classes.projectsBox}>
                    {data.projects.map((e, i) => {
                            return <ProjectItem key={i} info={e.info} active={e.isActive} title={e.title} bgImage={`url(${e.url})`} alt={e.alt} backInfo={e.backInfo} id={e.id} isFlipped={e.isFlipped} live={e.live} github={e.github} onClick={this.onClickHandler}/>
                        })}
                    </div>
                </div>
                <svg className={[classes.wave, classes.wave___bottom].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,170.7C960,149,1056,107,1152,112C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </section>
        
        )
    }
};

export default Projects;