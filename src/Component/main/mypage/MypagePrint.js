import React,{Component} from 'react';
import './mypage_list.css';

class MypagePrint extends Component{

    render(){
        return(
            <div className="mypage_listitem">
                <div className="listitem_img">
                    <img src="http://placehold.it/200" alt="리스트" />
                </div>    
                <div className="listitem_btn">
                    <span>{this.props.</span>
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