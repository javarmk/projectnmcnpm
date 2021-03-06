import { useState } from "react"
import './adminblogliststyle.css' 
import axios from "axios"

import { useEffect } from "react"

import AdminHomeHeader from "../../dat/adminhomeheader/adminhomeheader"

export default function AdminBlogList(){
    const iconsShow=[
        'https://cdn-icons.flaticon.com/png/128/2767/premium/2767194.png?token=exp=1637688275~hmac=4335cc16c7685e973322366bc82fcb2f',
        'https://cdn-icons.flaticon.com/png/128/2767/premium/2767146.png?token=exp=1637688275~hmac=b9bf96fbbc6c8fb7c91ac32db7c174a3',
    ]
    const notificationIcon='https://cdn-icons.flaticon.com/png/128/2058/premium/2058148.png?token=exp=1637689396~hmac=51948d2dde6315dd4268d966c60c7fc1'
    const [showNaviIcon,setShowNavigation]=useState(
        iconsShow[0]
    )
    const [adminInfo,setAdminInfo]=useState(
        {
            picture:'https://cdn-icons.flaticon.com/png/128/3136/premium/3136101.png?token=exp=1637681714~hmac=a4353897d09277a372682bd1e90073d2',
            name:'Nguyen Van Dat',   
        }
    )
    
    const fgetBlogData=async ()=>{
        axios({
            method:'get',
            url:'http://localhost:5000/api/adv',
        }).then(
            res=>{
                if(res.status==200){
                    setBlogListInfo(res.data.result) 
                }
            }
        )
    }

    useEffect(()=>{
        fgetBlogData()
    },[])

    const [blogListInfo,setBlogListInfo]=useState(
        [
            {
                _id:1234,
                title:'Hello world',
                creator:'Dat',
                __v:10000,
            },
            {
                _id:1234,
                title:'Hello world',
                creator:'Dat',
                __v:10000,
            },
            {
                _id:1234,
                title:'Hello world',
                creator:'Dat',
                __v:10000,
            },
        ]
    )
        

    return(
        <div className="admin-blog-list">
            <AdminHomeHeader/>
            <div className="admin-blog-list-container">
                <div className="title">
                    <div>Danh s??ch b??i vi???t</div>
                </div>
                <div className="container">
                    <div className='search-tools'>
                        <div className='blogcode'>
                            <div>M?? b??i vi???t</div>
                            <input type="text"  placeholder='M?? b??i vi???t'/>
                        </div>
                        <div className='search-button'>
                            <button>T??m ki???m</button>
                        </div>
                        <div style={{float:'right',width:'190px',}} >
                            <div className='addblog'>
                                <button onClick={()=>{
                                    window.open('http://localhost:3000/admin/addblog','_self')
                                }}>Th??m b??i vi???t</button>
                            </div>
                            <div className='setting' >
                                <img src='https://cdn-icons.flaticon.com/png/128/2040/premium/2040504.png?token=exp=1637698397~hmac=a27326feb11e6978bb38a61d1a6e80e9' alt="" />
                            </div>
                        </div>                       
                    </div>

                    <div className="blogList">
                        <table>
                            <tr>
                                <th style={{borderRadius:'10px 0px 0px 0px'}}>M?? b??i vi???t</th>
                                <th>T??n b??i vi???t</th>
                                <th>Ng?????i ????ng</th>
                                <th>L?????t t????ng t??c</th>
                                <th>...
                                </th>
                            </tr>
                            {
                                blogListInfo.map((element,index)=>{
                                    return(
                                        <tr>
                                            <td>{element._id}</td>
                                            <td>{element.title}</td>
                                            <td>{element.creator}</td>
                                            <td>{element. __v}</td>
                                            <td>
                                            
                                                <a href={'http://localhost:3000/admin/bloglist/'+element._id}>Xem chi ti???t</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}