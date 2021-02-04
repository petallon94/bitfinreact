import React,{Component} from 'react';
import "./LoginSignup.css";
import {isEmail,isPassword,isNick} from "./SignupCheck";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LoginSignup extends Component{

    
    state ={
        email : "",
        nick : "",
        pw : "",
        pwcc :"",
        pswcheck : ""
        };

        //이메일 형식 확인
        checkValidEmail = () => {
            let timer;
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(() => {
              if (!isEmail(this.state.email)) {
                this.setState({ isValidEmail: false });
              } else {
                this.setState({ isValidEmail: true });
              }
            }, 500);
          }

          createEmail =(e)=> {
            // console.log("사인업 이메일: ", e.target.value);
            const __email = e.target.value;
            this.setState({ email: __email });
            this.checkValidEmail();    //함수 실행
          };


          //비밀번호 형식 확인

          checkValidPassword = () => {
            let timer;
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(() => {
              if (!isPassword(this.state.pw)) {
                this.setState({ isValidPsw: false });
              } else {
                this.setState({ isValidPsw: true });
              }
            }, 500);
          }

          // target value 설정

          createPsw =(e)=> {
            const __psw = e.target.value;
            this.setState({ pw: __psw });
            this.checkValidPassword();    //함수 실행
          };


          //닉네임 형식 확인

          checkValidNick = () => {
            let timer;
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(() => {
              if (!isNick(this.state.nick)) {
                this.setState({ isValidNick: false });
              } else {
                this.setState({ isValidNick: true });
              }
            }, 500);
          }

          // target value 설정

          createNick =(e)=> {
            const __nick = e.target.value;
            this.setState({ nick: __nick });
            this.checkValidNick();    //함수 실행
          };

          //비밀번호 재확인

          //일치여부 확인함수
            checkMatchPassword = () => {
            let timer;
            if (timer) {
             clearTimeout(timer);
            }
            timer = setTimeout(() => {
             if (this.state.pw === this.state.pwcc) {
               this.setState({ isMatchPassword: true });
             } else {
                this.setState({ isMatchPassword: false });
            }
            }, 500);
            };

            repeatPassword =(e)=> {
                const __pwcc = e.target.value;
                this.setState({ pwcc: __pwcc });
                this.checkMatchPassword();    //함수 실행
              };




    

    changeEvent=(e)=>{       
        this.setState({
             [e.target.name]:e.target.value
             
         })
     }
 

    render(){

        return(
            <div className = "Signupmm">
               
               <div className ="Signupsection">

               <img src="http://placehold.it/170x50" />
               <h4>호로록만의 맛집정보를 보시려면 가입하세요</h4>

               <div className = "Signupform">
               <input className ="Signupemail" name ="email" onChange={e => this.createEmail(e)} placeholder="휴대폰 번호 또는 이메일 주소"/>
                <input className ="Signupnick" name ="nick" onChange={e=>this.createNick(e)} placeholder="닉네임" />
                <input className ="Signuppsw" name ="pw" onChange={e=>this.createPsw(e)} placeholder="비밀 번호" type = "password" />
                <input className ="Signuppswcc" name ="pwcc" onChange={e => this.repeatPassword(e)} placeholder="비밀 번호 확인" type="password"/>
                
                  {this.state.email ? (this.state.isValidEmail ? ( <span style={{ color: "blue" }}>사용가능한 email입니다.</span>
                ) : (<span style={{ color: "red" }}>유효하지 않은 email입니다.</span>)) : null} <br></br>

                {this.state.pw ? (this.state.isValidPsw ? ( <span style={{ color: "blue" }}>사용가능한 비밀번호입니다.</span>
                ) : (<span style={{ color: "red" }}>8 ~ 12자 영문, 숫자 조합으로 비번을 입력해 주세요</span>)) : null} <br></br>

                {this.state.nick ? (this.state.isValidNick ? ( <span style={{ color: "blue" }}>사용가능한 닉네임입니다.</span>
                ) : (<span style={{ color: "red" }}>닉네임 은 8자까지 입력할수 있습니다. </span>)) : null} <br></br>

                {this.state.pwcc ? ( this.state.isMatchPassword ? (<span style={{ color: "blue" }}>비밀번호 확인완료</span>
                ) : (<span style={{ color: "red" }}> 비밀번호가 일치하지 않습니다.</span>)) : null} <br></br>
                   
                   <button className ="Signupbtn" >가입</button>
                   <a>가입하면  호로록의 약관, 데이터 정책, 및 쿠키정책에 동의하게 됩니다.</a>

               </div>

                <div className ="Signinbtn">
                   <a>계정이 있으신가요?   </a> <a href ='./'>로그인하기</a>
                   
                </div> 
                </div>


            </div>
        )
    }
}

export default LoginSignup;