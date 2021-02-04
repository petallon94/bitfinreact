import React,{Component} from 'react';
import { useState, useEffect } from 'react';
import "./LoginMain.css";

class LoginMain extends Component{


    state ={
        width : window.innerWidth
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth});
      };
      componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

    render(){

       return(
            <div className = "Loginmm">
            

            { this.state.width > 1200 && (<div className ="Loginpic">
               <img className ="Loginpic" src="http://placehold.it/450x600" />
               </div>)}
               
               
               <div className ="Loginsection">
               <div className = "Loginform">
               <img src="http://placehold.it/170x50" />
               <input className ="Loginemail" placeholder="이메일을 입력하세요"/>
                <input className ="Loginpsw" placeholder="비밀번호를 입력하세요" type="password"/>
                   <button className ="Loginbtn" >로그인하기</button>

               </div>
               <div className ="Loginbot">
                   <a>----- 현재 width : {this.state.width} -----</a>
                   
                </div>
                <div className ="Loginsignup">
                   <a>계정이 없으신가요?   </a> <a href ='./signup'>가입하기</a>
                   
                </div> 
                </div>


            </div>
        )
    }
}

export default LoginMain;