import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss'
import { useLocation } from 'react-router-dom';
const Footer = () => {
    const location = useLocation();
    const headPath = location.pathname.split('/');
    let typeGB = 'gb'

    const srcDict = {
        srcLogo: typeGB ? 'RussianScienceFoundationWhite.png': 'RussianScienceFoundation.png',
        srcHome: typeGB ? 'home.png': 'homeRU.png',
        srcBibliography: typeGB ? 'search.png': 'searchRU.png',
        srcUsers: typeGB ? 'users.png': 'usersRU.png',
    }

    const styleFooter = {'background' : typeGB ? 'rgba(154, 126, 95, 1)':'rgba(255, 255, 255, 1)', }
    const styleLine = {'background' : typeGB ? 'rgba(191, 161, 129, 1)':'rgba(220, 206, 191, 1)'}
    const styleText = {'color' : typeGB ? 'rgba(255, 255, 255, 1)':'rgba(116, 110, 73, 1)'}

    
    return (
        <div className='footer' style={styleFooter}>
            <ul className='footer-list'>
                <li className="footer-list-item footer-logo">
                    <img src={`../.././assets/${srcDict.srcLogo}`} alt="" className="footer-list-item-img" />
                    <p style={styleText} className="footer-list-item-a-text">Сайт разработан при <br/> поддержке Российского<br/> научного фонда - РНФ</p>
                </li>
                <li style={styleLine} className="vertically-line"></li>
                <li className="footer-list-item">
                    <NavLink to='/' className="footer-list-item-a">
                        <img className="footer-list-item-a-img" src={`../.././assets/icon/${srcDict.srcHome}`} alt="" />
                        <p style={styleText} className="footer-list-item-a-text">В начало</p>
                    </NavLink> 
                </li> 
                <li style={styleLine} className="vertically-line"></li>
                <li className="footer-list-item">
                    <NavLink to='/bibliography/ru' className="footer-list-item-a">
                        <img className="footer-list-item-a-img" src={`../.././assets/icon/${srcDict.srcBibliography}`} alt="" />
                        <p style={styleText} className="footer-list-item-a-text">Библиография</p>
                    </NavLink>
                </li>
                <li style={styleLine} className="vertically-line"></li>
                <li className="footer-list-item">
                    <NavLink to="#"  NavLink className="footer-list-item-a">
                        <img className="footer-list-item-a-img" src={`../.././assets/icon/${srcDict.srcUsers}`} alt="" />
                        <p style={styleText} className="footer-list-item-a-text">Авторы</p>
                    </NavLink>
                </li>
            </ul>
            
        </div>
    );
};

export default Footer;