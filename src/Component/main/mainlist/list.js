import React,{Component} from 'react';
import cards from './cards';
import "./mainlist.css";
import axios from 'axios';

    
class list extends Component{

  id = 6;

  state = {
    input: '',
    posting: [
      {
        id: 1,
        username: 'author',
        img: 'https://dummyimage.com/600x400/6300ee/ffffff.png&text=1',
        title: 'Image',
        content : 'sssssssssssssssssssssssssssssssss',
        date: 'Dec 17, 2020',
        likes: 1
      },
      {
        id: 2,
        username: 'author',
        img: 'https://dummyimage.com/400x600/6300ee/ffffff.png&text=2',
        title: 'Image',
        content : 'sssssssssssssssssssssssssssssssss',
        date: 'Dec 17, 2020',
        likes: 1
      },
      {
        id: 3,
        username: 'author',
        img: 'https://dummyimage.com/300x400/6300ee/ffffff.png&text=3',
        title: 'Image',
        content : 'sssssssssssssssssssssssssssssssss',
        date: 'Dec 17, 2020',
        likes: 1
      },
      {
        id: 4,
        username: 'author',
        img: 'https://dummyimage.com/400x600/6300ee/ffffff.png&text=4',
        title: 'Image',
        content : 'sssssssssssssssssssssssssssssssss',
        date: 'Dec 17, 2020',
        likes: 1
      },
      {
        id: 5,
        username: 'author',
        img: 'https://dummyimage.com/400x600/6300ee/ffffff.png&text=5',
        title: 'Image',
        content : 'sssssssssssssssssssssssssssssssss',
        date: 'Dec 17, 2020',
        likes: 1
      },
      {
        id: 6,
        username: 'author',
        img: 'https://dummyimage.com/300x400/6300ee/ffffff.png&text=6',
        title: 'Image',
        content : 'sssssssssssssssssssssssssssssssss',
        date: 'Dec 17, 2020',
        likes: 1
      }
    ]
  }

  handleToggle = (id) => {
    const { posting } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = posting.findIndex(todo => todo.id === id);
    const selected = posting[index]; // 선택한 객체

    const newPosting = [...posting]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기

    newPosting[index] = { 
      //...likes, 
      //checked: !likes.checked
    };

    
    this.setState({
      posting: newPosting
    });
  }

    render(){ 
    const {input, posting } = this.state; 
    const {
      handleToggle

    }   = this;
   return (
     <div>
      <cards posting={posting} onToggle={handleToggle}/>
    </div>
  );
}
}

export default list;


