import React, {useState, useCallback} from 'react';
import {Link, CardActions, Popover, ButtonGroup, Button,ListItem,ListItemAvatar,Avatar,List,ListItemText,Divider,Typography } from '@material-ui/core';
import { RiHeartsLine, RiHeartsFill} from "react-icons/ri";
import {FaComments} from "react-icons/fa";
import {BsThreeDotsVertical } from "react-icons/bs";
import store from "../../../redux/store";


const PostLikesBox = (props) => {
const [liked, setLiked] = useState(false);
const [commentFormOpend, setCommendFormOpened] = useState(false);


//const liked = post.Likers.find(vv) => v.id === id);
//좋아요 토글기능  prev라는건 이전 데이터를 가지고 결과를 나타냄 !prev하면 false는 true로, true는 false로 변경됨
const onToggleLike = useCallback(() => {
  setLiked((prev) => !prev);
  },[]);
//댓글더보기 누르면 토글기능 !prev하면 false는 true로, true는 false로 변경됨 
const onToggleComment = useCallback(() => {
  setCommendFormOpened((prev) => !prev);
  },[]);



//마이페이지로 이동 
const nick =  props.nick;  

        return (
         
           <div className="postcard_likes">               
              <CardActions disableSpacing>
                {[liked
                 ? <RiHeartsLine key="heart" onClick={onToggleLike}/>
                : <RiHeartsFill key="heart" onClick={onToggleLike}/>,
                 <FaComments key="comment" onClick={onToggleComment}/>,
                 <Popover key="more" content={(           
                  <ButtonGroup>
                  {/* 내아이디와 게시글작성자의 id가 같으면 수정삭제가능 */}
                 { store.getState().mnick === props.nick
                   ? 
                  <>
                   <Button color="primary">수정</Button>
                   <Button color="secondary">삭제</Button>
                    </>
                 : null
                }              
                  </ButtonGroup>
              )}>
                 <BsThreeDotsVertical/>
              </Popover>,
              ]}
             </CardActions>
             {commentFormOpend && (
               <>
               <Divider/>
                <List className="postcard__commend_container">
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar className="postcard__commend_profphoto" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshg1UlZU8R3dPaWcIAdVgnkrLSKgN-knvPg&usqp=CAU" />
            </ListItemAvatar>
             <ListItemText className="postcard__commend"
                primary={props.comm}
               secondary={
               <React.Fragment>              
              <Typography
                component="span"
                variant="body2"
                className="postcard__commend_nick"
                color="textPrimary"
              >
               <Link to={"/main/mypage/"+{nick}} >{props.nick} </Link>
              </Typography>
              {props.date}
            </React.Fragment>
          }
        />
      </ListItem>
      
      </List>     

              </>
              )}
             
           </div>

        )
    }

export default PostLikesBox;