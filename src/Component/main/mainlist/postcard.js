import React, { Component } from 'react';
import "./mainlist.css";
import axios from 'axios';
import {Card } from '@material-ui/core';
import { ListItem, ListItemText, ListItemAvatar, Avatar, CardContent, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

import PostImageContainer from './PostCard/PostImageBox';
import PostHeaderContainer from './PostCard/PostHeaderBox';
import PostLikesContainer from './PostCard/PostLikesBox';
import PostContentContainer from './PostCard/PostContentBox';


class postcard extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          datalist:[]
        
        }
    } 
   // 리뷰번호로 리뷰정보얻기
   getMypageList=()=>{
    let url = "http://localhost:9001/mypage/getMyListInformation";
    axios.get(url,{
        params:{
            rnum:this.props.row.rnum
        }
    })
    .then(respones => {
        console.log(respones.data);
        this.setState({
            datalist:respones.data
        })
    }).catch(error => {
        console.log("마이페이지 리스트 오류 : " + error);
    })
    }

    componentDidMount(){
        this.getMypageList();
    }

// }
// // 레스토랑정보
// getResInfo = () => {
//     let url = "http://localhost:9001/review/res";
//     axios.get(url,{
//         params:{
//            rnum:26
//         }
//     })
//     .then(res => {
//         console.log(res.data);
//         this.setState({
//           loadresinfo:res.data
//         })
//     }).catch(error => {
//         console.log("레스토랑정보불러오기 에러 : " + error);
//     })

// }
// componentDidMount() {
//     this.loadpostNum();//처음시작시 백엔드로부터 데이터 가져오기
//     this.loadresinfo();
// }

    render() {
        
        return (
    
            <div className="mypage_listitem">
                {this.props.row.rnum}
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="mainlist__header_profphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshg1UlZU8R3dPaWcIAdVgnkrLSKgN-knvPg&usqp=CAU" alt="user"/>
                    </ListItemAvatar>
                    <ListItemText  className="mainlist__header_id" primary={this.state.datalist.mnick} secondary={this.state.datalist.resaddr}></ListItemText>
                </ListItem>
                <div className="listitem_img">
                    <img src="http://placehold.it/200" alt="리스트" ></img>
                    <span>{this.state.datalist.rscore}</span>
                </div>
                <div className="listitem_btn">
                    <span>{this.state.datalist.resname}</span>
                    <span>❤{this.state.datalist.likes}</span>
                </div>
                <div className="listitem_btn writeday">
                    <span>{this.state.datalist.rwriteday}</span>
                </div>
                   
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {this.state.datalist.rcontent}
                </Typography>
                </CardContent>
                    <div>
                        {this.state.datalist.hashtag}
                    </div>                     
                    <Link to={`./detail/${this.props.row.rnum}`} >기타</Link>
                <PostLikesContainer/>
            </div>        
        )
    }
}

export default postcard;