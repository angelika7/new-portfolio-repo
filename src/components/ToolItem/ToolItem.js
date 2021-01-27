import React from 'react';
import classes from './ToolItem.module.scss';
import styleText from './../../styles/_typography.module.scss';

const toolItem = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.imgBox}>
                <img className={classes.img} src={props.url} alt={props.alt}/>
            </div>
            <p className={[styleText.info, styleText.info___tools].join(' ')}>{props.info}</p>    
            <div className={classes.textBox}>
                <p className={[styleText.info, styleText.info___skills].join(' ')}>{props.backInfo}</p>
            </div>
        </div>
    );
}

export default toolItem;