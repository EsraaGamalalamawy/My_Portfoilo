import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Talk = (props) => {
    return (
        <div className='contact_talk mb-3 p-2 rounded-3'>
            {props.icon}
            <h3 className='m-2'>{props.name}</h3>
            <p className='fs-5' style={{overflow:"hidden",textOverflow:"ellipsis"}}>{props.info}</p>
            <a href={props.link} className='d-flex justify-content-center align-items-center'>write me &nbsp; <FaArrowRight/></a>
        </div>
    )
} 

export default Talk
