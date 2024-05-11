import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss'
import { useLocation } from 'react-router-dom';
import srcRussianScienceFoundationWhite from "../../assets/RussianScienceFoundationWhite.png"

import srcHome from "../../assets/icon/home.png"
import srcBibliography from "../../assets/icon/search.png"
import srcUsers from "../../assets/icon/users.png"


const Footer = () => {
    const srcDict = {
        srcLogo: srcRussianScienceFoundationWhite,
        srcHome: srcHome,
        srcBibliography: srcBibliography,
        srcUsers: srcUsers,
    }

    const styleFooter = {'background' : 'rgba(154, 126, 95, 1)', }
    const styleLine = {'background' : 'rgba(191, 161, 129, 1)'}
    const styleText = {'color' : 'rgba(255, 255, 255, 1)'}

    
    return (
        <div className='footer' style={styleFooter}>
            <ul className='footer-list'>
                <li className="footer-list-item footer-logo">
                    <img src={`${srcDict.srcLogo}`} alt="" className="footer-list-item-img" />
                    <p style={styleText} className="footer-list-item-a-text">Сайт разработан при <br/> поддержке Российского<br/> научного фонда - РНФ</p>
                </li>
                <li style={styleLine} className="vertically-line"></li>
                <li className="footer-list-item">
                    <NavLink to='/' className="footer-list-item-a">
                        <img className="footer-list-item-a-img" src={`${srcDict.srcHome}`} alt="" />
                        <p style={styleText} className="footer-list-item-a-text">В начало</p>
                    </NavLink> 
                </li> 
                <li style={styleLine} className="vertically-line"></li>
                <li className="footer-list-item">
                    <li className="footer-list-item-drop">
                        <button className='footer-list-item-drop-btn'>
                            <img className="footer-list-item-a-img" src={`${srcDict.srcBibliography}`} alt="" />
                            <p style={styleText} className="footer-list-item-a-text">Библиография</p>
                        </button>
                        <ul className='dropdown-list-footer'>
                            <NavLink className='dropdown-list-footer-item' to='/bibliography/ru'>Библиография Россия</NavLink>
                            <NavLink className='dropdown-list-footer-item' to='/bibliography/gb'>Библиография Британия</NavLink>
                        </ul>
                    </li>
                    
                </li>
                <li style={styleLine} className="vertically-line"></li>
                <li className="footer-list-item">
                    <NavLink to="/about"  NavLink className="footer-list-item-a">
                        <img className="footer-list-item-a-img" src={`${srcDict.srcUsers}`} alt="" />
                        <p style={styleText} className="footer-list-item-a-text">Авторы</p>
                    </NavLink>
                </li>
            </ul>
            
        </div>
    );
};

export default Footer;