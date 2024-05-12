import React from 'react';
import Header from '../Component/Header/Header';
import MainTitle from '../Component/MainTitle/MainTitle';
import TitleCard from '../Component/TitleCard/TitleCard';
import BibliographyList from '../Component/BibliographyList/BibliographyList';
import Footer from '../Component/Footer/Footer';


const Bibliography = ({type, bibliographyList}) => {
    const mainColor = type==='ru'? 'rgba(255, 255, 255, 1)' : 'rgba(220, 206, 191, 1)'
    const title = type==='ru'? 'Библиография Российская Империя' : 'Библиография Британская Империя'
    return (
        <div className='wrapper' style={{
            "heightMin":"100vh",
            "background": mainColor, 
            }
        }> 
            <Header />
            <MainTitle />
            <TitleCard title={title}/>
            <BibliographyList BibliographyList={bibliographyList}/>
            <Footer />
        </div> 
    );
};

export default Bibliography;