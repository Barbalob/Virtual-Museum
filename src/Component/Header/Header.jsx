import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <div className="main__header line-header">
      <input id="menu-toggle" type="checkbox"/>
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <nav className="header__nav">
        <ul className="nav-list">
          {props.listLink.map((el, index) =>
              (<li key={index} className="nav-list-item"><Link to={el.href}>{el.text}</Link></li>)
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
