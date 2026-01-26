import React from 'react'

const Skillcircle = (props) => {
    const radius=50;
    const dasharray = radius *Math.PI *2
    const off= dasharray -(dasharray*props.percent) /100
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className='mx-3'>
                <svg width={110} height={110} viewBox={`0 0 ${110} ${110}`} >
                    <circle className='circle ' cx={110/2} cy={110/2} strokeWidth="5px" r={radius} />
                    <circle 
                        className='progress' 
                        cx={110/2} 
                        cy={110/2} 
                        strokeWidth="5px" 
                        r={radius}  
                        style={{
                            strokeDasharray:dasharray,
                            strokeDashoffset:off,
                        }}
                        transform={`rotate(-90 ${110/2} ${110/2})`}
                    />
                </svg>
                
            </div>
        </div>
    )
}

export default Skillcircle
