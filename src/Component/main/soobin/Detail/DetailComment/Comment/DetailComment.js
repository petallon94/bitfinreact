import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DetailComment.css'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Modal from './CommentModal/DetailCommentModal';

class DetailComment extends Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
        modalOpen: false,
    }
};
    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    render() {
        return (
            <div className="DetailComment">
                <div className="DetailComment-bar">
                    <div className="DetailComment-box">
                        <NavLink to={"/main/mypage"} className="DetailComment-profile">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLjZETkWOgURfHDtCVmB2ZRRCm7Hc6I_dHw&usqp=CAU'/>
                        </NavLink>
                        <div className="DetailComment-item">
                            <div className="DetailComment-sub"><pre>오늘은</pre></div>
                            <div className="DetailComment-day">2021-02-05</div>
                            <div className="DetailComment-comment">답글달기</div>
                            <div className="DetailComment-icons">
                                <IconButton color="inherit">
                                    <Badge color="secondary" onClick={ this.openModal }>
                                        <BiDotsHorizontalRounded />
                                    </Badge>
                                </IconButton>
                                <Modal open={ this.state.modalOpen } close={ this.closeModal }>
                                    <div>하기</div>
                                    <div>하기</div>
                                </Modal>
                                <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <FaHeart />
                                    </Badge>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailComment;