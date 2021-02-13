import React, { Component } from 'react';
import { DetailMapSubWrap, DetailMap, DetailSubject } from '../DetailIndex';

class DetailMapContainer extends Component {
    constructor(props){
        super(props);
        console.log(this.props.rnum);

    }
    render() {
        return (
            <DetailMapSubWrap>
                <DetailMap/>
                <DetailSubject
                rnum={this.props.rnum}
                />
            </DetailMapSubWrap>
        )
    }
}
export default DetailMapContainer;