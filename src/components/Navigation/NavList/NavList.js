import React, { Component } from 'react';

import NavItem from './../NavItem/NavItem';
import classes from './NavList.module.scss';


class NavList extends Component {
  state = {
    IDs: [
      {key: 0, id: 'home', section: '0', name: 'Home', active: true},
      {key: 1, id: 'about', section: '1', name: 'O mnie'},
      {key: 2, id: 'projects', section: '2', name: 'Projekty'},
      {key: 3, id: 'stack', section: '3', name: 'Umiejętności'},
      {key: 4, id: 'contact', section: '4', name: 'Kontakt'}
    ],
    isTop: true
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {


    return (
      
      <ul className={this.props.open ? [classes.navList, classes.isOpened].join(' ') : classes.navList}>
          {this.state.IDs.map(el => {
            return <NavItem 
            onClick={this.props.onClick} 
            open={this.props.open} 
            key={el.key} 
            id={el.section} 
            link={el.id} 
            active={el.active} 
            isVisible={this.props.isVisible}>{el.name}</NavItem>
          })} 
      </ul>
    
    )
  }
};

export default NavList;