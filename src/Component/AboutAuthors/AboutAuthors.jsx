import React from 'react';
import './AboutAuthors.scss'
import srcImage from '../../assets/photo/Artem.jpg'
import srcArrow from '../../assets/arrow-down.svg'

const AboutAuthors = () => {
    const scientificConsultants = [
        {
            name: 'Репина Лорина Петровна',
            src:srcImage,
            description:'Член-корреспондент РАН, доктор исторических наук, профессор, главный научный сотрудник, заведующая Отделом историко-теоретических исследований, руководитель Центра интеллектуальной истории Института всеобщей истории РАН; главный научный сотрудник лаборатории эдиционной археографии Уральского федерального университета.'
        },
        {
            name: 'Высокова Вероника Витальевна',
            src:srcImage,
            description:'Доктор исторических наук, доцент, профессор кафедры новой и новейшей истории Уральского федерального университета.'
        },
        {
            name: 'Соболева Лариса Степановна',
            src:srcImage,
            description:'Доктор филологических наук, профессор, профессор кафедры русской и зарубежной литературы, старший научный сотрудник лаборатории эдиционной археографии Уральского федерального университета.'
        },
        {
            name: 'Киселев Михаил Александрович',
            src:srcImage,
            description:'Кандидат исторических наук, старший научный сотрудник лаборатории междисциплинарных гуманитарных исследований Института истории и археологии Уральского отделения РАН; доцент кафедры истории России, старший научный сотрудник лаборатории эдиционной археографии Уральского федерального университета.'
        },
    ]
    const Lyricists = [
        {
            name: 'Шпак Георгий Владимирович',
            src:srcImage,
            description:''
        },
        {
            name: 'Шипицына Юлия Сергеевна',
            src:srcImage,
            description:''
        },
        {
            name: 'Попович Алексей Игоревич',
            src:srcImage,
            description:''
        },
        {
            name: 'Гаврилин Борис Александрович',
            src:srcImage,
            description:''
        },
        {
            name: 'Калинина Алена Денисовна',
            src:srcImage,
            description:''
        },
        {
            name: 'Созинова Ксения Андреевна',
            src:srcImage,
            description:''
        },
        {
            name: 'Майоров Кирилл Владимирович',
            src:srcImage,
            description:''
        },
        {
            name: 'Зубко Ксения Витальевна',
            src:srcImage,
            description:''
        },
        {
            name: 'Соловьева Екатерина Алексеевна',
            src:srcImage,
            description:''
        },
    ]

    const WebsiteDesignDevelopment = [
        {
            name: 'Кузнецова Мария Сергеевна',
            src:srcImage,
            description:''
        },
        {
            name: 'Федорова Елизавета Евгеньевна',
            src:srcImage,
            description:''
        },
        {
            name: 'Кунщиков Артем Александрович',
            src:srcImage,
            description:''
        },
        {
            name: 'Ситников Андрей Викторович',
            src:srcImage,
            description:''
        },
    ]
    return (
        <div className='about'>

            <div className='about-wrapper'>
                <input id='checkbox-about-1' className="checkbox-about" type="checkbox" name=""/>
                <h2 className='about-title'>Написание текстов</h2>
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
                <h2 className='about-title'>Научные консультанты</h2>
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