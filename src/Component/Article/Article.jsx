import React from 'react';
import './Article.scss'
import {NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Article = ({params, data}) => {
    const {type, id} = params
    const card = data.listSections[type][id]
    const article = (card.sectionArticles.map(el => {
        return el.title
    }))
    const location = useLocation();
    const headPath = location.pathname.split('/');


    const styleName = "sections-list-2"
    return (
        <div className='sections-wrapper-1'>
            {!!article ? 
            <div className='sections'>
                <h3 className={styleName + "-title"}>Статьи раздела</h3>
                <ul className={styleName}>
                    {article.map((section, index) => {
                        return ( <li key={index} className={styleName + '-item'}><NavLink to={`/${headPath[1]}/${headPath[2]}/${headPath[3]}/${index}`}>{section}</NavLink></li>)
                        })}
                </ul>
             </div>
            :""}
            
        </div>
    );
};

export default Article;