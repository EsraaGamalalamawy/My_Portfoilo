import React ,{useEffect, useState, Fragment} from 'react'
import bg from "../images/istockphoto-1325007051-612x612.jpg"
import {FaSquareFacebook} from "react-icons/fa6"
import {FaGithub} from "react-icons/fa6"
import {FaLinkedinIn} from "react-icons/fa6"
import img from "../images/esraa.jpg"
import CV from "../images/Esraa Gamal Alamawy-Front End.pdf"

const Main = () => {
    const text=["F","r","o","n","t"," ","E","n","d"," ","D","e","v","e","l","o","p","r"]
    const [front,setFront]=useState([])
    const [x,setX]=useState(0)
    const [hid,setHid]=useState(true)
    const [even,setEven]=useState(true)
    const [style,setStyle]=useState({})
    const [style2,setStyle2]=useState({})
    const show=()=>{
        if(even){
            setX(x+0.5) 
            setFront([...front,text[x]])
            setHid(!hid)
            if(front.length>=35 || x === 18){
                setEven(false)
            }
        }
        if(!even){
            front.pop()
            setHid(!hid)
            if(front.length===0){
                setEven(true)
                setX(0)
            }
        }
    }
    useEffect(()=>{
        const time=setInterval(show,70)
        return ()=>{
            clearInterval(time);
        }
    })
    window.onload=()=>{
        setStyle({
            opacity:"1",
        })
        setStyle2({
            opacity:"1",
            marginRight:"0"
        })
    }
    return (
        <Fragment>
            <div className='main mb-4' id="home" >
                <img src={bg} alt='background' className='background' />
                <div className='one d-flex flex-column'>
                    <a href='https://www.facebook.com/esraagamal.elamawy' className='px-1 py-1'><FaSquareFacebook /></a>
                    <a href="https://github.com/EsraaGamalalamawy" className='px-1 py-1'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/esraa-alamawy-023a6627b' className='px-1 py-1'><FaLinkedinIn/></a>
                </div>
                <div className='top row d-flex align-items-center justify-content-center my-5'>
                    <div className='content col-11 col-sm-8 pb-4 d-flex flex-column'style={style2} >
                        <h4 className='me fs-1' style={{height:" 70px"}}>Hi! I'm Esraa Gamal Alamawy, {front.join("")}<span>|</span></h4>
                        <div>
                            <p className='px-0 pt-4 pb-2 m-0' style={{lineHeight:"1.7"}}>
                                I create responsive and interactive web Experiences
                            </p>
                            
                            <div className='d-flex btn border-0'>
                                <button className='btn1 mt-3 px-2 py-1 rounded-2'>
                                    <a href={CV} download="CV" >Download CV</a>
                                </button>
                                <button className='btn2 mt-3 mx-2 px-2 py-1 rounded-2' onClick={()=>{
                                    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
                                }}>Contact Me</button>
                            </div>
                        </div>
                    </div>
                    <div className='myPhoto col-11 col-sm-4 rounded-2 mx-auto' style={style}>
                        <img src={img} alt='esraa' className='rounded-3'/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Main;
