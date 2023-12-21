import React from 'react';
import Header from "../../Component/Header/Header";
import Title from "../../Component/Title/Title";
import MainEmblem from "../../Component/Emblem/MainEmblem";
import SplitDescription from "../../Component/SplitDescription/SplitDescription";

const SpaceLifeKnowledge = (props) => {

  return (
    <React.Fragment>
      <Header listLink={props.listLink}/>
      <Title cls='other__title' title={props.data.mainTitle}/>
      <MainEmblem data={props.data.emblem}/>
      <SplitDescription head={props.head} data={props.data.splitDescription}/>
    </React.Fragment>
  );
};

export default SpaceLifeKnowledge;
