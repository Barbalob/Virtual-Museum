import React from 'react';
import './AboutAuthors.scss'
import srcArtem from '../../assets/photo/Artem.jpg'
import srcAndrey from '../../assets/photo/Andrey.jpg'
import srcGavrilin from '../../assets/photo/Gavrilin.jpg'
import srcKalinina from '../../assets/photo/Kalinina.jpg'
import srcKisilev from '../../assets/photo/Kisilev.jpg'
import srcLisa from '../../assets/photo/Lisa.jpg'
import srcMaiorov from '../../assets/photo/Maiorov.jpg'
import srcMaria from '../../assets/photo/Maria.jpg'
import srcPopovich from '../../assets/photo/Popovich.jpg'
import srcRepina from '../../assets/photo/Repina.jpg'
import srcShipicina from '../../assets/photo/Shipicina.jpg'
import srcShpak from '../../assets/photo/Shpak.jpg'
import srcSoboleva from '../../assets/photo/Soboleva.jpg'
import srcSolovjeva from '../../assets/photo/Solovjeva.jpg'
import srcSozinova from '../../assets/photo/Sozinova.jpg'
import srcVisokova from '../../assets/photo/Visokova.jpg'
import srcZubko from '../../assets/photo/Zubko.jpg'

import srcArrow from '../../assets/arrow-down.svg'

const AboutAuthors = () => {
    const scientificConsultants = [
        {
            name: 'Репина Лорина Петровна',
            src:srcRepina,
            description:'Член-корреспондент РАН, доктор исторических наук, профессор, главный научный сотрудник, заведующая Отделом историко-теоретических исследований, руководитель Центра интеллектуальной истории Института всеобщей истории РАН; главный научный сотрудник лаборатории эдиционной археографии Уральского федерального университета.'
        },
        {
            name: 'Высокова Вероника Витальевна',
            src:srcVisokova,
            description:'Доктор исторических наук, доцент, профессор кафедры новой и новейшей истории Уральского федерального университета.'
        },
        {
            name: 'Соболева Лариса Степановна',
            src:srcSoboleva,
            description:'Доктор филологических наук, профессор, профессор кафедры русской и зарубежной литературы, старший научный сотрудник лаборатории эдиционной археографии Уральского федерального университета.'
        },
        {
            name: 'Киселев Михаил Александрович',
            src:srcKisilev,
            description:'Кандидат исторических наук, старший научный сотрудник лаборатории междисциплинарных гуманитарных исследований Института истории и археологии Уральского отделения РАН; доцент кафедры истории России, старший научный сотрудник лаборатории эдиционной археографии Уральского федерального университета.'
        },
    ]
    const Lyricists = [
        {
            name: 'Шпак Георгий Владимирович',
            src:srcShpak,
            description:'Кандидат исторических наук, старший научный сотрудник Центра сравнительной истории и теории цивилизаций Института всеобщей истории РАН, старший научный сотрудник лаборатории эдиционной археографии Уральского федерального университета, преподаватель Российского государственного гуманитарного университета.'
        },
        {
            name: 'Шипицына Юлия Сергеевна',
            src:srcShipicina,
            description:'Ассистент кафедры зарубежного регионоведения Уральского федерального университета.'
        },
        {
            name: 'Попович Алексей Игоревич',
            src:srcPopovich,
            description:'Младший научный сотрудник лаборатории эдиционной археографии, ассистент кафедры русской и зарубежной литературы Уральского федерального университета.'
        },
        {
            name: 'Гаврилин Борис Александрович',
            src:srcGavrilin,
            description:'Ассистент кафедры зарубежного регионоведения Уральского федерального университета.'
        },
        {
            name: 'Калинина Алена Денисовна',
            src:srcKalinina,
            description:'Документовед отдела организации научной и инновационной работы Уральского гуманитарного института Уральского федерального университета.'
        },
        {
            name: 'Созинова Ксения Андреевна',
            src:srcSozinova,
            description:'Кандидат исторических наук, доцент кафедры зарубежного регионоведения Уральского федерального университета.'
        },
        {
            name: 'Майоров Кирилл Владимирович',
            src:srcMaiorov,
            description:'Специалист по учебно-методической работе кафедры истории искусств и музееведения Уральского федерального университета.'
        },
        {
            name: 'Зубко Ксения Витальевна',
            src:srcZubko,
            description:'Лаборант-исследователь лаборатории эдиционной археографии Уральского федерального университета.'
        },
        {
            name: 'Соловьева Екатерина Алексеевна',
            src:srcSolovjeva,
            description:'Магистрант Уральского федерального университета.'
        },
    ]

    const WebsiteDesignDevelopment = [
        {
            name: 'Кузнецова Мария Сергеевна',
            src:srcMaria,
            description:'Студент Института радиоэлектроники и информационных технологий-РТФ Уральского федерального университета.'
        },
        {
            name: 'Федорова Елизавета Евгеньевна',
            src:srcLisa,
            description:'Студент Института радиоэлектроники и информационных технологий-РТФ Уральского федерального университета.'
        },
        {
            name: 'Кунщиков Артём Александрович',
            src:srcArtem,
            description:'Студент Института радиоэлектроники и информационных технологий-РТФ Уральского федерального университета.'
        },
        {
            name: 'Ситников Андрей Викторович',
            src:srcAndrey,
            description:'Студент Института радиоэлектроники и информационных технологий-РТФ Уральского федерального университета.'
        },
    ]
    return (
        <div className='about'>

            <div className='about-wrapper'>
                <input id='checkbox-about-1' className="checkbox-about" type="checkbox" name=""/>
                <h2 className='about-title'>Научные консультанты</h2>
                <ul className="about-list">
                    {scientificConsultants.map((el, index )=> {
                        return (
                            <li key={index} className="about-list-item">
                                <img className="about-list-item-img" src={el.src} />
                                <p className="about-list-item-name">{el.name}</p>
                                <p id="about-list-item-description-1" className="about-list-item-description">{el.description}</p>
                            </li>
                        )
                    })}
                </ul>
                <button className='about-btn'> 
                    <img id='about-btn-img-1' className='about-btn-img' src={srcArrow} alt="" />
                </button>
            </div>

            <div className='about-wrapper'>
                <input id='checkbox-about-2' className="checkbox-about" type="checkbox" name=""/>
                <h2 className='about-title'>Авторы статей</h2>
                <ul className="about-list-2">
                    {Lyricists.map((el, index )=> {
                        return (
                            <li key={index} className="about-list-2-item">
                                <img className="about-list-2-item-img" src={el.src} />
                                <p className="about-list-2-item-name">{el.name}</p>
                                <p id="about-list-2-item-description-2" className="about-list-2-item-description">
                                    {el.description}
                                    Доктор исторических наук, доцент, профессор кафедры новой и новейшей истории Уральского федерального университета.
                                 </p>
                            </li>
                        )
                    })}
                </ul>
                <button className='about-btn'> 
                    <img id='about-btn-img-2' className='about-btn-img' src={srcArrow} alt="" />
                </button>
            </div>

            <div className='about-wrapper'>
                <input id='checkbox-about-3' className="checkbox-about" type="checkbox" name=""/>
                <h2 className='about-title'>Дизайн и разработка сайта</h2>
                <ul className="about-list">
                    {WebsiteDesignDevelopment.map((el, index )=> {
                        return (
                            <li key={index} className="about-list-item">
                                <img className="about-list-item-img" src={el.src} />
                                <p className="about-list-item-name">{el.name}</p>
                                <p id="about-list-item-description-3" className="about-list-item-description">
                                    {el.description}
                                </p>
                            </li>
                        )
                    })}
                </ul>
                <button className='about-btn'> 
                    <img id='about-btn-img-3' className='about-btn-img' src={srcArrow} alt="" />
                </button>
            </div>


        </div>
    );
};

export default AboutAuthors;