import React from 'react';
import {Link} from "react-router-dom";

const MainChoice = (props) => {

  return (
    <React.Fragment>
      <div className="main__choice">
        <button className="main__choice-button">Россия</button>
        <button className="main__choice-button">Британия</button>
      </div>
      <div className="main__sections">
        <ul className="sections-list">
          {props.listLink.map((el, index) =>
            (<li key={index} className="sections-list-item"><Link className="sections-link" to={el.href}>{el.text}</Link></li>)
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MainChoice;
