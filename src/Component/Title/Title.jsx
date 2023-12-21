import React from 'react';

const Title = (props) => {
  return (
    <h1 className={props.cls?props.cls:'main__title'}>{props.title}</h1>
  );
};

export default Title;
