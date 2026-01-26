import React from 'react'
import {FaBuffer} from "react-icons/fa6";
import {FaOdnoklassniki} from "react-icons/fa6";
import {FaPeopleGroup} from "react-icons/fa6";
import { Link } from 'react-scroll';

const About = () => { 
    window.addEventListener("scroll",function(){
        var about=document.getElementById("about")
        if(window.scrollY >= about.offsetTop - 500 && window.scrollY <= about.offsetTop + 300){
            about.style.opacity="1"
            about.style.transform="translateX(0)"
        }
        else{
            about.style.opacity="0"
            about.style.transform="translateX(-50%)"
        }
    })
    return (
        <div id='about' className='container mt-3'>
            <h1 className='title text-center'>About Me</h1>
            <p className='description'>I am a junior front-end developer, converting designs into responsive interfaces, 
                and I constantly strive to improve my skills through real projects.</p>
            <div className='row content d-flex justify-content-between pt-2 pb-6 px-3 flex-nowrap gap-2'>
                <div className='boxs d-flex flex-column justify-content-between col-4 col-md-3 p-0' id="boxid1">
                    <div className='border p-1 rounded-3 text-center mb-3'>
                        <FaOdnoklassniki/>
                        <h3>Experience</h3>
                        <p>Practical Experience</p>
                    </div>
                    <div className='border px-3 py-2 rounded-3 text-center mb-3'>
                        <FaPeopleGroup/>
                        <h3>Interests</h3>
                        <p>&lt;\&gt; Coding</p>
                    </div>
                    <div className='projects border px-3 py-2 rounded-3 text-center mb-3'>
                        <FaBuffer/>
                        <h3>Projects</h3>
                        <p>
                            <Link to="project" spy={true} smooth={true} offset={0} duration={500}>+10 Projects</Link>
                        </p>
                    </div>
                </div>
                <div className='info p-3 rounded-3 d-flex flex-wrap justify-around col-8 col-md-9 col-lg-8 align-self-stretch'>
                    <h3>Name: <span>Esraa Gamal Alamawy</span></h3>
                    <h3>Role: <span>Front-End Developer</span></h3>
                    <h3>Freelance: <span>Available</span></h3>
                    <h3>country: <span>Egypt</span></h3>
                    <h3>Languages: <span>Arabic, Basic English</span></h3>
                    <h3 className='mail'>Email: <span>esraa5112000esraa@gmail.com</span></h3>
                    <button className='btn2 rounded-3 py-0 px-3' onClick={()=>{
                        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
                    }}>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default About
