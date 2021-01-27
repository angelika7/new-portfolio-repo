import React from 'react';
import ToolItem from './../ToolItem/ToolItem';
import classes from './Stack.module.scss';
import styleText from './../../styles/_typography.module.scss';
import styleBox from './../About/About.module.scss';
import styleImg from './../ToolItem/ToolItem.module.scss';
import data from './../../data/stack.data';
import decoration from './../../assets/images/decoration1.svg';

const Stack = () =>  {
    return (
        <section className={classes.stack} id='stack'>
            <img className={classes.decoration} src={decoration} alt=''/>
            <div className={styleBox.sloganBox}>
                <h2 className={styleText.headingSecondary}>Umiejętności</h2>
            </div>
            <div className={classes.toolsBox}> 
                {data.toolsArray.map((e, i) => {
                    return <ToolItem key={i} info={e.info} url={e.url} alt={e.alt} backInfo={e.backInfo} id={e.id} />
                })}
                <div className={classes.imgOnly}>
                    {data.toolsImgOnly.map((e, i) => {
                        return <div className={classes.imgBox} key={i} id={e.id}><img className={styleImg.img} src={e.url} alt={e.alt}/></div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stack;