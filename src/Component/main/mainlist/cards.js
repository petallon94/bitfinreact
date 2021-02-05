import React,{Component} from 'react';
import "./mainlist.css";
import axios from 'axios';

 const tileData ={
      img: ["https://dummyimage.com/600x400/6300ee/ffffff.png&text=1", 
      "https://dummyimage.com/400x600/6300ee/ffffff.png&text=2", 
      "https://dummyimage.com/300x400/6300ee/ffffff.png&text=3",
      "https://dummyimage.com/400x600/6300ee/ffffff.png&text=4",
      "https://dummyimage.com/400x600/6300ee/ffffff.png&text=5",
      "https://dummyimage.com/300x400/6300ee/ffffff.png&text=6"],

      title: ['Image','Image','Image','Image','Image','Image'],
      author: ['author','author','author','author','author','author'],
      date: ['Dec 17, 2020','Dec 17, 2020','Dec 17, 2020','Dec 17, 2020','Dec 17, 2020','Dec 17, 2020'],
      likes: ['❤','❤','❤','❤','❤','❤'],
      content: ['saffffffffffaassssssssssssssssssssssssssssssssssssssssssss','sds','sdsss','sdq','qwww','wdwd'],
    
   }
      
class cards extends Component{
  
  // //스프링에서 목록 가져오기

  // postlist=()=>{
  //   let url="http://localhost:9001/main/mainlist";
  //   axios.get(url)
  //   .then(res=>{
  //     this.setState({
  //       tileData:res.data
  //     })
  //   }).catch(err=>{
  //     console.log("목록출력에러"+err);
  //   });
  // }

  // componentWillMount(){
  //    console.log("componentWillMount");  
  //   this.postlist();
  // }

  render(){ 
    const {id, title, content, likes, date, img, username} = this.props;   
    
   return (
    <div className="main_mainlist">
    <div className="main__list">
      <div className="main_container">
        {tileData.map((tile) => (
          <div className="main_postcard" >
               <div className="main_listitem_img">
              <img className ="main_img" src={tile.img} alt={tile.title} />
            </div>    
              <div className="main_listitem_btn">
              <span>{tile.date}</span>
              <span>{tile.likes}</span>
            </div>
              <div className="main_listitem_wrapper">
                <div className="main_listitem_id">{tile.username}</div>
                <div className="main_listitem_title">{tile.title}</div>
                <div className="main_listitem_contents">{tile.content}</div>
              </div>                       
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
}

export default cards;


