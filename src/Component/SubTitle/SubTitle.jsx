import React from 'react';
import './SubTitle.scss'

const SubTitle = ({title}) => {
    return (
        <div className='sub-title'>
            <h2>{title}</h2>
        </div>
    );
};

export default SubTitle;