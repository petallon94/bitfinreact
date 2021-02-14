import React,{Component} from 'react';
import {NavLink,Route, Switch} from 'react-router-dom';
import axios from 'axios';
import MyAllList from './MyList/MyAllList';
import MyCnList from './MyList/MyCnList';
import MyEtcList from './MyList/MyEtcList';
import MyJapList from './MyList/MyJapList';
import MyKorList from './MyList/MyKorList';
import MyWesList from './MyList/MyWesList';
import './mypage.css';
import store from "../../../redux/store";

class mypage extends Component{
    constructor(props){
        super(props);
        console.log("Mypage 시작");
        console.log(this.props.match.params.mnick);
        console.log(store.getState().mnum);
    }
    state = {
        mnum:'',
        mnick:'',
        mpic:'',
        mintro:'',
        listCount:'',
        follow:'',
        follower:'',
        following:'',
        mypageUrl:this.props.match.url
    }

    // 프로필 가져오기.
    getMypageMember = () => {
        let url = "http://localhost:9001/mypage/myInformation";
        axios.get(url,{
            params:{
                mnick:this.props.match.params.mnick,
                mynum:store.getState().mnum
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mnum:respones.data.mnum,
                mnick:respones.data.mnick,
                mpic:respones.data.mpic,
                mintro:respones.data.mintro,
                listCount:respones.data.listCount,
                follow:respones.data.follow,
                follower:respones.data.follower,
                following:respones.data.following
            })
        }).catch(error => {
            console.log("마이페이지 프로필 출력 : " + error);
        })

    }

    componentDidMount(){
        this.getMypageMember();
    }


    //팔로워 추가
    followbtn=()=>{
        let url="";
        if(this.state.following){
            console.log(this.state.following)
            url="http://localhost:9001/mypage/delFollwer"
            console.log("팔로워 삭제합니다.")
            this.setState({following:!this.state.following})
        }else{
            console.log(this.state.following)
            url="http://localhost:9001/mypage/addFollower"
            console.log("팔로워 추가합니다.")
            this.setState({following:!this.state.following})
        }
        axios.get(url,{
            params:{
                mnick:this.props.match.params.mnick,
                mynum:store.getState().mnum
            }
        })
        .then(respones => {
            console.log(respones.data);
        }).catch(error => {
            console.log(" 팔로우 에러... : " + error);
        })
    }


    //팔로워 삭제


    render(){
        return(
            <div className="mypage_container">
                <div className="hidden_place">
                    {this.state.following? this.state.follower-1: this.state.follower}
                </div>
                <div className="profile_container">
                    <div className="profile_wrapper">
                        <div className="profile_image">
                            <img src="http://placehold.it/300" alt="프로필사진" />
                        </div>

                        <div className="profile_place">
                            <div className="profile_nameplace">
                                <h1>{this.state.mnick}</h1>
                                {store.getState().mnick===this.props.match.params.mnick?<button className="profile_edit">프로필 편집</button>
                                :this.state.following?
                                <button onClick={this.followbtn}>팔로우취소하기</button>
                                :
                                <button onClick={this.followbtn}>팔로우하기</button>
                                }
                            </div>

                            <div className="profile_information">
                                <div>게시물  <b> {this.state.listCount}</b></div>
                                <div>팔로우  <b> {this.state.follow}</b></div>
                                <div>팔로워  <b> {this.state.following? this.state.follower+1: this.state.follower}</b></div>
                            </div>

                            <div className="profile_introduce">
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                {this.state.mintro}
                            </div>

                        </div>
                    </div>
                </div>
                <ul className="mypge_list_btn">
                    <li><NavLink exact activeClassName="active_list_btn" to={this.props.match.url}><b>🍴</b>전체</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/kor`} ><b>🍚</b>한식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/cn`} ><b>🍜</b>중식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/jap`} ><b>🍣</b>일식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/wes`} ><b>🍕</b>양식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/etc`} ><b>🍦</b>기타</NavLink></li>
                </ul>
                <div className="Mypge_list_show">
                    <Switch>
                        <Route exact path={this.props.match.path} component={MyAllList}/>
                        <Route exact path={`${this.props.match.path}/kor`} component={MyKorList}/>
                        <Route exact path={`${this.props.match.path}/cn`} component={MyCnList}/>
                        <Route exact path={`${this.props.match.path}/jap`} component={MyJapList}/>
                        <Route exact path={`${this.props.match.path}/wes`} component={MyWesList}/>
                        <Route exact path={`${this.props.match.path}/etc`} component={MyEtcList}/>
                    </Switch>
                </div>
            </div>
        );
    }

}
export default mypage;