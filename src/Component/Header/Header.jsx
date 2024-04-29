import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.scss'
import {listLink} from '../../data/Link/Link.js'

const Header = (props) => {
  return (
    <div className='header'>
        <div className="logo">
          <img src="../.././assets/RussianScienceFoundation.png" alt="" className="logo-img" />
          <p className="logo-p">Сайт разработан при поддержке<br/> Российского научного фонда - РНФ</p>
        </div>
        
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>  


        <nav className='nav'>
          <ul className="nav-list">
            <li className="nav-list-item">
              <button className='nav-list-item-btn'>Разделы</button>

              <ul className='dropdown-list'>
                {listLink.map(link=>{
                  return  <NavLink key={link.text} className='dropdown-list-item' to={link.href}>{link.text}</NavLink>
                })}
              </ul>
            </li>
            <li className="nav-list-item">
              
              <button className='nav-list-item-btn'>Библиография</button>
              <ul className='dropdown-list'>
                <NavLink className='dropdown-list-item' to='/bibliography/ru'>Библиография Россия</NavLink>
                <NavLink className='dropdown-list-item' to='/bibliography/gb'>Библиография Британия</NavLink>
              </ul>
            </li>
            <li className="nav-list-item"><NavLink to='/'>Об авторах</NavLink></li>
      
          </ul>
        </nav>

</div>
  );
};

 

export default Header;
