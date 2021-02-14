import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Search from './search';

class LocationService extends Component {
    //부모컴포넌트에서 버튼과 검색창을 만들어 준다
    constructor(props)
    {
        super(props);
        this.state={
          searchData:[]
        
        }
    } 

    search=(query)=>{
         console.log(query);  
        axios.get(`http://localhost:9001/review/search?keyword=${query}`,{
                  
        }) 
        .then(res=>{       
            console.log(res.data);     
            this.setState({
                searchData:res.data
            })
        }).catch(err=>{
            console.log("검색목록 출력 에러"+err);
        });
        
    }
    
        render() {   
            return (      
                <div className="mainpage_container">
                <div className="mainpage_list_wrapper">      
                   {
                   this.state.searchData.map((row,idx)=>(
                   <Search row={row} key={idx} no={idx+1}
                   history={this.props.history}/>
                   ))
                   }    
                 </div>
                 </div>
                )
            }
        }
        
        
export default LocationService;
        
        