import React, { Component } from 'react';
import DetailPictureContainer from './DetailPicture/DetailPictureContainer';
import DetailMapSubContainer from './DetailMap/DetailMapSubContainer';
import DetailLikeContainer from './DetailLike/DetailLikeContainer';
import DetailCommentContainer from './DetailComment/DetailCommentContainer';
import './DetailPage.css';

class DetailPage extends Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
        modalOpen: false,
    }
};
    
    render() {
        return (
            <div className='dp-body'>
                <div className='dp-box'>
                    <DetailPictureContainer/>
                    <DetailMapSubContainer/>
                    <DetailLikeContainer/>
                    <DetailCommentContainer/>
               </div>
            </div>
        )
    }
}
export default DetailPage;