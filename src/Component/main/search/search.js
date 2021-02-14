import React,{Component} from 'react';

class search extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        searchresultList: []
      }
    }
  
    // getInputValue = (e) => {
    //   this.setState({
    //     searchValue: e.target.value,
    //   })
    // }
  
    // componentDidMount = () => {
    //   fetch('http://localhost:3000/data/userInfos-eunjinlee.json') 
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //         searchList: data.userInfos
    //       })
    //     })
    // }

    render(){   
        return (
            <div>검색</div>
        )
    }
}
export default search;