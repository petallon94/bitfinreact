import React,{Component} from "react"
import store from "../../redux/store";
import "./Profilemain.css";
import propic from "../../image/unprofile.jpg";

class Profilepass extends Component {
  
  state = {
    profileUrl:this.props.match.url
  }
  
  
  render() {
  return (
    <>    
    <div className = "profilenn">
      
      <h3>프로필 수정</h3>
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