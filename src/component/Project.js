import React from 'react'
import "../project.css"

const Project = (props) => {
    return ( 
        <div className='project rounded-3 my-3'>
            <img src={props.src} alt='porj' />
            <div className='box rounded-3 d-flex flex-column align-items-center justify-content-center'>
                <h1 className='text-center'>{props.name}</h1>
                <p className='text-center p-2' style={{boxSizing:"border-box"}}>{props.info}</p>
                <div>
                    <button className='btn1 me-2 px-2 py-1 rounded-2'><a href={props.github}>GitHub</a></button>
                    <button className='btn2 px-2 py-1 rounded-2'><a href={props.live} style={{color:"rgb(0 60 78)"}}>Live</a></button>
                </div>
            </div>
        </div>
    )
}

export default Project
