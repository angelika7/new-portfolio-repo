import React, { Component } from 'react';
import ScrollspyNav from "react-scrollspy-nav";

import NavItem from './../NavItem/NavItem';
import classes from './NavList.module.scss';


class NavList extends Component {
  state = {
    IDs: [
      {key: 0, id: '#home', section: 'home', name: 'Home', active: true},
      {key: 1, id: '#about', section: 'about', name: 'O mnie'},
      {key: 2, id: '#projects', section: 'projects', name: 'Projekty'},
      {key: 3, id: '#stack', section: 'stack', name: 'Umiejętności'},
      {key: 4, id: '#contact', section: 'contact', name: 'Kontakt'}
    ]
  }

  render() {
    {/* <ScrollspyNav
        scrollTargetIds={["home", "about", "projects", "stack", "contact"]}
        offset={100}
        activeNavClass={classes.active}
        scrollDuration="1000"
        headerBackground="true"
      >  */}
      {/* </ScrollspyNav> */}


    return (
      
      <ul className={this.props.open ? [classes.navList, classes.isOpened].join(' ') : classes.navList}>
          {this.state.IDs.map(el => {
            return <NavItem 
            onClick={this.props.onClick} 
            open={this.props.open} 
            key={el.key} 
            id={el.id} 
            link={el.id} 
            active={el.active} 
            isVisible={this.props.isVisible}>{el.name}</NavItem>
          })}
      </ul>
    
    )
  }
};

export default NavList;