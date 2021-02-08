import userEvent from '@testing-library/user-event';
import axios from 'axios';

  export function SignIn({ memailid, mpw }) {
    
    let url = "http://localhost:9001/member/memCheck";
    let user ="";
   //////////////////////////////////////////////////////////
  
    new Promise((resolve, reject) => {
      console.log('Hello Promise'); //2
      ///axios 
      axios.post(url,{memailid:memailid,mpw :mpw})
          .then(res=>{
            console.log(memailid+" gggg "+ mpw); //3
              alert("로그인하셨습니다!1111111"); //4
              //setUser2(user2 = res.data);
              user = res.data; 
          })
      resolve();
       })
      .then(() => {
      }).catch(() => {
      console.log('Error!'); 
      })
    
    return user;
    
  }
  
  //setTimeout(() => {
  //  console.log("????????");
    
  //}, 2000);