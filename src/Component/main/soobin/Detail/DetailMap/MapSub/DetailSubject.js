import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DetailSubject.css';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Modal from './SubMenu/DetailSubModal';
import axios from 'axios';
import { FaTrashAlt,FaWrench } from "react-icons/fa";

class DetailSubject extends Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.rnum=this.props.rnum;
    this.state = {
        modalOpen: false,
        selectData:''
    }
}
//백엔드로부터 num 에 해당하는 데이터 가져오기
    onSelectData=()=>{
        let url='http://localhost:9001/review/detail?rnum='+this.rnum;
        console.log(this.rnum);
        axios.get(url)
        .then(res=>{
            //성공시 dto 리턴값을 받아 데이터에 넣어준다
            this.setState({
                selectData:res.data
            })
            console.log(res.data);
        })
    }

    componentWillMount() {
        this.onSelectData();
    }

    // Modal open,close
    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    
    render() {
        const {selectData}=this.state;
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
                        <div className="DetailSubject-sub">{selectData.rcontent}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailSubject;