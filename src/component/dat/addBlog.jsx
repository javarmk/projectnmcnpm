import { useState } from "react"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser'; 
import './style.css'
import axios from "axios";
import jsxToString from 'jsx-to-string';

import { UserContext } from "../../routes/adminaddblogpage";

import AdminHomeHeader from './adminhomeheader/adminhomeheader'

// api https://localhost:5000/api/adv
export default function AddBlog(props){
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

    const fAddBlog=(content)=>{
        axios({
            method:'post',
            url:"http://localhost:5000/api/adv",
            data:{
                creator:'dat',
                title:'Hello world',
                time:'none',
                view:0,
                picture:'https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can.jpg?v=0.1',
                content:content,
            },
        }).then(res=>{
            console.log(res)
        })
    }


    const [textValue,setTextValue]=useState([props.value,])

    const getTextFromHtml=()=>{
        var text=''
        for(var i=0;i<textValue.length;i++){
            text+=jsxToString(textValue[i])
        }
        return text
    }

    const addnewElementWithIndex=(element,index)=>{
        if(index<0){
            return;
        }
        if(index>textValue.length){
            return;
        }
        var newTextValue=[...textValue];
        newTextValue.splice(index,0,element);
        setTextValue(newTextValue);
    }
    const setIndexTextValue=(element,index)=>{
        if(index<0) return;
        if(index>=textValue.length) return;
        const newTextValue=[...textValue];
        newTextValue[index]=element;
        setTextValue(newTextValue);
    }
    const setLastIndexTextValue=(element)=>{
        if(textValue.length<=0) {return;}

        const newTextValue=[...textValue];

        newTextValue[textValue.length-1]=element;
        setTextValue(newTextValue);
    }
    const removeIndexTextValue=(index)=>{
        if(index<0) return;
        if(index>=textValue.length) return;
        if(textValue.length<=0) return;
        const newtextValue=[...textValue];
        newtextValue.splice(index,1);
        setTextValue(newtextValue);
    }
    const createElement=(element)=>{
        const parentElement=
            <div className='adminEdit'>
                <div className='adminEditTools'>
                    <button>Xoa</button>
                    <button>Chinh sua</button>
                    <button>Chen tren</button>
                    <button>Chen duoi</button>
                </div>
                {element}
            </div>;
        return parentElement;
    }
    const handleOnChange=(e,editor)=>{
        const element=ReactHtmlParser(editor.getData());
        setLastIndexTextValue(createElement(element));
    }
    const upLoadImg=(url)=>{
        const element = <div style={{display:'block'}}><img src={url} style={style.defaultImg} alt="" /></div>;
        setLastIndexTextValue(createElement(element));
    }
    const [language,setLanguage]=useState({
        blogPageTitle:'Th??m b??i vi???t'
    })
    const [style,setStyle]=useState(
        {
            textCenter:{
                textAlign:'center',fontSize:'24px',fontFamily:'Source Sans Pro',
                backgroundColor:'rgba(142, 229, 255, 0.363)'
            },
            addBlog:{
                width: '100%',
                // backgroundColor: 'rgb(226, 226, 226)',
                margin:'auto',
            },
            toolsAdd:{
                display:'flex',
                justifyContent:'space-between',                
                width:'100%',
            },
            defaultImg:{
                // objectFit:'contain',
                // height:'100%',
                width:'100%',
                height:'auto'
            },
            defaultImgIcon:{
                objectFit:'cover',
                height:'70%',
                margin:'5px 0px 0px 5px',
            },  
            iconTools:{
                width:'40px',
                height:'40px',
                margin:'0px 10px 0px 0px',
                
            },
        }
    );

    const imgLink={
        textIcon:'https://cdn-icons.flaticon.com/png/128/3815/premium/3815460.png?token=exp=1637497950~hmac=b836f417222df5d095bff7a3c899bad1',
        imgIcon:'https://cdn-icons-png.flaticon.com/128/834/834096.png',
    };

    const imgEditor=
        <div className="imgEditor">
            <input style={{width:'180px'}} type="file"  accept="image/*" name="image" id="file" onChange={(e)=>upLoadImg(URL.createObjectURL(e.target.files[0]))} />
            <label>ho???c url:</label>
            <input type="text" onChange={(e)=>upLoadImg(e.target.value)} />
        </div>;

    const textEditor=
        <div className="editor" style={{position:'relative',}}>
            <CKEditor
                editor={ClassicEditor}
                onChange={handleOnChange}
            >
            </CKEditor>
        </div>;
    
    const [toolsShow,setToolsShow]=useState(
        textEditor
    )
    const  [show,setShow]=useState('none')

    const changeEditor=(type)=>{
        if(type=='textEditor'){
            setToolsShow(textEditor);
        }
        if(type=='imgEditor'){
            setToolsShow(imgEditor);
        }
        if(type=='nothing'){
            setToolsShow(<div></div>)
        }
    }
    
    return(
       <div>
            <AdminHomeHeader/>
            <div className="addBlog" style={style.addBlog}>
            <div className="addBlogTitle" style={style.textCenter}>
                <div>{language.blogPageTitle}</div>
            </div>
            {
               
            }
            <div>
                <div className="addBlogHeader">
                    <div className='addBlogHeaderTitle' style={{fontFamily:'sans-serif'}} >Preview</div>
                  
                    <div className="addBlogHeaderContent">
                        {
                            textValue
                        }
                        </div>
                        <div className='addButton' onClick={()=>{addnewElementWithIndex(createElement(<div style={{backgroundColor:'rgba(187, 187, 187, 0.541)'}}>...</div>),textValue.length); setShow('block')}}>+</div>
                    </div>
                
            </div>

           <div style={{display:show}}>
                {toolsShow}
                <div style={style.toolsAdd}>
                    <div style={{display:'flex',justifyContent:'left',}}>
                        <div className='iconTool' style={style.iconTools} onClick={()=>changeEditor('textEditor')}>
                            <img src={imgLink.textIcon} style={style.defaultImgIcon} alt="" />
                        </div>
                        <div className='iconTool' style={style.iconTools} onClick={()=>changeEditor('imgEditor')}>
                            <img src={imgLink.imgIcon} style={style.defaultImgIcon} alt="" />
                        </div>
                        <button style={{width:'30px'}} onClick={()=>{setShow('none')}}>
                            Ok!
                        </button>
                    </div>
                    <div>
                        <button className='iconTool' style={{margin:'0px 10px 0px 10px'}}>
                            Th??m
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={()=>fAddBlog(getTextFromHtml())}>Apply</button>
        </div>
       </div>
        
    )
}


