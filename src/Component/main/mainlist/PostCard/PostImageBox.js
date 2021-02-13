import React, { useCallback, useState } from 'react';
import {CardMedia} from '@material-ui/core';
import "../mainlist.css";

//import { PlusOutlined } from '@ant-design/icons';


//import { backUrl } from '../config/config';
const PostImageBox = (post) => {

  //const url="http://localhost:9001/photo/";
  return (
    <div className="postcard_photo">
     <CardMedia className="postcard__photo"
      image="https://lh3.googleusercontent.com/proxy/sWn8UnM7WbDe5iS0huGmdpjF3Fp791e0z_kty1c2fORjPI5JZTz23MvJAjFsINOCZ5gBZkrSca4CBoAd-rUgPF-J1wIjEehyAAg0kmNWYQAHcsjTGrh4StghED68qU7HpHdh0jYQEGCNvw7k5CHbeZqa-G61vFd1xQ"
      title="시골된장찌개"/>
     </div>

  )
}

export default PostImageBox;


// const PostImageBox = ({ images }) => {
//   const [showImagesZoom, setShowImagesZoom] = useState(false);

//   //이미지클릭시 이미지 확대해서 볼수 있음
//   const onZoom = useCallback(() => {
//     setShowImagesZoom(true);
//   }, []);
//   //이미지 모달 닫기
//   const onClose = useCallback(() => {
//     setShowImagesZoom(false);
//   }, []);

//   if (images.length === 1) {
//     return (
//       <>
//         <img role="presentation" src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
//         <showImagesZoom/>
//         {/* {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />} */}
//       </>
//     );
//   }
//   if (images.length === 2) {
//     return (
//       <>
//         <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
//         <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={`${images[1].src}`} alt={images[1].src} onClick={onZoom} />
//         {/* {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />} */}
//       </>
//     );
//   }
//   return (
//     <>
//       <div>
//         <img role="presentation" style={{ width: '50%' }} src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
//         <div
//           role="presentation"
//           style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
//           onClick={onZoom}
//         >
//           {/* <PlusOutlined /> */}
//           <br />
//           {images.length - 1}
//           개의 사진 더보기
//         </div>
//       </div>
//       {/* {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}  */}
//     </>
//   );
// };

// PostImageBox.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.object),
// };

//export default PostImageBox;
