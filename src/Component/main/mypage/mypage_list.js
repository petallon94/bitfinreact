import React,{Component} from 'react';
import axios from 'axios';
import './mypage_list.css';
import { NavLink } from 'react-router-dom';
import MypagePrint from './MypagePrint';



class mypage_list extends Component{

    constructor(props){
        super(props);
        
    }
    state = {
        mypageList:[]
    }



    // 리스트 불러오기

    getMypageList = () => {
        let url = "http://localhost:9001/mypage/list";
        axios.get(url,{
            params:{
                mnum:1
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

    componentDidMount(){
        this.getMypageList();
    }




    render(){
        return(
            <div className="mypage_list_container">

                {/* 버튼 내용 시작 */}

                <ul className="mypge_list_btn">
                    <li><NavLink exact activeClassName="active_list_btn" to="/main/mypage/" >전체</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to="/main/mypage/kor" >한식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to="/main/mypage/cn" >중식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to="/main/mypage/jap" >일식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to="/main/mypage/wes" >양식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to="/main/mypage/etc" >기타</NavLink></li>
                </ul>

                {/* 리스트 래퍼 시작 */}

                <div className="mypage_list_wrapper">

                    {/* 리스트 내용 시작 */}
                    {this.state.mypageList ? this.state.mypageList.map(r => {
                        return <MypagePrint rcontent={r.rcontent} key={r.rnum} memberNumber={r.rmnum} nickname={r.mnick} writeDay={r.rwriteday}  />
                        }) : ''}
                        

                </div>
                


            </div>
        )
    }
}

export default mypage_list;