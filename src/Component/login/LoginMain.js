import React,{Component} from 'react';
import "./LoginMain.css";
import axios from 'axios';
import {Route, Link, withRouter,Redirect } from "react-router-dom";
import store from "../../redux/store";
import { URL, actionType, mainViewType } from "../../redux/config";

class LoginMain extends Component{


  constructor(props) {
    super(props);
    
    this.state={
     
        logged:this.props.logged,
        onLogin:this.onLogin,
        user : "",
        memailid : "",
        mpw : "",
        mnick : "",
        follower : ""
    }

    //함수 선언
}

setLoginId = (loginId) => {
  console.log("LoginPage setLoginId()");
  store.dispatch({
      type: actionType.LOG_IN,
      // mainView: mainViewType.MainPage
      loginId: loginId,
      logged: true
  });
}


onLogin = () => {
    try {
      let data = {

        memailid :this.state.memailid,
        mpw : this.state.mpw
      }
      let url = "http://localhost:9001//member/memCheck";       
            axios.post(url,data)
            .then(res=>{
             
            
              if(res.data){
                  this.setLoginId(data.memailid);
                  console.log(res.data);   
                  //alert(store.getState().loginId+ "가 스토어에 저장된 아이디입니다");
                  this.props.history.push("/profile");
              }
              else{
                  alert("아이디와 비밀번호가 맞지않습니다.");
                  this.setState({
                      mpw: '',
                  })
              }
            
            }).catch(error => {
              setTimeout(function() {
              console.log(error.response)
              alert("아이디 비밀번호를 확인해주세요!");
            }, 2000);
            });
      
    } catch (e) {
      setTimeout(function () {
        alert("Failed to login")
        console.log(e.response)
      }, 1500);
      }

      return <Redirect to="../profile" />
    
  }


  changeEvent=(e)=>{       
    this.setState({
         [e.target.name]:e.target.value
         
     })
 }

  
  //const { from } = location.state || { from: { pathname: "/profile" } }
  //if (authenticated) return <Redirect to={from} />

  render(){
  //size 조절
      const width = window.innerWidth; 
      //const parentOnLoginHandler = this.onLogin.bind(this);   
      //사이즈 조절 함수 끝
       return(
            <div className = "Loginmm">
            

            { width > 1200 && (<div className ="Loginpic">
               <img className ="Loginpic" src="http://placehold.it/450x600" />
               </div>)}
               
               
               <div className ="Loginsection">
               <div className = "Loginform">
               <img src="http://placehold.it/170x50" />
               <input className ="Loginemail"  name= "memailid" value={ this.state.memailid } onChange={ this.changeEvent.bind(this)} placeholder="이메일을 입력하세요"/>
                <input className ="Loginpsw"   name="mpw" value={ this.state.mpw } onChange={ this.changeEvent.bind(this)}   placeholder="비밀번호를 입력하세요" type="password"/>
                <button type="loginbtn"
                onClick={this.onLogin.bind(this)}>
                    로그인
                </button>

               </div>
               <div className ="Loginbot">
                   <a>----- 현재 width : {width} -----</a>
                   
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