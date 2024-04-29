import React from 'react';
import Header from '../Component/Header/Header';
import MainTitle from '../Component/MainTitle/MainTitle';
import MainImage from '../Component/MainImage/MainImage';
import MainDescription from '../Component/MainDescription/MainDescription';
import MainButtonChoise from '../Component/MainButtonChoise/MainButtonChoise';
import {listLink} from '../data/Link/Link.js'

const Main = () => {

    return (
        <div>
            <Header />
            <MainImage />
            <MainDescription />
            <MainButtonChoise listLink={listLink} />
        </div>
    );
};

export default Main;