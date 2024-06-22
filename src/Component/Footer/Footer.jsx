import React, {useRef} from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss'
import { useLocation } from 'react-router-dom';
import srcRussianScienceFoundationWhite from "../../assets/RussianScienceFoundationWhite.png"
import srcUrfuLogo from "../../assets/urfuLogoWhite.svg"

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
    const refBibliography = useRef(null)

    const styleFooter = {'background' : 'rgba(154, 126, 95, 1)', }
    const styleLine = {'background' : 'rgba(191, 161, 129, 1)'}
    const styleText = {'color' : 'rgba(255, 255, 255, 1)'}

    
    return (
        <div className='footer' style={styleFooter}>
            <ul className='footer-list'>
                <li className="footer-list-item footer-logo">
                    <div className='footer-logo-list'>
                        <img src={`${srcDict.srcLogo}`} alt="" className="footer-list-item-img logo-1" />
                        <img src={`${srcUrfuLogo}`} alt="" className="footer-list-item-img logo-2" />
                    </div>
                    <p style={styleText} className="footer-list-item-a-text">Виртуальный музей создан при поддержке Российского научного фонда, проект № 22-18-00488 «Кризис ценностей и стратегии преодоления: идея “общего блага” в интеллектуальном дискурсе Британии и России (1650–1750)»</p>
                </li>
                <div className='footer-list-wrapper'>

                {/* <li style={styleLine} className="vertically-line"></li> */}
                <li className="footer-list-item">
                    <NavLink to='/' className="footer-list-item-a">
                        <img className="footer-list-item-a-img" src={`${srcDict.srcHome}`} alt="" />
                        <p style={styleText} className="footer-list-item-a-text">В начало</p>
                    </NavLink> 
                </li> 
                {/* <li style={styleLine} className="vertically-line"></li> */}
                <li className="footer-list-item">
                    <li className="footer-list-item-drop">
                        <button onClick={()=>{refBibliography.current.classList.toggle('footer-bibliography-list')}} className='footer-list-item-drop-btn'>
                            <img className="footer-list-item-a-img" src={`${srcDict.srcBibliography}`} alt="" />
                            <p style={styleText} className="footer-list-item-a-text">Библиография</p>
                        </button>
                        <ul ref={refBibliography} className='dropdown-list-footer'>
                            <NavLink className='dropdown-list-footer-item' to='/bibliography/ru'>Россия</NavLink>
                            <NavLink className='dropdown-list-footer-item' to='/bibliography/gb'>Британия</NavLink>
                        </ul>
                    </li>
                    
                </li>
                {/* <li style={styleLine} className="vertically-line"></li> */}
                <li className="footer-list-item">
                    <NavLink to="/about"  NavLink className="footer-list-item-a">
                        <img className="footer-list-item-a-img" src={`${srcDict.srcUsers}`} alt="" />
                        <p style={styleText} className="footer-list-item-a-text">Авторы</p>
                    </NavLink>
                </li>
                </div>
            </ul>
            
        </div>
    );
};

export default Footer;