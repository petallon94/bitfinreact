import React, {useState, useCallback} from 'react';
import {CardActions, Popover, ButtonGroup, Button } from '@material-ui/core';
import { RiHeartsLine, RiHeartsFill} from "react-icons/ri";
import {FaComments} from "react-icons/fa";
import {BsThreeDotsVertical } from "react-icons/bs";
import PostCommendContainer from './PostCommendBox';

const PostLikesBox = (post) => {
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

// handleChange=(e)=>{
//     this.setState({
//         name:e.target.value
//     })
// }

// handleEnterInsert=(e)=>{
//     if(e.key=='Enter'){
//         this.setState({
//             names:this.state.names.concat(this.state.name),
//             name:''
//         })
//     }
// }

// //더블클릭시 배열에서 삭제
// handleRemove=(index)=>{
//     const {names}=this.state;
//     this.setState({
//         //index 번째를 제외한 원소만 새 배열로 넣어준다
//         //names:names.filter((item,i)=>i!==index)

//         //또는 slice 를 이용해서 넣어줘도 된다
//         //배열에 0~index-1 까지 잘라서 넣어주고, index 다음값부터 끝까지 배열에 넣어준다
//         //... 펼침 연산자
//         names:[
//             ...names.slice(0,index),
//             ...names.slice(index+1,names.length)
//         ]
//     })
// }


        return (
           <div className="postcard_likes">
              <CardActions disableSpacing>
                {/* {cover={props.[0] && <PostImages images={post.Images}/>} */}
                {[liked
                 ? <RiHeartsLine key="heart" onClick={onToggleLike}/>
                : <RiHeartsFill key="heart" onClick={onToggleLike}/>,
                 <FaComments key="comment" onClick={onToggleComment}/>,
                 <Popover key="more" content={(           
                  <ButtonGroup>
                  {/* 내아이디와 게시글작성자의 id가 같으면 수정삭제가능 */}
                 { post.mnum === post.r
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
            <div>
               <PostCommendContainer/>
             </div>)}
            
           

           </div>

        )
    }

export default PostLikesBox;