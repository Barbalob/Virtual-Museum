import React from 'react';
import Header from '../Component/Header/Header';
import MainTitle from '../Component/MainTitle/MainTitle';
import TitleCard from '../Component/TitleCard/TitleCard';
import CardImage from '../Component/CardImage/CardImage';
import CardDescription2 from '../Component/CardDescription2/CardDescription2';
import Article from '../Component/Article/Article';
import { useParams } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

const Page2 = ({data}) => {
    const params = useParams()
    const {type, id, subid} = params
    const card = data.listSections[type][id]
    const subCard = card.sectionArticles[subid]
    console.log(subCard);
    const mainColor = type==='ru'? 'rgba(255, 255, 255, 1)' : 'rgba(220, 206, 191, 1)'
    return ( 
        <div className='wrapper' style={{
            "minHeight":"100vh",
            "background": mainColor,
            }
        }> 
            {/* <Header /> */}
            <MainTitle />
            <TitleCard title={subCard.title} page='Page2'/>
            <CardImage 
                arrayImg={subCard.arrayImg} 
            />
            <CardDescription2 type={type} description={subCard.description}/>
            <Article  params={params} data={data}/>
            <Footer />
        </div>
    );
};

export default Page2;