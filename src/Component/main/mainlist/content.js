// import React, { useState, useCallback, useEffect } from 'react';
// import { Button, Input } from '@material-ui/core';
// import PropTypes from 'prop-types';


// const { TextArea } = Input;
// const PostCardContent = ({ postData, editMode, onChangePost, onCancelUpdate }) => {
//   const { updatePostLoading, updatePostDone } = useState((state) => state.post);
//   const [editText, setEditText] = useState(postData);

//   useEffect(() => {
//     if (updatePostDone) {
//       onCancelUpdate();
//     }
//   }, [updatePostDone]);

//   const onChangeText = useCallback((e) => {
//     setEditText(e.target.value);
//   });

//   return ( // 첫 번째 게시글 #해시태그 #해시태그
//     <div>
//       {editMode
//         ? (
//           <>
//             <TextArea value={editText} onChange={onChangeText} />
//             <Button.Group>
//               <Button loading={updatePostLoading} onClick={onChangePost(editText)}>수정</Button>
//               <Button type="danger" onClick={onCancelUpdate}>취소</Button>
//             </Button.Group>
//           </>
//         )
//         : postData.split(/(#[^\s#]+)/g).map((v, i) => {
//           if (v.match(/(#[^\s#]+)/)) {
//             return <a href={`/hashtag/${v.slice(1)}`} prefetch={false} key={i}>{v}</a>
//           }
//           return v;
//         })}
//     </div>
//   );
// };

// PostCardContent.propTypes = {
//   postData: PropTypes.string.isRequired,
//   editMode: PropTypes.bool,
//   onChangePost: PropTypes.func.isRequired,
//   onCancelUpdate: PropTypes.func.isRequired,
// };

// PostCardContent.defaultProps = {
//   editMode: false,
// };

// export default PostCardContent;