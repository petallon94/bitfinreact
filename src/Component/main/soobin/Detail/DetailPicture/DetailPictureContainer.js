import React, { Component } from 'react';
import { DetailPictureWrap, DetailPicture } from '../../Detail/DetailIndex';

class DetailPictureContainer extends Component {

    render() {
        return (
            <DetailPictureWrap>
                <DetailPicture/>
            </DetailPictureWrap>
        )
    }
}
export default DetailPictureContainer;