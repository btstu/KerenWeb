import React from 'react'

const Image = (props) => {
    const {icon, size, alt} = props
    return (
        <div>
            <img src={icon} style={{width: size}} alt={alt}/>
        </div>
    )
}

export default Image