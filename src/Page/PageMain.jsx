import React, { useEffect, useState } from 'react';
import Header from '../Component/Header/Header';
import Header2 from '../Component/Header/Header2';
import MainTitle from '../Component/MainTitle/MainTitle';
import TitleCard from '../Component/TitleCard/TitleCard';
import PopupText from '../Component/PopupText/PopupText';
import SectionSelection from '../Component/SectionSelection/SectionSelection';
import Footer from '../Component/Footer/Footer';
import { useLocation } from 'react-router-dom';



const PageMain = ({data, head}) => {
    const loc = useLocation().pathname
    const [flag, setFlag] = useState(true)
    useEffect(()=>{
        console.log("Effect", loc);
        setFlag(!flag)
    }, [loc])
    return (
        <> 
            {flag ? <Header/> : <Header2/>}
            <MainTitle />
            <TitleCard title={data.title} page={'Main'}/>
            <PopupText mainDescription={data.mainDescription}/>
            <SectionSelection data={data} head={head}/>
            <Footer />
        </> 
    );
};

export default PageMain;