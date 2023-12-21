import React from 'react';
import {Link} from "react-router-dom";

const SplitDescription = (props) => {
  console.log(props.head)
  return (
    <ul className="split-description-list">
      {
        props.data.map((text,index)=>(
            <li key={index} className="split-description-list-item">
              <p className="item-p">
                {text}
              </p>
              {/*<Link to="/space-life-knowledge/sections-screen" className="item-a">Подробнее</Link>*/}

              <Link
                to={index===0
                  ? props.head + '/sections-screen/#ru'
                  : props.head + '/sections-screen/#en'}
                className="item-a">
                  Подробнее
              </Link>
            </li>
          ))
      }
    </ul>
  );
};

export default SplitDescription;
