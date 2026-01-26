import {React,useState} from 'react'
import Skillscontent from './skillscontent';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";

const Skills = () => {
    const [num,SetNum]=useState(0)
        const items=[
            { 
                icon:<FaHtml5/>,
                name:"Html5"
            },
            {
                icon:<FaCss3Alt/>,
                name:"Css3"
            },
            {
                icon:<FaBootstrap/>,
                name:"Bootstrap"
            },
            {
                icon:<BiLogoTailwindCss/>,
                name:"Tailwind"
            },
            {
                icon:<IoLogoJavascript/>,
                name:"JavaScript"
            },
            {
                icon:<FaReact/>,
                name:"React"
            },
            {
                icon:<BiLogoRedux/>,
                name:"Redux"
            },
        ]
        window.addEventListener("scroll",function(){
            var skills=document.getElementById("skills")
            if( window.scrollY >= skills.offsetTop - 200 && window.scrollY <= skills.offsetTop + 350){
                SetNum(100)
            }else{
                SetNum(0)
            }
        })
        return (
            <div className='skills my-5' id='skills'>
                <h1 className="title text-center" >Skills</h1>
                <p className='text-center'>My Techneical level</p>
                <div className='d-flex flex-wrap container justify-content-around p-3'>
                    {items.map((ele)=><Skillscontent num={num} name={ele.name} icon={ele.icon} />) }
                </div>
            </div>
        )
}

export default Skills
