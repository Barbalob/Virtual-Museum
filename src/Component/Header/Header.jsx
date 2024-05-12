import React, { useRef } from 'react';
import {NavLink} from "react-router-dom";
import './Header.scss'
import {listLink} from '../../data/Link/Link.js'
import srcRussianScienceFoundation from "../../assets/RussianScienceFoundation.png"

import srcArrow from '../../assets/arrow-mobile.svg'

import { Test_of_Faith } from '../../data/Test_of_Faith/Test_of_Faith';
import { Borders_and_Repr } from '../../data/Borders_and_Repr/Borders_and_Repr';
import { Subjugation_of_nature} from '../../data/Subjugation_of_nature/Subjugation_of_nature';
import { Birth_of_the_State} from '../../data/Birth_of_the_State/Birth_of_the_State';
import { Eradication_of_vices} from '../../data/Eradication_of_vices/Eradication_of_vices';
import { Understanding_life_and_death} from '../../data/Understanding_life_and_death/Understanding_life_and_death';
import { Raising_a_new_Man} from '../../data/Raising_a_new_Man/Raising_a_new_Man';
import { Empire_Building} from '../../data/Empire_Building/Empire_Building';



function CreateNav (data, href) {
  const mainTitle = data.title
  const sectionRu = data.listSections.ru.map((el)=>{
    const subSectionTitle = el.sectionArticles.map(el=>el.title)
    return {
      sectionTitle:el.title,
      subSectionTitle
    }
  })
  const sectionGb = data.listSections.gb.map((el)=>{
    const subSectionTitle = el.sectionArticles.map(el=>el.title)
    return {
      sectionTitle:el.title,
      subSectionTitle
    }
  })  
  const newData = {
    mainTitle,
    sectionRu,
    sectionGb
  }

  const refMain = useRef()
  const onClickMain = ()=>{
    refMain.current.classList.toggle("activeList");
  } 

  const listChoice = [
    {
      title:'Российская Империя',
      type:'ru',
      list:sectionRu
    },
    {
      title:'Британская Империя',
      type:'gb',
      list:sectionGb
    },
  ]

  return <>
      <div className='dropdown-list-item' ><NavLink to={href} className='decor-crown'>{newData.mainTitle}</NavLink> <button className='btn-header' onClick={onClickMain}  style={{transform:"rotate(-90deg)"}}><img src={srcArrow} alt="" /></button></div>
      <div className='dropdown-list-item-choice' ref={refMain}>
        {listChoice.map(mainEl => {
          return (
            <ul className='dropdown-list-item-choice-list'>
            <h2 className='dropdown-list-item-choice-list-title'>{mainEl.title}</h2>
              {mainEl.list.map((el, index1)=>{

                const ref= useRef()
                const onClick = () => {ref.current.classList.toggle("activeList")}

                return (
                  <>
                    <div className='dropdown-list-item-choice-list-item' ><NavLink to={`${href}/${mainEl.type}/${index1}`} className='decor-crown'>{el.sectionTitle}</NavLink> <button className='btn-header' onClick={onClick}><img src={srcArrow} alt="" /></button></div>
                    <ul className='dropdown-list-item-choice-list-item-sublist' ref={ref}>
                      {el.subSectionTitle.map((el, index2)=>{
                        return (
                          <li className='dropdown-list-item-choice-list-item-sublist-li'><NavLink to={`${href}/${mainEl.type}/${index1}/${index2}`}><div className='decor-crown'>{el}</div></NavLink></li>
                        ) 
                      })}
                    </ul>
                  </>
                )
              })}
            </ul>
          )
        })}
      </div>
  </>
}




const Header = (props) => {
  const listLink = [
    {
      href:'/test-of-faith',
      data:Test_of_Faith
    },
    {
      href:'/space-life-knowledge',
      data:Borders_and_Repr
    },
    {
      href:'/subjugation-of-nature',
      data:Subjugation_of_nature
    },
    {
      href:'/birth-of-the-state',
      data:Birth_of_the_State
    },
    {
      href:'/eradication-of-vices',
      data:Eradication_of_vices
    },
    {
      href:'/understanding-life-and-death',
      data:Understanding_life_and_death
    },
    {
      href:'/raising-a-new-man',
      data:Raising_a_new_Man
    },
    {
      href:'/empire-building',
      data:Empire_Building
    },
  ]

  return (
    <div className='header'>
        <div className="logo">
          <img src={srcRussianScienceFoundation} alt="" className="logo-img" />
          <p className="logo-p">Сайт разработан при поддержке<br/> Российского научного фонда - РНФ</p>
        </div>
        
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>  


        <nav className='nav'>
          <ul className="nav-list">
            <li className="nav-list-item">
              <button className='nav-list-item-btn'>Разделы</button>

              <ul className='dropdown-list'>
                {listLink.map(link=>{
                  return  CreateNav(link.data, link.href)
                })}
              </ul>
            </li>
            <li className="nav-list-item">
              
              <button className='nav-list-item-btn'>Библиография</button>
              <ul className='dropdown-list dropdown-list-bibliography'>
                <NavLink className='dropdown-list-item-bibliography' to='/bibliography/ru'>Библиография Россия</NavLink>
                <NavLink className='dropdown-list-item-bibliography' to='/bibliography/gb'>Библиография Британия</NavLink>
              </ul>
            </li>
            <li className="nav-list-item nav-list-item-a"><NavLink to='/about'>Об авторах</NavLink></li>
      
          </ul>
        </nav>

</div>

  );
};

 

export default Header;
