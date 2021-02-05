import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import { FaWaze } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaLaughWink } from "react-icons/fa";


class header extends Component {    
    render() {
        const activeStyle = {
        color: 'green',
        fontSize: '2rem'
        };

        return (
            <div>
               
                        <NavLink exact to="/main" 
                    activeStyle={activeStyle}>오늘의회식</NavLink>
                    
                        <NavLink exact to="/main/search" 
                        activeStyle={activeStyle}><BiSearchAlt />search</NavLink>
                   
                        <NavLink exact to="/main/chatting" 
                        activeStyle={activeStyle}><FaWaze/>chat</NavLink>
                    
                        <NavLink exact to="/main/follow" 
                        activeStyle={activeStyle}><FaHeart />follow</NavLink>
                    
                        <NavLink exact to="/main/mypage" 
                        activeStyle={activeStyle}>< FaLaughWink/>mypage</NavLink>
                   
                <hr/>
            </div>
        );
    };
}
export default header;

 /* static navigationOptions = {
    headerLeft: <NavLink exact to="/main/chatting" activeStyle={activeStyle}>chat</NavLink>,
    title: <NavLink exact to="/main" activeStyle={activeStyle}>오늘의회식</NavLink>
    headerRight: <NavLink exact to="/main/search" activeStyle={activeStyle}>search</NavLink>,
                <NavLink exact to="/main/follow activeStyle={activeStyle}>follow</NavLink>,
                <NavLink exact to="/main/mypage" activeStyle={activeStyle}>mypage</NavLink>
    }*/