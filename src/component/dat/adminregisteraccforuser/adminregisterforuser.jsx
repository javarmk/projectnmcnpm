import AdminHomeHeader from "../adminhomeheader/adminhomeheader"

import { AdminContainerStyle } from "../admincontainer/admincontainerstyle"
import AdminTitleHeaderContainer from "../admintitleheadercontainer/admintitleheadercontainer"
import { AdminContainerContentStyle } from "../admincontainercontent/admincontainercontent"
import {AdminDefaultRightContainerStyle} from "../admindefaultrightcontainer/admindefaultrightcontainer"
import AdminDefaultContentSearchTool from "../admindefaultcontentsearchtools/admindefaultcontentsearchtool"
import AdminDefaultTable from "../admindefaulttable/admindefaulttable"


import axios from "axios"
import { useState,useEffect } from "react"
// url: localhost:5000/api/users/


export default function AdminRegisterAccForUsers(){

    const tableheader=[
        'id',
        'Tên',
        'Tài khoản',
        'Số điện thoai',
        'Ngày sinh',
        '...',
    ];
    const [data,setData]=useState(
        [
           {
                _id:0,
               name:'dat',
               birthDay:'',
           },
        ]
    )
    const fetchTasks = async () => {
        var myHeaders = new Headers();
        // var accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTkwY2U1NTFjZjdmZWNlYjZjMmNlODYiLCJpYXQiOjE2Mzc4NTMzMzZ9.qWPkAAYnizvz6o1Y2es6uojIxHKsxt2NbI6-AEWu3k0'
        myHeaders.append("Authorization",localStorage.getItem("accessToken"));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch("http://localhost:5000/api/users", requestOptions)
        const data = await response.json()
        return data
    }
    const getDataUser=()=>{
        var myHeaders = new Headers();



        axios({
            method:'get',
            url:'http://localhost:5000/api/users/',
        }).then(
            res=>{
                if(res.status==200){    
                    setData(res.data.result)
                }
            }
        )
    }
    useEffect(()=>{
        getDataUser()
    },[])

    return(
        <div style={AdminDefaultRightContainerStyle}>
            <AdminHomeHeader/>
            <div style={AdminContainerStyle}>
                <AdminTitleHeaderContainer title='Danh sách user'/>
                <div style={AdminContainerContentStyle}>
                    <AdminDefaultContentSearchTool name1='Tên người dùng' name2='Thêm người dùng' name3='/#'/>

                </div>
                <div>
                    <AdminDefaultTable headertable={tableheader} datatable={data}/>
                </div>
            </div>

        </div>
    )
}