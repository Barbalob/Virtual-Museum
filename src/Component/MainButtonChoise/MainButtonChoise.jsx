import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './MainButtonChoise.scss'

const MainButtonChoise = ({listLink}) => {
  console.log(listLink);
  return (
    <>
      <div className="main__sections"> 
        <ul className="sections-list">
          {listLink.map((el, index) =>
            (<li key={index} className="sections-list-item"><NavLink className="sections-link" to={el.href}>{el.text}</NavLink></li>)
          )}
        </ul>
      </div>
    </>
  );
};

export default MainButtonChoise;
