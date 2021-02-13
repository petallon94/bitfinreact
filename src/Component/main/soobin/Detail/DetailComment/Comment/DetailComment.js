import React, { Component } from 'react';
import './DetailComment.css'
import AddComment from './AddComment'
import { Input, Button } from '@material-ui/core';
import axios from 'axios';
import store from "../../../../../../redux/store";

class DetailComment extends Component {
    constructor(props,{match}) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
        modalOpen: false,
        acontent: "",
        acontentList: [{awriteday: 20201020, amnick: "minnotming_", acontent: "더 올려주세요ㅠ",}],
    };
}
    answerInsert=()=>{
        let data=this.state;
        let url='http://localhost:9001/answer/insert';
        axios.post(url,data)
            .then(res=>{
            //성공시
            alert(res.data.mes);
            //입력값 지우기
            this.setState({
                acontentList:[]
            })
        }).catch(err=>{
            console.log("추가시 오류남:"+err);
            
        })
    }

    handleChange = (e) => {
        this.setState({
            acontent: e.target.value
        });
    }

    addComment = () => {
        this.setState({
            acontentList: [...this.state.acontentList, {arnum:this.rnum=1, awriteday: Date.now(), amnick: store.getState().mnick, acontent: this.state.acontent}],
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
                            value={this.state.acontent}
                            size="50"
                            />
                            <Button className="upload_button" onClick={this.addComment}>
                                <b>게시</b>
                            </Button>
                        </div>
                    </div>
                    <div className="comment_wrapper">
                        {this.state.acontentList.map(item =>
                        <AddComment
                        amnick={item.amnick}
                        acontent={item.acontent}
                        awriteday={item.awriteday}
                        handleRemove={this.handleRemove}
                        key={item.awriteday}>
                        </AddComment>)}
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailComment;