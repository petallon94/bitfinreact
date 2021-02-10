import React,{Component} from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import "./mainlist.css";
import { FiSend } from "react-icons/fi";

    
class card extends Component{

render(){

//  아이디 클릭시 마이페이지로 이동 
const goMypage = () => {
  this.props.history.push("/main/mypage?num="+this.props.row.rmnum);
}
// 글 클릭시 디테일페이지로 이동
// const goDetail = () => {
//   this.props.history.push("/main/detail"+this.props.row.rmnum);
// }



  //const url="http://localhost:9001/photo/";
  return (
     <div className="mainlist__post">
     <div className="mainlist__header">
       <ListItem>
        <ListItemAvatar>
            <Avatar className="mainlist__header_profphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshg1UlZU8R3dPaWcIAdVgnkrLSKgN-knvPg&usqp=CAU" alt="user"/>
          </ListItemAvatar>
          <ListItemText  className="mainlist__header_id" primary="시골된장찌개(mnick)" secondary="강남 신논현역 근처" onClick={goMypage}>{this.props.row.rmnum}</ListItemText>
        </ListItem>
      <img className="mainlist__photo" 
      src="https://lh3.googleusercontent.com/proxy/sWn8UnM7WbDe5iS0huGmdpjF3Fp791e0z_kty1c2fORjPI5JZTz23MvJAjFsINOCZ5gBZkrSca4CBoAd-rUgPF-J1wIjEehyAAg0kmNWYQAHcsjTGrh4StghED68qU7HpHdh0jYQEGCNvw7k5CHbeZqa-G61vFd1xQ"
      alt="시골된장찌개"/>
      <h4 className="mainlist__id">번호:{this.props.row.rmnum}</h4>
      <div className="mainlist__score">별점:{this.props.row.rscore}</div>
      <div className="mainlist__date">작성일:{this.props.row.rwriteday}</div>
      <div className="mainlist__comments">포스팅내용:{this.props.row.rcontent}</div>
        <form className="mainlist__form">
          <TextField
              label="add comment"
              size="small"
              variant="outlined"
              className="mainlist__input"
              placeholder="add comment"
              />
          <Button variant="contained" size="small" endIcon={<FiSend />}>post</Button>
        </form>
        </div>    
    </div>
  )
}
}
export default card;
