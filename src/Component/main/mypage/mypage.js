import React,{Component} from 'react';
import './mypage.css';
import { Link } from 'react-router-dom';
import MypageList from './mypage_list';
import Button from '@material-ui/core/Button';



class mypage extends Component{
    
    render(){
        return(
            <div className="mypage_container">
                <div className="profile_container">
                    <div className="profile_wrapper">
                        <div className="profile_image">
                            <img src="http://placehold.it/300" alt="프로필사진" />
                        </div>
                        <div className="profile_place">
                            <div className="profile_nameplace">
                                <h1>Imgeon_ny</h1>
                                
                                <Link to='/main'><Button variant="contained">프로필 편집</Button></Link>
                            </div>
                            <div className="profile_information">
                                <div>게시물 : 1</div>
                                <div>팔로우 : 2</div>
                                <div>팔로워 : 3</div>
                            </div>
                            <div className="profile_introduce">
                               안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~
                            </div>
                        </div>
                    </div>
                </div>
                <MypageList/>
            </div>
        )
    }
}

export default mypage;