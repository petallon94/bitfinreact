import React,{Component} from 'react';
import ListPrint from './ListPrint';
import axios from 'axios';

class MyAllList extends Component{
    constructor(props){
        super(props); 
        console.log("마이올리스트");
        console.log(this.props.match);
    }
    state = {
        mypageList:[]
    }

    // 리스트 불러오기
    getMypageList = () => {
        let url = "http://localhost:9001/mypage/list";
        axios.get(url,{
            params:{
                mnick:"보드테스트"
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mypageList:respones.data
            })
        }).catch(error => {
            console.log("마이페이지 리스트 오류 : " + error);
        })
    }

    componentDidMount(){
        this.getMypageList();
    }

    render(){
        return(
        <div className="mypage_list_wrapper">
            {/* 리스트 내용 시작 */}
            {this.state.mypageList ? this.state.mypageList.map(r => {
                return <ListPrint rcontent={r.rcontent} key={r.rnum} mnum={r.rmnum} mnick={r.mnick} writeDay={r.rwriteday} picname={r.pickname} pirnum={r.pirnum} />
                }) : '리스트가 엄서용..'}
        </div>
        )
    }
}
 
export default MyAllList;