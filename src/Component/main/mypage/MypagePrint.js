import React,{Component} from 'react';
import './mypage_list.css';
import {Link} from 'react-router-dom';

class MypagePrint extends Component{

    render(){
        return(
            <div className="mypage_listitem">
                {/* 글넘버 */}
                <input type="hidden" value={this.props.key}></input>
                <div className="listitem_img">
                    <img src="http://placehold.it/200" alt="리스트" />
                </div>
                <div className="listitem_user">
                    <Link to={{
                        pathname : '/main/authorPage',
                        state:{
                            userNumber:this.props.memberNumber
                        }
                    }}>{this.props.nickname}{this.props.memberNumber}</Link>

                </div>
                <div className="listitem_btn">
                    <span></span>
                    <span>❤</span>
                </div>
                <div className="listitem_content_wrapper">
                    <div className="listitem_title">
                        {this.props.rcontent}
                    </div>
                    <div className="listitem_contents">
                    contcontcontcontcontcontcontcontcontcontcontcontc
                    </div>
                </div>
            </div>
        )
    }
}
 
export default MypagePrint;