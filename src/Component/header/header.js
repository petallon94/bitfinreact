import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/main" activeStyle={activeStyle}>main</NavLink></li>
                <li><NavLink exact to="/main/mypage" activeStyle={activeStyle}>mypage</NavLink></li>
    
            </ul>
            <hr/>
        </div>
    );
};

export default header;