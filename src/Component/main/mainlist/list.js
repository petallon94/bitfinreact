import React,{Component, useState} from 'react';
import Card from './card';
import "./mainlist.css";
import axios from 'axios';

    
class list extends Component{

    
 
    // const [img, uploadimg] = useState(tileData)
    // const [title, uploadtitle] = useState(tileData) 
    // const [author,  uploadauthor] =  useState(tileData)
    // const [date, setdate] =  useState(tileData)
    // const [likes, addlikes] =  useState(tileData)
    // conset [content, uploadcontent] =  useState(tileData)

  // handleToggle = (id) => {
  //   const { posting } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    // const index = posting.findIndex(todo => todo.id === id);
    // const selected = posting[index]; // 선택한 객체

    // const newPosting = [...posting]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기

    // newPosting[index] = { 
    //   ...likes, 
    //   checked: !likes.checked
    // };


    
  //   this.setState({
  //     posting: newPosting
  //   });
  // }

 
  //   const {input, posting } = this.state; 
  //   const {
  //     handleToggle

  //   }   = this;

  constructor(props)
  {
      super(props);
      this.state={
          postData:[]
      }
      //this.onAppSave=this.onAppSave.bind(this);
  }

  //스프링에서 목록 가져오기
  mainlist=()=>{
      let url="http://localhost:9001/review/list";
      axios.get(url)
      .then(res=>{       
         console.log(res.data);     
          this.setState({
              postData:res.data
          })
      }).catch(err=>{
          console.log("목록 출력 에러"+err);
      });
  }

  componentDidMount() {
      this.mainlist();//처음시작시 백엔드로부터 데이터 가져오기
  }


render(){
  return (
     <div className="mainlist">
       <div className="mainlist__container">
        {
        this.state.postData.map((row,idx)=>(
        <Card row={row} key={idx} no={idx+1}
        history={this.props.history}/>
        ))
        }
        </div>
      </div>
  )
}
}
export default list;

