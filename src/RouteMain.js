import React, { Component,useState } from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {header} from './Component/header';
import Follow from './Component/main/follow/FollowBody';
import {list} from './Component/main/mainlist'
import {mypage} from './Component/main/mypage'
import Detail from './Component/main/soobin/Detail/DetailPage'
import {LoginMain,LoginSignup,AuthRoute,Profiletest} from './Component/login'
import {SignIn} from './Component/login/Loginauth';

function RouteMain()  {
    

  const [user, setUser] = useState(null);
  const authenticated = user != null;  
  const login = ({ memailid, mpw }) => setTimeout(setUser(SignIn({ memailid, mpw })),1000);
  const logout = () => setUser(null);


        return (
            <div>
                <Route exact path="/login"
                 render={props => (
                <LoginMain authenticated={authenticated} Login={login} {...props} />
                 )}/>
               <Route exact path="/login/signup" component={LoginSignup}/>
                <Route path="/main" component={header}/>
                <Route exact path="/main" component={list}/>
                <Route path="/main/mypage" component={mypage}/>
                <Route exact path="/main/mypage" component={mypage}/>
                <Route exact path="/main/modal" component={Follow}/>

                <Route exact path="/main/detail/:rnum" component={Detail}/>
                 <Switch>
                  <AuthRoute
                  authenticated={authenticated} path="/profile"
                  render={props => <Profiletest user={user} {...props} />}
                  />
         
        </Switch>

            </div>
        );
}

/* <Route exact path="/main/mypage" component={mypage}/> */
// <Route path="/Home" component={Menu}/></div>
/* <Route exact path="/" component={header}/> */
export default RouteMain;
