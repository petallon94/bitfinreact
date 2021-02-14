import React, { Component } from 'react';
import "./mainlist.css";
import axios from 'axios';
import {Card } from '@material-ui/core';
import { ListItem, ListItemText, ListItemAvatar, Avatar, CardContent, Typography} from '@material-ui/core';
import PostLikesContainer from './PostLikesBox';


class postcard extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          datalist:[],
          hashlist:[],
          commlist:[]
        
        }
    } 

    
   // 리뷰번호로 리뷰정보얻기
   getMypageList=()=>{
    let url = "http://localhost:9001/review/postlist";
    axios.get(url,{
        params:{
            rnum:this.props.row.rnum
        }
    })
    .then(respones => {
        //console.log(respones.data);
        this.setState({
            datalist:respones.data
        })
    }).catch(error => {
        console.log("포스팅 리스트 오류 : " + error);
    })
    }

    // 리뷰번호로 해시태크 정보얻기
   getHashList=()=>{
    let url = "http://localhost:9001/review/hash";
    axios.get(url,{
        params:{
            rnum:this.props.row.rnum
        }
    })
    .then(respones => {
        //console.log(respones.data);
        this.setState({
            hashlist:respones.data
        })
    }).catch(error => {
        console.log("해시태그 리스트 오류 : " + error);
    })
    }

 // 리뷰번호로 댓글 정보얻기

 getCommentList=()=>{
  
  axios.get('http://localhost:9001/review/re',{
    params:{
        rnum:this.props.row.rnum
      }
  })
  .then(respones => { 
    console.log(respones.data);  
    this.setState({         
      commlist:respones.data
    })
  }).catch(error => {
      console.log("댓글 리스트 오류 : " + error);
  })
 }


    componentDidMount(){
        this.getMypageList();
        this.getHashList();
        this.getCommentList();
    }

    

    render() {
        
        //마이페이지로 이동 
        const goMypage = () => {
            this.props.history.push("/main/mypage/"+this.state.datalist.mnick);
        }
        // 더보기 클릭시 디테일페이지로 이동
        const goDetail = () => {
        this.props.history.push("/main/detail/"+this.state.datalist.rnum);
        }

        const url="http://localhost:9001/reviewsave/";
        return (
            
            <Card className="mainlist_container">
                {this.props.row.rnum}
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="mainlist__header_profphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshg1UlZU8R3dPaWcIAdVgnkrLSKgN-knvPg&usqp=CAU" alt="user"/>
                    </ListItemAvatar>
                    <ListItemText  className="mainlist__header_id" onClick={goMypage} primary={this.state.datalist.mnick} secondary={this.state.datalist.resaddr}/>
                </ListItem>
                <div className="listitem_img">
                    <img src={url+this.state.datalist.picname} alt="" ></img>
                    
                </div>
                <div className="postcard_txt">
                <div className="listitem_btn">
                    <span>{this.state.datalist.resname}</span>
                    <span>❤{this.state.datalist.likes}</span>
                    <span>{this.state.datalist.rscore}</span>
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
                        {this.state.hashlist.hashtag}
                    {/*    
                     {editMode
                    postData.split(/(#[^\s#]+)/g).map((v, i) => {
                    if (v.match(/(#[^\s#]+)/)) {
                      return <a href={`/hashtag/${v.slice(1)}`} prefetch={false} key={i}>{v}</a>
                     }
                   return v;
                   })} */}

                    </div>                     
                    <div className="postcard_detail" onClick={goDetail}>더보기</div>
                    <PostLikesContainer nick={this.state.commlist.amnick} comm={this.state.commlist.acontent} date={this.state.commlist.awriteday} history={this.state.commlist.history}/>
                </div>  
                </Card>  
                    
        )
    }
}


export default postcard;

