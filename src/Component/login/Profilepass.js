import React,{Component} from "react"
import store from "../../redux/store";
import axios from 'axios';
import "./Profilemain.css";
import propic from "../../image/unprofile.jpg";
import { NavLink } from 'react-router-dom';
import { URL, actionType, mainViewType } from "../../redux/config";

class Profilepass extends Component {

  constructor(props){
    super(props);
   
    this.state={
      file : '',
      previewURL : '',
      mpic : '',
      mnum : store.getState().mnum,
    };   
} 

  state = {
    profileUrl:this.props.match.url
  }
  // 이미지 미리보기를 위한 onchange~

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  
  //이미지 서버에 수정버튼 누르면 작동
  imageUpload=(e)=>{
    //const uploadFile=e.target.files;

    //let data = this.state;
    const uploadFile=e.target.files[0];

    const reviewPhoto=new FormData();
    reviewPhoto.append("uploadFile",uploadFile);

    axios({
        method:'post',
        url:'http://localhost:9001/member/upload',
        data:reviewPhoto,
        headers: {'Content-Type':'multipart/form-data'}
    }).then(response=>{
        this.setState({
            mpic:response.data.photoname
        })
    }).catch(err=>{
        console.log("파일업로드시오류:"+err);
    })
}

setMpic = (mpic) => {
  console.log("LoginPage setMnum()");
  store.dispatch({
      type: actionType.Mpic,
      // mainView: mainViewType.MainPage
      mpic: mpic,
      logged: true
  });
}

imageupup =(e)=>{

  let data = this.state;

  axios({
    method:'post',
    url:'http://localhost:9001/member/phoupdate',
    data:data,
  }).then(res=>{
    console.log("workkkkk!");
    this.setMpic(this.state.mpic);
  }).catch(err=>{
    console.log("파일업로드시오류:"+err);
  })

}
  
  render() {

    let url="http://localhost:9001/profilesave/"
    let profile_preview = null;
    if(this.state.file !== ''){
      profile_preview = <img className='profile_preview' src={this.state.previewURL}></img>
    }


  return (
    <>    
    <div className = "profilenn">
   

    <span id="addfile" style={{cursor:'pointer'}}>현재파일</span>
    <input type="file"  accept='image/jpg,impge/png,image/jpeg,image/gif' 
      name='profile_img' className='profile_img'
      onChange={this.imageUpload.bind(this)}/>
      <img src={url+store.getState().mpic} alt="없음"style={{width:'100px'}}/>
     <p className="file_check">미리보기</p>
     <NavLink exact to="/main" >
      <button onClick = {this.imageupup.bind(this)} >프로필사진 수정</button>
      </NavLink>
      <h3>===========================================</h3>
      <dt>Email</dt>
      <dd>{store.getState().loginId}</dd>
      <dt>Password</dt>
      <dd>{store.getState().mnick} </dd>
      <dt>Name</dt>
      <dd>{store.getState().mnum}</dd>
    </div>
    </>
  )
}
}

export default Profilepass