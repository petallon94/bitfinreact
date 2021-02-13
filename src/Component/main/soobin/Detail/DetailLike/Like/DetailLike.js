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
            </div>
        </div>
    </div>
);
export default DetailLike;