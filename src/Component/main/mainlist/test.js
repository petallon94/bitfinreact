

    
  
    // const tileData = [
    //   {
    //     id: 1,
    //     username: 'author',
    //     img: 'https://dummyimage.com/600x400/6300ee/ffffff.png&text=1',
    //     title: 'Image',
    //     content : 'sssssssssssssssssssssssssssssssss',
    //     date: 'Dec 17, 2020',
    //     likes: 1
    //   },
    //   {
    //     id: 2,
    //     username: 'author',
    //     img: 'https://dummyimage.com/400x600/6300ee/ffffff.png&text=2',
    //     title: 'Image',
    //     content : 'sssssssssssssssssssssssssssssssss',
    //     date: 'Dec 17, 2020',
    //     likes: 1
    //   },
    //   {
    //     id: 3,
    //     username: 'author',
    //     img: 'https://dummyimage.com/300x400/6300ee/ffffff.png&text=3',
    //     title: 'Image',
    //     content : 'sssssssssssssssssssssssssssssssss',
    //     date: 'Dec 17, 2020',
    //     likes: 1
    //   },
    //   {
    //     id: 4,
    //     username: 'author',
    //     img: 'https://dummyimage.com/400x600/6300ee/ffffff.png&text=4',
    //     title: 'Image',
    //     content : 'sssssssssssssssssssssssssssssssss',
    //     date: 'Dec 17, 2020',
    //     likes: 1
    //   },
    //   {
    //     id: 5,
    //     username: 'author',
    //     img: 'https://dummyimage.com/400x600/6300ee/ffffff.png&text=5',
    //     title: 'Image',
    //     content : 'sssssssssssssssssssssssssssssssss',
    //     date: 'Dec 17, 2020',
    //     likes: 1
    //   },
    //   {
    //     id: 6,
    //     username: 'author',
    //     img: 'https://dummyimage.com/300x400/6300ee/ffffff.png&text=6',
    //     title: 'Image',
    //     content : 'sssssssssssssssssssssssssssssssss',
    //     date: 'Dec 17, 2020',
    //     likes: 1
    //   }
    // ]
  

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

  // constructor(props)
  // {
  //     super(props);
  //     this.state={
  //         shopData:[]
  //     }
  //     //this.onAppSave=this.onAppSave.bind(this);
  // }

  // //스프링에서 목록 가져오기
  // list=()=>{
  //     let url="http://localhost:9001/shop/list";
  //     axios.get(url)
  //     .then(res=>{            
  //         this.setState({
  //             shopData:res.data
  //         })
  //     }).catch(err=>{
  //         console.log("목록 출력 에러"+err);
  //     });
  // }

  // componentWillMount() {
  //     this.list();//처음시작시 백엔드로부터 데이터 가져오기
  // }

/*
render(){
  return (
     <div className="mainlist__post">
       {tileData.map((tile) => (
     <Card/>
     ))}
      </div>
  )
}
}
export default list;

{ <div className="main_postcard" >
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
          </div> */