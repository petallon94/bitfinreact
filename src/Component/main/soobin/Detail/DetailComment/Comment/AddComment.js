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
      const {userId,comment,idx,handleRemove} = this.props
      return (
        <div className="previous_comment">
          <div className="DetailComment-bar">
          <NavLink to={"/main/mypage"} className="DetailComment-profile">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLjZETkWOgURfHDtCVmB2ZRRCm7Hc6I_dHw&usqp=CAU'/>
          </NavLink>
              <span className="add-comment-box">{userId}</span>
              <span className="add-comment">{comment}</span>
              
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
                <IconButton color="inherit">
                  <Badge color="secondary">
                    <FaWrench/>
                    <span>수정하기</span>
                  </Badge>
                </IconButton> 
                <IconButton color="inherit">
                  <Badge color="secondary">
                    <FaTrashAlt id={idx}
                  className="comment_deletebutton"
                  onClick={handleRemove}/>
                    <span>삭제하기</span>
                  </Badge>
                </IconButton> 
              </Modal>
          </div>
        </div>
      )
    }
  }
  export default AddComment;