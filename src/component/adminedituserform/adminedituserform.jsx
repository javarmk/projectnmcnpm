
import { useEffect,useState } from "react";

import axios from "axios";

export default function AdminEditUserForm(props){
    
    const [dataForm,setDataForm]=useState(
        props.data
    )
    const [arrayToRender,setArrayToRender]=useState(props.data) // data

    const inputField=(title,index)=>{
        return(
            <div>
                <div>
                    {title}
                </div>
                <div>
                    <input type="text" placeholder={title} onChange={(value)=>handleInputFieldOnChange(value,index)}/>
                </div>
            </div>
        )
    }
    const handleInputFieldOnChange=(value,index)=>{
        const newDataForm=[...dataForm];
        if(index<0) return;
        if(index>=newDataForm.length) return;
        newDataForm[index].value=value;
        setDataForm(newDataForm)
    }

    const buttonField=(title)=>{
        return(
            <div>
                <button onClick={()=>handleSubmit()}>{title}</button>
            </div>
        )
    }
    const getValueByTitleE=(titleE)=>{
        for(var i=0;i<dataForm.length;i++){
            if(dataForm[i].titleE==titleE){
                return dataForm[i].value;
            }
        }
        return '';
    }

      // name:getValueByTitleE('name'),
                // phone:getValueByTitleE('phone'),
                // username:getValueByTitleE('username'),
                // password:getValueByTitleE('password'),
                // paymentDay:getValueByTitleE('paymentDay'),
                // birthDay:getValueByTitleE('birthDay'),
                // gender:getValueByTitleE('gender'),
                // coach:getValueByTitleE('coach'),
    const handleSubmit=()=>{
        axios({
            method:'post',
            url:'localhost:5000/api/users/',
            data:{
                    name:'',
                    phone:'',
                username:'',
                password:'',
                paymentDay:'',
                birthDay:'',
                    gender:'',
                    coach:'',
            }
        }).then(res=>{
            console.log(res);
        })
    }    
    return(
        <div>
            <div>
                {
                    arrayToRender.map((element,index)=>{
                        if(element.type=='inputField'){
                            return inputField(element.title,index);
                        }else{
                            if(element.type=='buttonField'){
                                return buttonField(element.title);
                            }
                        }
                    })
                }
            </div>

            {/* <div>
                <div>
                    Tài khoản
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Mật khẩu
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Họ và tên
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Số điện thoại
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Ngày sinh
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Hạn đóng phí
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Giới tính
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Chiều cao
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Cân nặng
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </div> */}

        </div>
    )
}