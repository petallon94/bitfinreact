import React,{Component} from 'react';
import "./LoginSignup.css";
import {isEmail,isPassword,isNick} from "./SignupCheck";
import axios from 'axios';

class LoginSignup extends Component{

    
    state ={
        memailid : "",
        mnick : "",
        mpw : "",
        mpwcc :"",
        pswcheck : ""
        };

        //이메일 형식 확인
        checkValidEmail = () => {
            let timer;
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(() => {
              if (!isEmail(this.state.memailid)) {
                this.setState({ isValidEmail: false });
              } else {
                this.setState({ isValidEmail: true });
              }
            }, 500);
          }

          createEmail =(e)=> {
            // console.log("사인업 이메일: ", e.target.value);
            const __memailid = e.target.value;
            this.setState({ memailid: __memailid });
            this.checkValidEmail();    //함수 실행
          };


          //비밀번호 형식 확인

          checkValidPassword = () => {
            let timer;
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(() => {
              if (!isPassword(this.state.mpw)) {
                this.setState({ isValidPsw: false });
              } else {
                this.setState({ isValidPsw: true });
              }
            }, 500);
          }

          // target value 설정

          createPsw =(e)=> {
            const __mpw = e.target.value;
            this.setState({ mpw: __mpw });
            this.checkValidPassword();    //함수 실행
          };


          //닉네임 형식 확인

          checkValidNick = () => {
            let timer;
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(() => {
              if (!isNick(this.state.mnick)) {
                this.setState({ isValidNick: false });
              } else {
                this.setState({ isValidNick: true });
              }
            }, 500);
          }

          // target value 설정

          createNick =(e)=> {
            const __mnick = e.target.value;
            this.setState({ mnick: __mnick });
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
             if (this.state.mpw === this.state.mpwcc) {
               this.setState({ isMatchPassword: true });
             } else {
                this.setState({ isMatchPassword: false });
            }
            }, 500);
            };

            repeatPassword =(e)=> {
                const __mpwcc = e.target.value;
                this.setState({ mpwcc: __mpwcc });
                this.checkMatchPassword();    //함수 실행
              };

              //멤버 가입하기 (axios 사용)

              memInsert =(e)=>{
                let data = this.state;
                let url = "http://localhost:9001/member/add";
                console.log("1:"+data.memailid);
                console.log("2:"+data.mnick);
                console.log("3:"+data.mpw);

                setTimeout(function() {
                  console.log('Works!');
                  axios.post(url,data)
                .then(res=>{

                  alert("성공!!!!");
                  this.setState({
                    memailid : "",
                    mnick : "",
                    mpw : "",
                    mpwcc :""
                  })

                  this.props.history.push("./login");
                })
                }, 3000);

                
              }




    

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
               <input className ="Signupemail" name ="memailid" onChange={e => this.createEmail(e)} placeholder="휴대폰 번호 또는 이메일 주소"/>
                <input className ="Signupnick" name ="mnick" onChange={e=>this.createNick(e)} placeholder="닉네임" />
                <input className ="Signuppsw" name ="mpw" onChange={e=>this.createPsw(e)} placeholder="비밀 번호" type = "password" />
                <input className ="Signuppswcc" name ="mpwcc" onChange={e => this.repeatPassword(e)} placeholder="비밀 번호 확인" type="password"/>
                  {this.state.memailid ? (this.state.isValidEmail ? ( <span style={{ color: "blue" }}>사용가능한 email입니다.</span>
                ) : (<span style={{ color: "red" }}>유효하지 않은 email입니다.</span>)) : null} <br></br>
                {this.state.mnick ? (this.state.isValidNick ? ( <span style={{ color: "blue" }}>사용가능한 닉네임입니다.</span>
                ) : (<span style={{ color: "red" }}>닉네임 은 8자까지 입력할수 있습니다. </span>)) : null} <br></br>
                {this.state.mpw ? (this.state.isValidPsw ? ( <span style={{ color: "blue" }}>사용가능한 비밀번호입니다.</span>
                ) : (<span style={{ color: "red" }}>8 ~ 12자 영문, 숫자 조합으로 비번을 입력해 주세요</span>)) : null} <br></br>

                {this.state.mpwcc ? ( this.state.isMatchPassword ? (<span style={{ color: "blue" }}>비밀번호 확인완료</span>
                ) : (<span style={{ color: "red" }}> 비밀번호가 일치하지 않습니다.</span>)) : null} <br></br>
                   
                   <button className ="Signupbtn" onClick ={this.memInsert.bind(this)} >가입</button>
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