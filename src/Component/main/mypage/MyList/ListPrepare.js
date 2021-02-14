import React, { Component } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import './mypage_list.css';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import store from "../../../../redux/store";


class ListPrepare extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.rnum)
    }

    state = {
        mypageList:[],
        imgurl:'http://localhost:9001/reviewsave/',
        likeCount:'',
        likeme:''
    }
    
    getMypageList=()=>{
        let url = "http://localhost:9001/mypage/getMyListInformation";
        axios.get(url,{
            params:{
                rnum:this.props.rnum
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mypageList:respones.data
            })
        }).catch(error => {
            console.log("마이페이지 리스트 오류 : " + error);
        })
    }

    getLikeData=()=>{
        let url = "http://localhost:9001/mypage/selectLikere";
        axios.get(url,{
            params:{
                rnum:this.props.rnum,
                mnum:store.getState().mnum
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                likeCount:respones.data.likeCount,
                likeme:respones.data.likeme
            })
        }).catch(error => {
            console.log("마이페이지 리스트 오류 : " + error);
        })
    }


    //좋아요 버튼
    likeBtn=()=>{
        let url="";
        if(this.state.likeme){
            console.log(this.state.likeme)
            url="http://localhost:9001/mypage/delLike"
            console.log("좋아요 취소합니다.")
            this.setState({likeme:!this.state.likeme})
        }else{
            console.log(this.state.likeme)
            url="http://localhost:9001/mypage/addLike"
            console.log("좋아요합니다.")
            this.setState({likeme:!this.state.likeme})
        }
        axios.get(url,{
            params:{
                rnum:this.props.rnum,
                mnum:store.getState().mnum
            }
        })
        .then(respones => {
            console.log(respones.data);
        }).catch(error => {
            console.log(" 팔로우 에러... : " + error);
        })
    }






    changelikeButtonColor = () => {
        this.setState({ changeLikeButtonColor: !this.state.changeLikeButtonColor });
      };

    componentDidMount(){
         this.getMypageList();
         this.getLikeData();
    }
    
    render() {
        return (
            <div className="mypage_listitem">
                
                <div className="list_header">
                    <ListItem>
                        <ListItemAvatar onClick>
                            <Avatar className="mainlist__header_profphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshg1UlZU8R3dPaWcIAdVgnkrLSKgN-knvPg&usqp=CAU" alt="user"/>
                        </ListItemAvatar>
                        <ListItemText  className="mainlist__header_id" primary={this.state.mypageList.mnick} secondary={this.state.mypageList.resaddr}></ListItemText>
                    </ListItem>
                </div>

                <div className="list_body">
                    <Link to={"/main/detail/"+this.props.rnum}>
                        <div className="listitem_img">
                            <img src={this.state.imgurl+this.state.mypageList.picname}/>
                            <span>{"⭐".repeat(Number(this.state.mypageList.rscore))}</span>
                        </div>
                    </Link>
                    <div className="listitem_btn">
                    <Link to={"/main/detail/"+this.props.rnum}>
                        <span>{this.state.mypageList.resname}</span>
                    </Link>
                        <span onClick={this.likeBtn}>{this.state.likeme ? "❤"+this.state.likeCount+1 : "🖤"+this.state.likeCount }</span>
                    </div>
                    <div className="listitem_btn writeday">
                        <span>{this.state.mypageList.rwriteday}</span>
                    </div>
                    
                    <div className="listitem_content_wrapper">          
                        <Link to={"/main/detail/"+this.props.rnum}>
                        <div className="listitem_contents">
                            {this.state.mypageList.rcontent}
                        </div>
                        </Link>
                    </div>
                    
                </div>


                <div>
                    {this.state.mypageList.hashtag}
                </div>
            </div>
        );
    }
}

export default ListPrepare;