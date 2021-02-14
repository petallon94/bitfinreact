import React, { Component } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import './mypage_list.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class ListPrepare extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.rnum)
    }

    state = {
        mypageList:[],
        imgurl:'http://localhost:9001/reviewsave/'
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

    changelikeButtonColor = () => {
        this.setState({ changeLikeButtonColor: !this.state.changeLikeButtonColor });
      };

    componentDidMount(){
         this.getMypageList();
    }
    
    render() {
        return (
            <div className="mypage_listitem">
                
                <div className="list_header">
                    <ListItem>
                        <ListItemAvatar>
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
                        <span>❤{this.state.mypageList.likes}</span>
                    </div>
                    <div className="listitem_btn writeday">
                        <span>{this.state.mypageList.rwriteday}</span>
                    </div>
                    <div className="listitem_content_wrapper">          
                        <div className="listitem_contents">
                            {this.state.mypageList.rcontent}
                        </div>
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