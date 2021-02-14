import React, { Component } from 'react';
import { DetailComment, DetailCommentWrap } from '../DetailIndex';

class DetailCommentContainer extends Component {
    constructor(props){
        super(props);
        //console.log(this.props.rnum);

    }
    render() {
        return (
            <DetailCommentWrap>
                <DetailComment
                rnum={this.props.rnum}
                />
            </DetailCommentWrap>
        )
    }
}
export default DetailCommentContainer;