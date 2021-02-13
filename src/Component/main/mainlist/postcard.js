import React, { Component } from 'react';
import "./mainlist.css";
import axios from 'axios';
import {Card } from '@material-ui/core';

import PostImageContainer from './PostCard/PostImageBox';
import PostHeaderContainer from './PostCard/PostHeaderBox';
import PostLikesContainer from './PostCard/PostLikesBox';
import PostContentContainer from './PostCard/PostContentBox';


class postcard extends Component {
   
//     constructor(props)
//     {
//         super(props);
//         this.state={
//           loadresinfo:[],
//           loadpostNum:[]
//         }
//     } 
//    // 리뷰번호로 리뷰정보얻기
//   getReviewNumber = () => {
//     let url = "http://localhost:9001/review/detail";
//     axios.get(url,{
//         params:{
//             rnum:26
//         }
//     })
//     .then(respones => {
//         console.log(respones.data);
//         this.setState({
//           loadpostNum:respones.data
//         })
//     }).catch(error => {
//         console.log("리뷰넘버 출력 : " + error);
//     })

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
            <Card className='mainlist_container'>
                {this.props.row.rnum}
                {this.props.row.mnick}
                <PostImageContainer/>                
                <PostHeaderContainer/>                
                <PostLikesContainer/>
                <PostContentContainer/>                
            </Card>
        )
    }
}

export default postcard;