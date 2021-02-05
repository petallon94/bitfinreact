import React,{Component} from 'react';
import './mypage_list.css';
import { NavLink } from 'react-router-dom';



class mypage_list extends Component{
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

                    <div className="mypage_listitem">
                        <div className="listitem_img">
                            <img src="http://placehold.it/200" alt="리스트" />
                        </div>    
                        <div className="listitem_btn">
                            <span>Dec 17, 2020</span>
                            <span>❤</span>
                        </div>
                        <div className="listitem_content_wrapper">
                            <div className="listitem_title">
                                contents titlefsdfsdsdfdffdsfsfdfsd
                            </div>
                            <div className="listitem_contents">
                            contcontcontcontcontcontcontcontcontcontcontcontc
                            </div>
                        </div>
                    </div>

                    <div className="mypage_listitem">
                        <div className="listitem_img">
                            <img src="http://placehold.it/100" alt="리스트" />
                        </div>    
                        <div className="listitem_btn">
                            <span>Dec 17, 2020</span>
                            <span>❤</span>
                        </div>
                        <div className="listitem_content_wrapper">
                            <div className="listitem_title">
                                contents titlefsdfsdsdfdffdsfsfdfsd
                            </div>
                            <div className="listitem_contents">
                            contcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcont
                            </div>
                        </div>
                    </div>

                    <div className="mypage_listitem">
                        <div className="listitem_img">
                            <img src="http://placehold.it/300" alt="리스트" />
                        </div>    
                        <div className="listitem_btn">
                            <span>Dec 17, 2020</span>
                            <span>❤</span>
                        </div>
                        <div className="listitem_content_wrapper">
                            <div className="listitem_title">
                                contents titlefsdfsdsdfdffdsfsfdfsd
                            </div>
                            <div className="listitem_contents">
                            contcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcont
                            </div>
                        </div>
                    </div>

                    <div className="mypage_listitem">
                        <div className="listitem_img">
                            <img src="http://placehold.it/500" alt="리스트" />
                        </div>    
                        <div className="listitem_btn">
                            <span>Dec 17, 2020</span>
                            <span>❤</span>
                        </div>
                        <div className="listitem_content_wrapper">
                            <div className="listitem_title">
                                contents titlefsdfsdsdfdffdsfsfdfsd
                            </div>
                            <div className="listitem_contents">
                            contcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcont
                            </div>
                        </div>
                    </div>

                    <div className="mypage_listitem">
                        <div className="listitem_img">
                            <img src="http://placehold.it/600" alt="리스트" />
                        </div>    
                        <div className="listitem_btn">
                            <span>Dec 17, 2020</span>
                            <span>❤</span>
                        </div>
                        <div className="listitem_content_wrapper">
                            <div className="listitem_title">
                                contents titlefsdfsdsdfdffdsfsfdfsd
                            </div>
                            <div className="listitem_contents">
                            contcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcontcont
                            </div>
                        </div>
                    </div>
                    


                </div>
                


            </div>
        )
    }
}

export default mypage_list;