import React, {Component} from 'react';
import axios from 'axios';
import { ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';


class PostHeaderBox extends Component{

      constructor(props)
      {
          super(props);
          this.state={
            loadresinfo:[]
          }
      }


  // 레스토랑정보
  getResInfo = () => {
      let url = "http://localhost:9001/review/res";
      axios.get(url,{
          params:{
             rnum:26
          }
      })
      .then(respones => {
          console.log(respones.data);
          this.setState({
            loadresinfo:respones.data
            
          })
          
      }).catch(error => {
          console.log("레스토랑정보불러오기 에러 : " + error);
      })

  }

  componentDidMount() {
    //처음시작시 백엔드로부터 데이터 가져오기
    this.getResInfo();
}

    // //마이페이지로 이동 닉을 받아와야함
    // const goMypage = () => {
    // post.history.push("/main/mypage?nick="+this.state.postData.mnick);
    //   }
    render(){ 
      
        return (
           <div className="postcard_header">
            
              <ListItem>
                {this.state.loadresinfo.resname}
                <ListItemAvatar>
                  {/* 프로필이미지, 가게이름, 가게위치 */}
                  <Avatar className="mainlist__header_profphoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshg1UlZU8R3dPaWcIAdVgnkrLSKgN-knvPg&usqp=CAU" alt="user"/>
                </ListItemAvatar>
                <ListItemText className="mainlist__header_id"></ListItemText>
                <ListItemText  className="mainlist__header_id" primary="{this.state.loadresinfo.resname}" secondary="강남 신논현역 근처" ></ListItemText>
              </ListItem>
           </div>
        )
      } 
    }
 
export default PostHeaderBox;