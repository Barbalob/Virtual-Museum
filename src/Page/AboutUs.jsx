import React from 'react';
import AboutAuthors from '../Component/AboutAuthors/AboutAuthors'
import Header from '../Component/Header/Header'
import MainTitle from '../Component/MainTitle/MainTitle'
import TitleCard from '../Component/TitleCard/TitleCard'
import Footer from '../Component/Footer/Footer';

const AboutUs = () => {
    return (
        <>
            <Header />
            <MainTitle />
            <TitleCard title='Об авторах'/>
            <AboutAuthors />
            <Footer />
        </>
    );
};

export default AboutUs;