import React, { Component } from 'react';
import { DetailMapSubWrap, DetailMap, DetailSubject } from '../DetailIndex';

class DetailMapContainer extends Component {
    render() {
        return (
            <DetailMapSubWrap>
                <DetailMap/>
                <DetailSubject/>
            </DetailMapSubWrap>
        )
    }
}
export default DetailMapContainer;