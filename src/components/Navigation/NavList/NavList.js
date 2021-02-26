import React, { Component } from 'react';

import NavItem from './../NavItem/NavItem';
import classes from './NavList.module.scss';


class NavList extends Component {
  state = {
    IDs: [
      {key: 0, id: '#home', name: 'Home', active: true},
      {key: 1, id: '#about', name: 'O mnie'},
      {key: 2, id: '#projects', name: 'Projekty'},
      {key: 3, id: '#stack', name: 'Umiejętności'},
      {key: 4, id: '#contact', name: 'Kontakt'}
    ]
  }

  componentDidMount() {
    document.querySelector(`ul li a:first-of-type`).classList.add(`${classes.active}`);
    window.addEventListener('scroll', this.changeActiveClass)
   }
 
   changeActiveClass = () => { 
     let links = document.querySelectorAll("nav ul li a");
     let scrollTop = window.scrollY;
     
 
     links.forEach(element => {
       let section = document.querySelector(element.parentNode.id);
     
       if (section.offsetTop - 6 <= scrollTop && section.offsetTop + section.offsetHeight > scrollTop + 6 ) {
         element.classList.add(`${classes.active}`);
       }
       else{
         element.classList.remove(`${classes.active}`);
       }
      })
    }

  render() {

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