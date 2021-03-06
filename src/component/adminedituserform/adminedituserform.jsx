
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
                    T??i kho???n
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    M???t kh???u
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    H??? v?? t??n
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    S??? ??i???n tho???i
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Ng??y sinh
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    H???n ????ng ph??
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Gi???i t??nh
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    Chi???u cao
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    C??n n???ng
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