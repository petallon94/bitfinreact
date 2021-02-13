// import React,{Component, useState, useCallback} from 'react';
// import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
// import "./mainlist.css";
// import { FiSend } from "react-icons/fi";
// import Content from './content';
// import PostImages from './PostCard/PostImageBox';
// import PropTypes from 'prop-types';
// import {Card, Popover, ButtonGroup } from '@material-ui/core';
// import {FaComments} from "react-icons/fa";
// import {BsThreeDotsVertical } from "react-icons/bs";
// import { RiHeartsLine, RiHeartsFill} from "react-icons/ri";

    
// const Postcard = ({post}) => {



// //  아이디 클릭시 마이페이지로 이동 
// const goMypage = () => {
//   this.props.history.push("/main/mypage?num="+this.props.row.rmnum);
// }
// // 글 클릭시 디테일페이지로 이동
// // const goDetail = () => {
// //   this.props.history.push("/main/detail"+this.props.row.rmnum);
// // }
// const [liked, setLiked] = useState(false);
// const [commentFormOpend, setCommendFormOpened] = useState(false);
//  //나만 삭제가능하게 변수선언 useselcetor는 리덕스
// const id =useState((state) => state.user.user && state.user.id);
// //const liked = post.Likers.find(vv) => v.id === id);

// //좋아요 토글기능  prev라는건 이전 데이터를 가지고 결과를 나타냄 !prev하면 false는 true로, true는 false로 변경됨
// const onToggleLike = useCallback(() => {
//   setLiked((prev) => !prev);
//   },[]);
// //댓글더보기 누르면 토글기능 !prev하면 false는 true로, true는 false로 변경됨 
// const onToggleComment = useCallback(() => {
//   setCommendFormOpened((prev) => !prev);
//   },[]);


//   //const url="http://localhost:9001/photo/";
//   return (
//      <div className="mainlist__post">
//      <div className="mainlist__header">
//        <ListItem>
//         <ListItemAvatar>
//             <Avatar className="mainlist__header_profphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshg1UlZU8R3dPaWcIAdVgnkrLSKgN-knvPg&usqp=CAU" alt="user"/>
//           </ListItemAvatar>
//           <ListItemText  className="mainlist__header_id" primary="시골된장찌개(mnick)" secondary="강남 신논현역 근처" onClick={goMypage}>{this.props.row.rmnum}</ListItemText>
//         </ListItem>
//       <img className="mainlist__photo" 
//       src="https://lh3.googleusercontent.com/proxy/sWn8UnM7WbDe5iS0huGmdpjF3Fp791e0z_kty1c2fORjPI5JZTz23MvJAjFsINOCZ5gBZkrSca4CBoAd-rUgPF-J1wIjEehyAAg0kmNWYQAHcsjTGrh4StghED68qU7HpHdh0jYQEGCNvw7k5CHbeZqa-G61vFd1xQ"
//       alt="시골된장찌개"/>
//       <h4 className="mainlist__id">번호:{this.props.row.rmnum}</h4>
//       <div className="mainlist__score">별점:{this.props.row.rscore}</div>
//       <div className="mainlist__date">작성일:{this.props.row.rwriteday}</div>
//       <div className="mainlist__comments">포스팅내용:{this.props.row.rcontent}</div>
        
//         <Card
//         cover={post.Image[0] && <PostImages images={post.Images}/>}
//         action={[
//           liked
//           ? <RiHeartsLine key="heart" onClick={onToggleLike}/>
//           : <RiHeartsFill key="heart" onClick={onToggleLike}/>,
//           <FaComments key="comment" onClick={onToggleComment}/>,
//           <Popover key="more" content={(           
//             <ButtonGroup>
//               {/* 내아이디와 게시글작성자의 id가 같으면 수정삭제가능 */}
//               { id === post.User.id
//                 ? 
//                 <>
//                 <Button color="primary">수정</Button>
//                 <Button color="secondary">삭제</Button>
//                 </>
//                 : null
//               }              
//               </ButtonGroup>
//           )}>
//              <BsThreeDotsVertical/>
//           </Popover>,
//         ]}
//         >
//           <Content/>
         
//           <Card.Meta
//           avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
//           title={post.user.nickname}
//           decription={post.content}
//           />
          
//          </Card>
//           {commentFormOpend && (
//             <div>
//               댓글부분
//             </div>)}
//           {/* <ConmmentForm/> */}
//           {/* <Comments/> */}
//         </div>    
//     </div>
//   );
// };



// Postcard.propTypes = {
//   post:PropTypes.shape({
//     id:PropTypes.number,
//     User:PropTypes.object,
//     content:PropTypes.string,
//     createdAt:PropTypes.object,
//     Comments:PropTypes.arrayOf(PropTypes.object),
//     Images:PropTypes.arrayOf(PropTypes.object),
//     Likers: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// }
// export default Postcard;

