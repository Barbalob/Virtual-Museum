import React from 'react';
import Header from '../Component/Header/Header';
import MainTitle from '../Component/MainTitle/MainTitle';
import TitleCard from '../Component/TitleCard/TitleCard';
import PopupText from '../Component/PopupText/PopupText';
import SectionSelection from '../Component/SectionSelection/SectionSelection';
import Footer from '../Component/Footer/Footer';



const PageMain = ({data, head}) => {
    return (
        <> 
            <Header />
            <MainTitle />
            <TitleCard title={data.title} page={'Main'}/>
            <PopupText mainDescription={data.mainDescription}/>
            <SectionSelection data={data} head={head}/>
            <Footer />
        </> 
    );
};

export default PageMain;