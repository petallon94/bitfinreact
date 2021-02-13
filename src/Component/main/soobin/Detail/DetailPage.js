import React, { Component } from 'react';
import DetailPictureContainer from './DetailPicture/DetailPictureContainer';
import DetailMapSubContainer from './DetailMap/DetailMapSubContainer';
import DetailLikeContainer from './DetailLike/DetailLikeContainer';
import DetailCommentContainer from './DetailComment/DetailCommentContainer';
import './DetailPage.css';


class DetailPage extends Component {
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