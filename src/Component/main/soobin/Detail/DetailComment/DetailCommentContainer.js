import React, { Component } from 'react';
import { DetailComment, DetailCommentWrap } from '../DetailIndex';

class DetailCommentContainer extends Component {

    render() {
        return (
            <DetailCommentWrap>
                <DetailComment/>
            </DetailCommentWrap>
        )
    }
}
export default DetailCommentContainer;