import React from 'react';
import './DetailLike.css'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { FaComments, FaHeart,FaShareAlt } from "react-icons/fa";

const DetailLike = () => (
    <div className="DetailLike">
        <div className="DetailLike-bar">
            <div className="DetailLike-box">
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <FaHeart />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <FaComments />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <FaShareAlt />
                    </Badge>
                </IconButton>
                <input style={{position:'relative',top:'40px',left:'-135px',width:'55%',height:'20px'}} className="DetailLike-write" type="comment" placeholder='댓글달기'/>
            </div>
        </div>
    </div>
);
export default DetailLike;