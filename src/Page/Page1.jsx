import React, { useEffect, useState } from 'react';
import Header from '../Component/Header/Header';
import MainTitle from '../Component/MainTitle/MainTitle';
import TitleCard from '../Component/TitleCard/TitleCard';
import Ticket from '../Component/Ticket/Ticket';
import CardDescription from '../Component/CardDescription/CardDescription';
import SectionsArticle from '../Component/SectionsArticle/SectionsArticle';
import Footer from '../Component/Footer/Footer';
import { useLocation, useParams } from 'react-router-dom';
import Header2 from '../Component/Header/Header2';


const Page1 = ({data}) => {
    const params = useParams()
    const {type, id} = params
    const card = data.listSections[type][id]
    const mainColor = type==='ru'? 'rgba(255, 255, 255, 1)' : 'rgba(220, 206, 191, 1)'
    const loc = useLocation().pathname
    const [flag, setFlag] = useState(true)
    useEffect(()=>{
        console.log("Effect", loc);
        setFlag(!flag)
    }, [loc])
    return (
        <div className='wrapper' style={{
            "minHeight":"100vh",
            "background": mainColor, 
            }
        }> 
            {flag ? <Header/> : <Header2/>}
            <MainTitle />
            <TitleCard title={card.title} page="Page1"/>
            <Ticket
                type={type} 
                description={card.descriptionTicket}
                srcImg={card.scrImgTicket}
            />
            <CardDescription 
                type={type}
                description={card.description}
             />
            <SectionsArticle params={params} data={data}/>
            <Footer />
        </div> 
    );
};

export default Page1;