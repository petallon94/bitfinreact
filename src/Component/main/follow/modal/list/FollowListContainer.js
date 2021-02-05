import React, { Component } from 'react';
import { FollowList,FollowListWrapper } from '../../../follow';
class FollowListContainer extends Component {
    render() {
        return (
            <FollowListWrapper>
                <FollowList/>
            </FollowListWrapper>
        )
    }
}
export default FollowListContainer;