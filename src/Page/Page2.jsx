import React from 'react';
import Header from '../Component/Header/Header';
import MainTitle from '../Component/MainTitle/MainTitle';
import TitleCard from '../Component/TitleCard/TitleCard';
import CardImage from '../Component/CardImage/CardImage';
import CardDescription2 from '../Component/CardDescription2/CardDescription2';
import Article from '../Component/Article/Article';
import SubTitle from '../Component/SubTitle/SubTitle';
import NavArticle from '../Component/NavArticle/NavArticle';
import { useParams } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

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
            <Header />
            <MainTitle />
            <TitleCard title={subCard.title} page='Page2'/>
            <CardDescription2 type={type} description={subCard.description}/>
            <NavArticle arrayArticles={subCard.arrayArticles} />
            {subCard.arrayArticles.map((el, index) => {
                return (
                    <Element key={index} name={el.title}>
                        <SubTitle title={el.title} />
                        <CardImage 
                            arrayImg={el.arrayImg} 
                        />
                        <CardDescription2 type={type} description={subCard.description}/>
                    </Element>
                )
            })}
            <Article  params={params} data={data}/>
            <Footer />
        </div>
    );
};

export default Page2;