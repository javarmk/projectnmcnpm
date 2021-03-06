import './style.css'

const img_facilities_row1 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/huong-dan-giam-can.jpg?v=CFYC-CFYCWEBSITE-722"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/yoga-giam-can.jpg?v=0.2"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/the-duc-giam-can.jpg?v=0.1"
  }
]

const img_facilities_row2 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/dance-giam-can.jpg?v=0.2"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/tap-the-duc-giam-can.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/mma-giam-can.jpg?v=0.1"
  }
]

const img_facilities_row3 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can-nhanh-nhat.jpg?v=CFYC-CFYCWEBSITE-722"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/california-wow-find-your-club-1.jpg?v=0.1"
  }  
]

const img_facilities_row4 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can-hieu-qua.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/trung-tam-the-hinh-ha-noi.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can-hieu-qua-nhat.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/trung-tam-the-hinh-da-nang.jpg?v=0.1"
  }   
]

const img_facilities_row5 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/trung-tam-the-hinh-binh-duong.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/trung-tam-the-hinh.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/giam-can-nhanh.jpg?v=0.3"
  }   
]

const img_facilities_row6 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/club-nha-trang-light.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/club-nha-trang-dark.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/club-can-tho-light.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/club-can-tho-dark.jpg?v=0.1"
  }   
]
      

const text = [
  {
    content: "D???ch v??? luy???n t???p ??a d???ng, c??c b??i gi???m c??n khoa h???c"
  },
  {
    content: "?????n v???i ch??ng t??i, tr???i nghi???m kh??ng gian hi???n ?????i!"
  },
  {
    content: "Hi???n ch??ng t??i ???? trang b??? nh???ng trang thi???t b??? hi???n ?????i nh???t ph???c v??? cho qu?? kh??ch, h??y ?????n v???i trung t??m ????? b???t ?????u t???p luy???n v???i c??ch gi???m c??n nhanh nh???t c???a ch??ng t??i ho???c t??m hi???u nh???ng b??i t???p ph?? h???p"
  }
]

function ContentIntro() {
  return (                                  
    
    <div id="html">

    
      {/* Ph???n content */}
      <div id="content" >
        <div className="container-page">
          <div className="new-header text-center">
            <h2>{text[0].content}</h2>         
            <div class="cool-divider short-red-line center" id="line_s"></div>
          </div>
        </div>

        <div className="row-facilities">
          <div className="row">
            {
              img_facilities_row1.map((element, index) => {
                return (
                <div className="fal-dance">
                  <img className="img-falcilities" src = {element.url} alt="Ch??o m???ng b???n ?????n v???i Ruby Gym" />
                </div>
                )
              })
            }
        
          </div>
          <div className="row">
            {
              img_facilities_row2.map((element, index) => {
                return (
                <div className="fal-dance">
                  <img className="img-falcilities" src = {element.url} alt="Ch??o m???ng b???n ?????n v???i Ruby Gym" />
                </div>
                )
              })
            }
          </div>                
        </div>

        <div className="container-page">
          <div className="new-header text-center">
            <h2> {text[1].content} </h2>
            <div className="row-sub">
              <div className="col-md-offset-2 col-md-8">
                <p>
                  {text[2].content}
                </p>
              </div>
              <div class="cool-divider short-red-line center" id="line_s"></div>
            </div>
          </div>
        </div>

        <div className="row-facilities">
          <div className="row">
            {
              img_facilities_row3.map((element, index)=>{
                return (
                  <div className="fal-gym">
                    <img className="img-falcilities" src={element.url} alt="Ch??o m???ng b???n ?????n v???i Ruby Gym"/>
                  </div>
                )
              })
            }
          </div>
          
          <div className="row">
            {
              img_facilities_row4.map((element, index)=>{
                return (
                  <div className="fal-gym">
                    <img className="img-falcilities" src={element.url} alt="Ch??o m???ng b???n ?????n v???i Ruby Gym"/>
                  </div>
                )
              })
            }
          </div>

          <div className="row">
            {
              img_facilities_row5.map((element, index)=>{
                return (
                  <div className="fal-gym">
                    <img className="img-falcilities" src={element.url} alt="Ch??o m???ng b???n ?????n v???i Ruby Gym"/>
                  </div>
                )
              })
            }
          </div>

          <div className="row">
            {
              img_facilities_row6.map((element, index)=>{
                return (
                  <div className="fal-gym">
                    <img className="img-falcilities" src={element.url} alt="Ch??o m???ng b???n ?????n v???i Ruby Gym"/>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>

    </div>           
  );
}
export default ContentIntro;