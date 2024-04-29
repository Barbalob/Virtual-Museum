import React from 'react';
import './NavArticle.scss'
import { Link} from 'react-scroll';

const NavArticle = ({arrayArticles}) => {
    return (
        <div className='nav-articles'>
            <ul className='nav-articles-list'>
                {arrayArticles.map(el => {
                    return (
                        <li className="nav-articles-list-items">
                            <Link  to={el.title}  smooth={true} >{el.title}</Link>
                        </li>
                    )
                })}     
            </ul>
        </div>
    );
};

export default NavArticle;