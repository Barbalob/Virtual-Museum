import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Header from "../../Component/Header/Header";
import {listLink} from "../../Data/ListLink/ListLink";

const Cards = (props) => {
  const hash = useLocation().hash.split('-')
  const type = hash[0].slice(1,3)
  const index = hash[1]
  const subIndex = hash[2]
  let data = props.data[type].listSubsection[index]
  const dictRevers = {
    'ru' : 'Британия',
    'en' : 'Россия',
  }

  if (subIndex){
    data = data.subCards[subIndex]
  }
  return (
    <div>


    {/*<Header listLink={listLink}/>*/}
    <div className={["wrapper-cards", type=='ru'?'':"negative"].join(' ')}>

      <Link to="/space-life-knowledge/cards/#en-0"><img className={["cards-arrow", type==='ru'? '':'cards-arrow-left'].join(' ')} src="./assets/arrow.svg" alt=""/></Link>

      <div className="cards">
        <h2 className="cards-title">{data.title}</h2>
        <img
          className="cards-img line-img"
          src={data.src}
          alt=""
        />
        <div className="line"></div>
        <p className="cards-description">
          {data.text}
        </p>
        <h3 className="cards-title-list">Список подразделов</h3>
        {
          subIndex
            ?
            <ul className="cards-list-description">
                <li className="cards-list-description-item">
                  <Link className="cards-list-description-item-link" to={'/'}>
                    {dictRevers[type] + ':'}
                  </Link>
                </li>
            </ul>

            :
            <ul className="cards-list-description">
              {data.subCards.map((el,i)=>
                <li key={i} className="cards-list-description-item">
                  <Link className="cards-list-description-item-link" to={props.head + '/cards/#' + type + '-' + index + '-' + i}>
                    {el.title}
                  </Link>
                </li>)}
            </ul>
        }

      </div>
    </div>
    </div>
  );
};

export default Cards;
