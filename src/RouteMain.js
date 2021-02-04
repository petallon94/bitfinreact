import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {header} from './Component/header';
import {list} from './Component/main/mainlist'
import {mypage} from './Component/main/mypage'

class RouteMain extends Component {
    render() {
        return (
            <div>
                <Route exact path="/login" component={list}/>
                <Route path="/main" component={header}/>
                <Route exact path="/main" component={list}/>
                <Route path="/main/mypage" component={mypage}/>
            </div>
        );
    }
}
/* <Route exact path="/main/mypage" component={mypage}/> */
// <Route path="/Home" component={Menu}/></div>
/* <Route exact path="/" component={header}/> */
export default RouteMain;