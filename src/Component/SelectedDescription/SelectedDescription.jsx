import React from 'react';
import {Link} from "react-router-dom";
import {logPlugin} from "@babel/preset-env/lib/debug";

const SelectedDescription = (props) => {
  const country = props.type === 'ru'
    ? 'en'
    : 'ru'

  const arrow = (
    <Link
      to={props.head + "/sections-screen/#" + country}
    >
      <img
        className={
          ["description-arrow",
            props.type !== 'ru'
              ? 'description-arrow-left'
              : ''
          ].join(' ')}
        src="./assets/arrow.svg"
        alt=""
      />
    </Link>
  )

  const listSubsection = (
    <ul className='item-list-description'>
      {props.data.listSubsection.map((el,index)=>
        <li key={index}  className="list-description-item">
          <Link className="list-description-item-link" to={props.head + '/cards/#' + props.type + '-' + index}>
            {el.title}
          </Link>
        </li>
      )}
    </ul>
  )

  return (
    <div className="selected-description">
      {arrow}
      <div className="selected-description-item">
        <figure className="item-emblem">
          <img
            className="item-emblem-img"
            src={props.data.srcImg}
            alt=""
          />
          <figcaption className="item-emblem-text">
            {props.data.titleImg}
          </figcaption>
        </figure>
        <p className="item-description">
          {props.data.description}
        </p>
        <h3 className="item-title">Список подразделов</h3>
        {listSubsection}
      </div>
    </div>
  );
};

export default SelectedDescription;
