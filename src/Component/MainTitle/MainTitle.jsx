import React from 'react';
import './MainTitle.scss'
import { NavLink } from 'react-router-dom';

const MainTitle = () => {
    return (
        <div className='main-title'>
            <h1 className='main-title-h1'> <NavLink to='/'>ЭПОХА ПЕРЕМЕН</NavLink></h1>
            <h2 className='main-title-h2'>  <NavLink to='/'>Интеллектуалы, власть и общество в Британии и России XVII–XVIII веков</NavLink></h2>
        </div>
    );
};

export default MainTitle;