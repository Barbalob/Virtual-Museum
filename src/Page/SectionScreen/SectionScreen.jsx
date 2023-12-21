import React from 'react';
import Header from "../../Component/Header/Header";
import Title from "../../Component/Title/Title";
import SelectedDescription from "../../Component/SelectedDescription/SelectedDescription";
import {useLocation} from "react-router-dom";

const SectionScreen = (props) => {
  const type = useLocation().hash.slice(1)
  const data = props.data[type]
  return (
      <React.Fragment>
        <Header listLink={props.listLink}/>
        <Title type='main' title={props.data.title}/>
        <Title title={props.data.subTitle}/>
        <SelectedDescription type={type} head={props.head} data={data} />
      </React.Fragment>
  );
};

export default SectionScreen;
