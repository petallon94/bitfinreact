import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DetailSubject.css';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Modal from './SubMenu/DetailSubModal';

class DetailSubject extends Component {
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
            <div className="DetailSubject">
                <div className="DetailSubject-bar">
                    <div className="DetailSubject-box">
                        <div className="DetailSubject-profile" onClick="/main/mypage">
                            <NavLink to={"/main/mypage"} className="DetailSubject-profile-picture">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLjZETkWOgURfHDtCVmB2ZRRCm7Hc6I_dHw&usqp=CAU'/>
                            </NavLink>
                            <div className='DetailSubject-nick'>Lee Sang Heon</div>
                            <div className='DetailSubject-address'>서울시 서초구 반포동</div>
                            <div className='DetailSubject-menu'>
                                <IconButton color="inherit" onClick={ this.openModal }>
                                    <Badge color="secondary">
                                        <BiDotsHorizontalRounded />
                                    </Badge>
                                </IconButton>
                                <Modal open={ this.state.modalOpen } close={ this.closeModal }>
                                    <div>수정하기</div>
                                    <div>삭제하기</div>
                                </Modal>
                            </div>
                        </div>
                        <div className="DetailSubject-sub">오늘은</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailSubject;