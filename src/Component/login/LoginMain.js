import React,{Component,state,useState} from 'react';
import { Redirect } from "react-router-dom"
import "./LoginMain.css";


function LoginMain ({ authenticated, Login, location }){
  
  const [memailid, setEmail] = useState("")
  const [mpw, setPassword] = useState("")

  const handleClick = () => {
    try {
      console.log("try")
      Login({memailid, mpw})
      console.log("try22")
    } catch (e) {
      alert("Failed to login")
      console.log(e.response)
      setEmail("")
      setPassword("")
    }
  }

  
  const { from } = location.state || { from: { pathname: "/profile" } }
  if (authenticated) return <Redirect to={from} />

  
  //size 조절
      const width = window.innerWidth;    
      //사이즈 조절 함수 끝



       return(
            <div className = "Loginmm">
            

            { width > 1200 && (<div className ="Loginpic">
               <img className ="Loginpic" src="http://placehold.it/450x600" />
               </div>)}
               
               
               <div className ="Loginsection">
               <div className = "Loginform">
               <img src="http://placehold.it/170x50" />
               <input className ="Loginemail"  value={memailid} onChange={({ target: { value } }) => setEmail(value)} placeholder="이메일을 입력하세요"/>
                <input className ="Loginpsw"   value={mpw} onChange={({ target: { value } }) => setPassword(value)}  placeholder="비밀번호를 입력하세요" type="password"/>
                   <button className ="Loginbtn" onClick={handleClick} >로그인하기</button>

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


export default LoginMain;