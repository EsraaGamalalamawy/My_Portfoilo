import {React} from 'react'
import Skillcircle from './skillcircle'

const Skillscontent = (props) => {
    return (
        <div className='element text-center mb-3'>
            <Skillcircle percent={props.num} />
            <h2>{props.icon}</h2>
            <h3 className='m-0'>{props.name}</h3>
        </div>
    )
} 

export default Skillscontent
