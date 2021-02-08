import React from 'react';
import './DetailComment.css'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaComments, FaHeart,FaShareAlt } from "react-icons/fa";

const DetailComment = () => (
    <div className="DetailComment">
        <div className="DetailComment-bar">
            <div className="DetailComment-box">
                <div className="DetailComment-nick">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLjZETkWOgURfHDtCVmB2ZRRCm7Hc6I_dHw&usqp=CAU'/>
                </div>
                <div className="DetailComment-item">
                    <div className="DetailComment-sub"><pre>오늘은</pre></div>
                    <div className="DetailComment-day">2021-02-05</div>
                    <div className="DetailComment-comment">답글달기</div>
                    <div className="DetailComment-icons">
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <BiDotsHorizontalRounded />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <FaHeart />
                            </Badge>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default DetailComment;