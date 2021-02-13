import React,{Component} from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import './mypage_list.css';
import {Link} from 'react-router-dom';

class ListPrint extends Component{

    render(){
        return(
            <div className="mypage_listitem">
                {/* 글넘버 */}
                <input type="hidden" value={this.props.key}></input>
                {/* 쓴사람 넘버 */}
                <input type="hidden" value={this.props.mnum}></input>
                {/* 닉네임 */}
                <input type="hidden" value={this.props.mnick}></input>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="mainlist__header_profphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshg1UlZU8R3dPaWcIAdVgnkrLSKgN-knvPg&usqp=CAU" alt="user"/>
                    </ListItemAvatar>
                    <ListItemText  className="mainlist__header_id" primary="시골된장찌개(mnick)" secondary="강남 신논현역 근처"></ListItemText>
                </ListItem>
                <div className="listitem_img">
                    <img src="http://placehold.it/200" alt="리스트" />
                    <span>*****</span>
                </div>
                <div className="listitem_btn">
                    <span>레스토랑 이름</span>
                    <span>❤</span>
                </div>
                <div className="listitem_btn writeday">
                    <span>2021-01-05</span>
                </div>
                <div className="listitem_content_wrapper">          
                    <div className="listitem_contents">
                        {this.props.rcontent}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default ListPrint;