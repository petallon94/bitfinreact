import React, { Component } from 'react';
import './DetailComment.css'
import AddComment from './AddComment'
import { Input, Button } from '@material-ui/core';

class DetailComment extends Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
        modalOpen: false,
        acontent: "",
        commentList: [{idx: 20201020, userId: "minnotming_", comment: "더 올려주세요ㅠ"}],
    };
}
    handleChange = (e) => {
        this.setState({
            acontent: e.target.value
        });
    }

    addComment = () => {
        this.setState({
            commentList: [...this.state.commentList, {idx: Date.now(), userId: "jjburi_", comment: this.state.acontent}],
            acontent: ""
        })
    };

    handleKeyEvent = (e) => {
        if(e.key === "Enter") {
            this.addComment();
        }
    }

    // Modal open,close
    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    // Modal open,close
    render() {
        return (
            <div className="DetailComment">
               <div className="DetailComment-bar">
                    <div className="comment">
                        <div className="new_comment">
                            <Input className="write_newComment" onChange={this.handleChange} onKeyUp={this.handleKeyEvent}
                            type="text"
                            placeholder="댓글달기..."
                            value={this.state.content}
                            size="50"
                            />
                            <Button className="upload_button" onClick={this.addComment}>
                                <b>게시</b>
                            </Button>
                        </div>
                    </div>
                    <div className="comment_wrapper">
                        {this.state.commentList.map(item =>
                        <AddComment
                        userId={item.userId}
                        comment={item.comment}
                        idx={item.idx}
                        handleRemove={this.handleRemove}
                        key={item.idx}>
                        </AddComment>)}
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailComment;