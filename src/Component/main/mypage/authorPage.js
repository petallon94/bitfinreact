import React,{Component} from 'react';
import './mypage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MypageList from './mypage_list';
import Button from '@material-ui/core/Button';

class authorPage extends Component{
    constructor(props){
        super(props);
    }
    state = {
        mypageMember:[],
        myReviewsCount:"",
        myFollowsCount:""
    }

    // 멤버 아이디,팔로워 구하기
    getMypageMember = () => {
        let url = "http://localhost:9001/mypage/listMember";
        axios.get(url,{
            params:{
                mnum:this.props.location.state.userNumber
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mypageMember:respones.data
            })
        }).catch(error => {
            console.log("마이페이지 아이디 출력 : " + error);
        })

    }
    // 멤버 
    getMyReviewsCount = () => {
        let url = "http://localhost:9001/mypage/listCount";
        axios.get(url,{
            params:{
                mnum:this.props.location.state.userNumber
            }
        })
        .then(respones => {
            
            this.setState({
                myReviewsCount:respones.data
            })
        }).catch(error => {
            console.log("리스트 카운트 에러 : " + error);
        })

    }

    getFollowCount = () => {
        let url = "http://localhost:9001/mypage/followCount";
        axios.get(url,{
            params:{
                mnum:this.props.location.state.userNumber
            }
        })
        .then(respones => {
            this.setState({
                myFollowsCount:respones.data
            })
        }).catch(error => {
            console.log("팔로우수 에러 : " + error);
        })

    }





    componentDidMount(){
        this.getMypageMember();
        this.getMyReviewsCount();
        this.getFollowCount();
        
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
                                <div>게시물 : {this.state.myReviewsCount}</div>
                                <div>팔로우 : {this.state.myFollowsCount}</div>
                                <div>팔로워 : {this.state.mypageMember.follower}</div>
                            </div>
                            <div className="profile_introduce">
                               안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~
                            </div>
                        </div>
                    </div>
                </div>
                <MypageList />
            </div>
        )
    }
}

export default authorPage;