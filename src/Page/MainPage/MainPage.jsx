import React from 'react';
import Header from "../../Component/Header/Header";
import Title from "../../Component/Title/Title";
import MainEmblem from "../../Component/Emblem/MainEmblem";
import MainDescription from "../../Component/MainDescription/MainDescription";
import MainChoice from "../../Component/MainChoice/MainChoice";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <Header listLink={props.listLink}/>
      <Title title='Название сайта'/>
      <MainEmblem type='main'/>
      <MainDescription title='Добро пожаловать в музей'/>
      <MainChoice listLink={props.listLink}/>
    </React.Fragment>
  );
};

export default MainPage;
