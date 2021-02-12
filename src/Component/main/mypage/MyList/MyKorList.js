import React,{Component} from 'react';
import ListPrint from './ListPrint';
import axios from 'axios';

class MyKorList extends Component{
    constructor(props){
        super(props); 
        console.log("마이코리아리스트");
        console.log(this.props.match.params.mnick);
    }
    state = {
        mypageList:[]
    }

    // 리스트 불러오기
    getMypageList = () => {
        let url = "http://localhost:9001/mypage/list/kor";
        axios.get(url,{
            params:{
                mnick:this.props.match.params.mnick
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
 
export default MyKorList;