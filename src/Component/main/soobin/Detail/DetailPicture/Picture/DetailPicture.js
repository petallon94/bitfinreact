import React, { Component } from "react";
import Slider from "react-slick";
import './DetailPicture.css';

class DetailPicture extends Component {
    render() {
        //settings 부분, 슬라이더의 기능을 조정할 수 있다.
       const settings = {
         dots: true,  // 점은 안 보이게
         infinite: false, // 무한으로 즐기게
         speed: 500,
         slidesToShow: 1, //4장씩 보이게 해주세요
         slidesToScroll: 1, //1장씩 넘어가세요
         arrows: true,
         responsive: [ // 반응형 웹 구현 옵션
           {
               breakpoint: 1200, // 화면 사이즈 1200px
               settings: {
                 slidesToShow: 1,
               }
           },
           {
             breakpoint: 1023,
             settings: {
               slidesToShow: 1
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1
             }
           }
         ]
       };
        return (
    <div className="DetailPicture">
        <div className="slide-list-bar">
          <div className="slide-list-box">
            <Slider {...settings}>
              <div className="slide-list-item">
                <img src="https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2018/03/PS18033000035.jpg"/>
              </div>
              <div className="slide-list-item">
                <img src="http://www.biztribune.co.kr/news/photo/202010/248646_109212_849.jpg"/>
              </div>
              <div className="slide-list-item">
                <img src="https://ncache.ilbe.com/files/attach/new/20200331/4255758/139520638/11246059404/f268dace5df7a1ead8396bf7f42d65f5_11246059597.jpeg"/>
              </div>
            </Slider>
          </div>
        </div>
    </div>
        )
    }
}
export default DetailPicture;