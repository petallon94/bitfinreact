import React from 'react';
import {CardContent, Typography} from '@material-ui/core';

const PostContentBox = (post) => {

    // const [commentFormOpend, setCommendFormOpened] = useState(false);

    //글 클릭시 디테일페이지로 이동
    // const goDetail = () => {
    // this.props.history.push("/main/detail?num="+props.rmnum);
    // }
    

        return (
           <div className="postcard_content">
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {post.rcontent}    
                </Typography>
                </CardContent>
            </div>
        )
    }

export default PostContentBox;