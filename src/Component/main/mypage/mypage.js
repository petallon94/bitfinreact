import React,{Component} from 'react';
import {NavLink,Route, Switch} from 'react-router-dom';
import axios from 'axios';
import MyAllList from './MyList/MyAllList'
import MyCnList from './MyList/MyCnList'
import MyEtcList from './MyList/MyEtcList'
import MyJapList from './MyList/MyJapList'
import MyKorList from './MyList/MyKorList'
import MyWesList from './MyList/MyWesList'
import './mypage.css';

class mypage extends Component{
    constructor(props){
        super(props);
        console.log("Mypage 시작");
        console.log(this.props.match.params.mnick);
        console.log(this.props.match);
    }
    state = {
        mypageMember:[],
        mypageUrl:this.props.match.url
    }

    // 멤버 아이디,팔로워 구하기
    getMypageMember = () => {
        let url = "http://localhost:9001/mypage/myInformation";
        axios.get(url,{
            params:{
                mnick:this.props.match.params.mnick
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mypageMember:respones.data
            })
        }).catch(error => {
            console.log("마이페이지 프로필 출력 : " + error);
        })

    }

    componentDidMount(){
        this.getMypageMember();
    }



    render(){
        return(
            <div className="mypage_container">
                <div className="profile_container">
                    <div className="profile_wrapper">
                        <div className="profile_image">
                            <img src="http://placehold.it/300" alt="프로필사진" />
                        </div>
                        <div className="profile_place">
                            <div className="profile_nameplace">
                                <h1>{this.state.mypageMember.mnick}</h1>
                            </div>
                            <div className="profile_information">
                                <div>게시물 : {this.state.mypageMember.listCount}</div>
                                <div>팔로우 : {this.state.mypageMember.follow}</div>
                                <div>팔로워 : {this.state.mypageMember.follower}</div>
                                {}
                            </div>
                            <div className="profile_introduce">
                                {this.state.mypageMember.mintro}
                            </div>
                        </div>
                    </div>
                    <ul className="mypge_list_btn">
                        <li><NavLink exact activeClassName="active_list_btn" to={this.props.match.url}>전체</NavLink></li>
                        <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/kor`} >한식</NavLink></li>
                        <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/cn`} >중식</NavLink></li>
                        <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/jap`} >일식</NavLink></li>
                        <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/wes`} >양식</NavLink></li>
                        <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/etc`} >기타</NavLink></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path={this.props.match.path} component={MyAllList}/>
                    <Route exact path={`${this.props.match.path}/kor`} component={MyKorList}/>
                    <Route exact path={`${this.props.match.path}/cn`} component={MyCnList}/>
                    <Route exact path={`${this.props.match.path}/jap`} component={MyJapList}/>
                    <Route exact path={`${this.props.match.path}/wes`} component={MyWesList}/>
                    <Route exact path={`${this.props.match.path}/etc`} component={MyEtcList}/>
                </Switch>
            
            </div>
        );
    }

}
export default mypage;