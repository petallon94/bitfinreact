

import axios from 'axios';
import React,{Component} from 'react';
//import DaumPostcode from "react-daum-postcode";
import './ReviewWrite.css';



class ReviewWrite extends Component{

    constructor(props){
        super(props);
       
        this.state={
            rmnum:'',
            rcontent:'',
            rcategory:'',
            rscore:'',
            resname:'',
            resaddr:'',
            picname:'',
            hashtag:'',
            addr:'',
            


        };

        
    }


    changeEvent=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    //사진업로드
    imageUpload=(e)=>{
        const uploadFile=e.target.files[0];

        const reviewPhoto=new FormData();
        reviewPhoto.append("uploadFile",uploadFile);

        axios({
            method:'post',
            url:'http://localhost:9001/review/upload',
            data:reviewPhoto,
            headers: {'Content-Type':'multipart/form-data'}
        }).then(response=>{
            console.log(response.data.photoname);
            console.log(this.state.picname);
            this.setState({
                picname:response.data.photoname
                
            })
        }).catch(err=>{
            console.log("파일업로드시오류:"+err);
        })
    }

    
    
    
    //주소검색 팝업
    ReviewAddr = () => {
        // this.setState({
        //     addr:''
        // })
        new window.daum.Postcode({
          oncomplete: data => {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
      
            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            // const addr = ""; // 주소 변수
            // const extraAddr = ""; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === "R") {
              // 사용자가 도로명 주소를 선택했을 경우
              this.setState({
                resaddr: data.roadAddress
              });
            } else {
              // 사용자가 지번 주소를 선택했을 경우(J)
              this.setState({
                resaddr: data.jibunAddress
              });
            }
      
            // // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            // if (data.userSelectedType === "R") {
            //   // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            //   // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            //   if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            //     this.setState({
            //       extraAddr: this.state.extraAddr + data.bname
            //     });
            //     // 건물명이 있고, 공동주택일 경우 추가한다.
            //     if (data.buildingName !== "" && data.apartment === "Y") {
            //       this.setState({
            //         extraAddr:
            //           this.state.extraAddr + this.state.extraAddr !== ""
            //             ? ", " + data.buildingName
            //             : data.buildingName
            //       });
            //     }
            //     // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            //     if (this.state.extraAddr !== "") {
            //       this.setState({
            //         extraAddr: " (" + this.state.extraAddr + ")"
            //       });
            //     }
            //     this.setState({
            //       extraAddr: this.state.extraAddr
            //     });
            //     // 조합된 참고항목을 해당 필드에 넣는다.
            //     // document.getElementById(
            //     //   "extraAddress"
            //     // ).value = this.state.extraAddr;
            //   } else {
            //     // document.getElementById("extraAddress").value = "";
            //     this.setState({
            //       extraAddr: ""
            //     });
            //   }
      
            //   this.setState({
            //     postcode: " [" + data.zonecode + "]",
            //     addr: this.state.addr
            //   });
            // }
          }
        }).open();
      };//주소검색끝







    selectRcategory=(e)=>{
        this.setState({
            rcategory: e.target.value
        })
    }

    selectRscore=(e)=>{
        this.setState({
            rscore: e.target.value
        })
    }


    
    //db저장
    onInsertReview=()=>{
        
        this.setState({
            
        });
        
         let data=this.state;

        
        //let hashtag=this.state.rcontent.match(/#[^\s#]+/g)
        let url="http://localhost:9001/review/insertreview";
            //
           //console.log(this.state.hashtag);
        axios.post(url,data)
        
        .then(res=>{
            
            alert("insert");
            this.setState({
                rmnum:'',
                rcontent:'',
                rcategory:'',
                rscore:'',
                resname:'',
                resaddr:'',
                picname:'',
                hashtag:'',
            })
        }).catch(err=>{
            console.log("insert시오류:"+err);
        })
    }




    render(){


        
        
       
                // let hashtag=this.state.rcontent.match(/#[^\s#]+/g)
       


        


        let url="http://localhost:9001/reviewsave/"

        return(
            <div>
                <div>
                <div className="main_insert">
                    
                    <div className="insert_start">
                        <div className="insert_detail1">
                            <span id="addfile" style={{cursor:'pointer'}}>추가</span>
                            <input type="file" 
                                onChange={this.imageUpload.bind(this)}
                               />
                            <p className="file_check">미리보기</p>
                            <img src={url+this.state.picname} alt="없음"
                            style={{width:'100px'}}
                            />
                        </div>
                        <div className="insert_detail2">
                            <select onChange={this.selectRscore}>
                                <option value="">별점</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                            <input type="text" name="rscore"
                                value={this.state.rscore}
                                onChange={this.changeEvent.bind(this)}
                                />
                        </div>
                        <div className="insert_detail3">
                            <select onChange={this.selectRcategory}>
                                <option value="">카테고리</option>
                                <option value="한식">한식</option>
                                <option value="중식">중식</option>
                                <option value="일식">일식</option>
                                <option value="양식">양식</option>
                                <option value="기타">기타</option>
                            </select>
                            <input type="text" name="rcategory"
                                value={this.state.rcategory}
                                onChange={this.changeEvent.bind(this)}
                                />
                        </div>
                        <div id="preview-container">
                            
                            {/* {imgPreview} */}
                        </div>
                        <div className="insert_detail5">
                            <div style={{float:'left'}}></div>
                            <textarea className="content" placeholder="내용" name="rcontent"
                            value={this.state.rcontent} 
                            onChange={this.changeEvent.bind(this)}/>
                        </div>
                        {/* <div className="insert_detail6">해시태그
                            <input type="text"
                             value={this.state.hashtag}
                            name="hashtag" 
                            //id="test"
                            onChange={this.changeEvent.bind(this)}
                            />
                        </div> */}

                        <div className="insert_detail7">지도
                            rmnum:<input type="text" name="rmnum"
                                    value={this.state.rmnum}
                                    onChange={this.changeEvent.bind(this)}
                                    />
                        </div>


                        


                        <div>
                            <input placeholder="가게이름"
                            value={this.state.resname}
                            name="resname"
                            onChange={this.changeEvent.bind(this)}
                            />
                            &nbsp;
                            <input placeholder="주소"
                            value={this.state.resaddr}
                            name="resaddr"
                            onChange={this.changeEvent.bind(this)}
                            />
                           


                        <button onClick={this.ReviewAddr}>검색</button>


                        </div>
                    </div>
                </div>
                <div  className="insertbtn">
                <button className="insert_btn"
                onClick={this.onInsertReview.bind(this)}>추가</button>
                </div>
                </div>
            </div>


            

            



        )
    }
}

export default ReviewWrite;