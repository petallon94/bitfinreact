import React,{Component} from "react"
import store from "../../redux/store";
import { URL, actionType, mainViewType } from "../../redux/config";

class Profiletest extends Component {
  render() {
  return (
    <>
      <h1>프로필 변경</h1>
      <dt>Email</dt>
      <dd>{store.getState().loginId}</dd>
      <dt>Password</dt>
      <dd></dd>
      <dt>Name</dt>
      <dd></dd>
    </>
  )
}
}

export default Profiletest