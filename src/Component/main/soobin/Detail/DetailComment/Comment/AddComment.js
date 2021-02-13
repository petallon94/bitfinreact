import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaHeart,FaTrashAlt,FaWrench } from "react-icons/fa";
import Modal from './CommentModal/DetailCommentModal';
import { NavLink } from 'react-router-dom';
import './AddComment.css'


class AddComment extends Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
this.state = {
    modalOpen: false,
    
};
}

// Modal open,close
openModal = () => {
    this.setState({ modalOpen: true })
}
closeModal = () => {
    this.setState({ modalOpen: false })
}
    render() {
      const {amnick,acontent,awriteday,handleRemove} = this.props
      return (
        <div className="previous_comment">
          <div className="DetailComment-bar">
          <NavLink to={"/main/mypage"} className="DetailComment-profile">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLjZETkWOgURfHDtCVmB2ZRRCm7Hc6I_dHw&usqp=CAU'/>
          </NavLink>
              <span className="add-comment-box">{amnick}</span>
              <span className="add-comment">{acontent}</span>
              <span className="add-awriteday">{awriteday}</span>
            <div className="DetailComment-icons">
              <IconButton color="inherit">
                <Badge color="secondary" onClick={ this.openModal }>
                  <BiDotsHorizontalRounded />
                </Badge>
              </IconButton>
              <IconButton color="inherit" className="comment_likebutton">
                <Badge color="secondary">
                  <FaHeart />
                </Badge>
              </IconButton>                  
            </div>
            <Modal open={ this.state.modalOpen } close={ this.closeModal }>
              <div className="comment-icon-bar">
                <div className="comment-icon-box">
                  <IconButton color="inherit" className="comment-update">
                    <Badge color="secondary">
                      <FaWrench/>
                      <div style={{position:"relative",top:"-5px",marginLeft:"10px"}}>수정하기</div>
                    </Badge>
                  </IconButton> 
                  <IconButton color="inherit" className="comment-delete">
                    <Badge color="secondary">
                      <FaTrashAlt id={awriteday}
                    className="comment_deletebutton"
                    onClick={handleRemove}/>
                      <div style={{position:"relative",top:"-5px",marginLeft:"10px"}}>삭제하기</div>
                    </Badge>
                  </IconButton>
                </div> 
              </div>
            </Modal>
          </div>
        </div>
      )
    }
  }
  export default AddComment;