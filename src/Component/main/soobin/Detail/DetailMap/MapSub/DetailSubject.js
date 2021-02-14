import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DetailSubject.css';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Modal from './SubMenu/DetailSubModal';
import { FaTrashAlt,FaWrench } from "react-icons/fa";

class DetailSubject extends Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
        modalOpen: false,
    }
   
}

    // Modal open,close
    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    
    render() {
        //console.log(this.props.mnick);
        return (
            <div className="DetailSubject">
                <div className="DetailSubject-bar">
                    <div className="DetailSubject-box">
                        <div className="DetailSubject-profile" onClick="/main/mypage">
                            <NavLink to={"/main/mypage"} className="DetailSubject-profile-picture">
                                <img src={'http://localhost:9001/profilesave/'+this.props.mpic}/>
                            </NavLink>
                            <div className='DetailSubject-nick'>{this.props.mnick}</div>
                            <div className='DetailSubject-address'>{this.props.resaddr}</div>
                            <div className='DetailSubject-menu'>
                                <IconButton color="inherit">
                                    <Badge color="secondary" onClick={ this.openModal }>
                                        <BiDotsHorizontalRounded />
                                    </Badge>
                                </IconButton>
                                <Modal open={ this.state.modalOpen } close={ this.closeModal }>
                                    <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <FaWrench/>
                                        <span>수정하기</span>
                                    </Badge>
                                    </IconButton> 
                                    <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <FaTrashAlt
                                    className="comment_deletebutton"
                                    />
                                        <span>삭제하기</span>
                                    </Badge>
                                    </IconButton> 
                                </Modal>
                            </div>
                        </div>
                        <div className="DetailSubject-sub">{this.props.rcontent}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailSubject;