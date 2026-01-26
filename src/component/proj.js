import {React,useState} from 'react'
import taskReact from "../images/taskReact.png"
import task from "../images/task.png"
import slider from "../images/slider.png"
import task4 from "../images/task4.png"
import bookshome from "../images/books home.png"
import smartResturent from "../images/smart-resturent.png"
import puzzle from "../images/puzzle.png"
import backmon from "../images/backmon.png"
import task2 from "../images/task2.png"
import todolist from "../images/todolist.png"
import task3 from "../images/task3.png"
import task0 from "../images/task1.png"
import shopping2025 from "../images/shopping2025.png"
import flowers from "../images/flowers.png"
import flowershopping from "../images/flowershopping.png"
import smartcity from "../images/smartcity.png"
import templete from "../images/templete2.png"
import fivestar from "../images/fivestar.png"
import landingPage from "../images/landingPage.png"
import template3 from "../images/template3.png"
import laptops from "../images/laptops.png"
import shopping2023 from "../images/shopping2023.png"
import proj1 from "../images/first project.png"
import Project from './Project'
import "../project.css"

const Proj = () => { 
    window.addEventListener("scroll",function(){
        var proj=document.getElementById("proj")
        var boxproj=document.getElementById("boxproj")
        if(window.scrollY >= proj.offsetTop -500){
            boxproj.style.width="85vw"
        }
        else{
            boxproj.style.width="0"
        }
    })
    const [styletasks,setStyleTasks]=useState(false)
    const [styleproj,setStyleproj]=useState(true)
    const tasks=[
        {
            src:taskReact,
            name:"Mintor",
            info:"Built with React (Responsive)",
            github:"https://github.com/EsraaGamalalamawy/task",
            live:"https://esraagamalalamawy.github.io/task/"
        },
        {
            src:task,
            name:"Mintor",
            info:"Built with React (Responsive)",
            github:"https://github.com/EsraaGamalalamawy/task1",
            live:"https://esraagamalalamawy.github.io/task1/"
        },
        {
            src:bookshome,
            name:"Books Home",
            info:"Built with HTML5,CSS3",
            github:"https://github.com/EsraaGamalalamawy/book-house",
            live:"https://esraagamalalamawy.github.io/book-house/"
        },
        {
            src:task4,
            name:"task",
            info:"Built with HTML5,CSS3 (Responsive)",
            github:"https://github.com/EsraaGamalalamawy/fourth-task",
            live:"https://esraagamalalamawy.github.io/fourth-task/"
        },
        {
            src:smartResturent,
            name:"Menu",
            info:"Built with HTML5,CSS3,JS (Responsive)",
            github:"https://github.com/EsraaGamalalamawy/smart-resturent",
            live:"https://esraagamalalamawy.github.io/smart-resturent/"
        },
        {
            src:slider,
            name:"SliderS",
            info:"Built with HTML5,CSS3,JS (Responsive)",
            github:"https://github.com/EsraaGamalalamawy/slider",
            live:"https://esraagamalalamawy.github.io/slider/"
        },
        {
            src:puzzle,
            name:"Puzzle",
            info:"Built with HTML5,CSS3",
            github:"https://github.com/EsraaGamalalamawy/puzzle",
            live:"https://esraagamalalamawy.github.io/puzzle/"
        },
        {
            src:backmon,
            name:"Backman",
            info:"Built with HTML5,CSS3",
            github:"https://github.com/EsraaGamalalamawy/backman",
            live:"https://esraagamalalamawy.github.io/backman/"
        },
        {
            src:todolist,
            name:"To-Do List",
            info:"Built with React",
            github:"https://github.com/EsraaGamalalamawy/todolist",
            live:"https://esraagamalalamawy.github.io/todolist/"
        },
        {
            src:task2,
            name:"Task",
            info:"Built with HTML5,CSS3",
            github:"https://github.com/EsraaGamalalamawy/task2",
            live:"https://esraagamalalamawy.github.io/task2/"
        },
        {
            src:task3,
            name:"Task3",
            info:"Built with HTML5,CSS3",
            github:"https://github.com/EsraaGamalalamawy/task3",
            live:"https://esraagamalalamawy.github.io/task3/"
        },
        {
            src:task0,
            name:"Task0",
            info:"Built with HTML5,CSS3",
            github:"https://github.com/EsraaGamalalamawy/task0",
            live:"https://esraagamalalamawy.github.io/task0/"
        },
    ]
    const projects=[
        {
            src:shopping2025,
            name:"E-commerce",
            info:"Built with React, Redux, Bootstrap",
            github:"https://github.com/EsraaGamalalamawy/shopping2025",
            live:"https://esraagamalalamawy.github.io/shopping2025/"
        },
        {
            src:laptops,
            name:"Laptops",
            info:"Built with React",
            github:"https://github.com/EsraaGamalalamawy/laptops",
            live:"https://esraagamalalamawy.github.io/laptops/"
        },
        {
            src:shopping2023,
            name:"shopping",
            info:"Built with React",
            github:"https://github.com/EsraaGamalalamawy/shopping2023",
            live:"https://statuesque-dodol-d6c0a1.netlify.app/"
        },
        {
            src:flowers,
            name:"Flowers",
            info:"Built with HTML5, CSS3, JavaScript",
            github:"https://github.com/EsraaGamalalamawy/flowers",
            live:"https://esraagamalalamawy.github.io/flowers/"
        },
        {
            src:template3,
            name:"template3",
            info:"Built with HTML5, CSS3, Bootstap",
            github:"https://github.com/EsraaGamalalamawy/bootstraptest",
            live:"https://esraagamalalamawy.github.io/bootstraptest/"
        },
        {
            src:smartcity,
            name:"Smart City",
            info:"Built with HTML5, CSS3, Bootstrap",
            github:"https://github.com/EsraaGamalalamawy/smartcity",
            live:"https://esraagamalalamawy.github.io/smartcity/"
        },
        {
            src:fivestar,
            name:"Five Star",
            info:"Built with HTML5, CSS3",
            github:"https://github.com/EsraaGamalalamawy/five_star",
            live:"https://esraagamalalamawy.github.io/five_star/"
        },
        {
            src:landingPage,
            name:"Landing Page",
            info:"Built with HTML5, CSS3",
            github:"https://github.com/EsraaGamalalamawy/landing-page",
            live:"https://esraagamalalamawy.github.io/landing-page/"
        },
        {
            src:templete,
            name:"templete",
            info:"Built with HTML5, CSS3",
            github:"https://github.com/EsraaGamalalamawy/template2",
            live:"https://esraagamalalamawy.github.io/template2/"
        },
        {
            src:flowershopping,
            name:"Flowers",
            info:"Built with HTML5, CSS3, JavaScript",
            github:"https://github.com/EsraaGamalalamawy/Flower",
            live:"https://esraagamalalamawy.github.io/Flower/"
        },
        {
            src:proj1,
            name:"First Project",
            info:"Built with HTML5,CSS3",
            github:"https://github.com/EsraaGamalalamawy/firstProject",
            live:"https://esraagamalalamawy.github.io/firstProject/"
        },
        
    ]
    const [action,setAction]=useState([...projects])
    return (
        <div id='proj'>
            <h1 className='title text-center' id="project">Projects</h1>
            <div className='text-center'>
                <button onClick={()=>{
                    setAction([...tasks])
                    setStyleTasks(true)
                    setStyleproj(false)
                }} className={styletasks? "button1":"button2"} >tasks</button>
                <button onClick={()=>{
                    setAction([...projects])
                    setStyleTasks(false)
                    setStyleproj(true)
                }} className={styleproj? "button1":"button2"} >Projects</button>
            </div>
            <div className='projcontent d-flex flex-wrap align-items-center p-3 rounded-3' id='boxproj'>
                {action.map((ele)=>{
                    return(
                        <Project src={ele.src} name={ele.name} info={ele.info} github={ele.github} live={ele.live} />
                    )
                })}
            </div>
        </div>
    )
}

export default Proj
