import React from 'react'
import  './Button.css'

const Button = ({cls,title,icon,iconclass,onClick}) => {
    return (
        <button className={cls}  onClick={onClick} >
            {icon && <img className={iconclass} src={icon} alt={iconclass}/>}
            {title}
        </button>
    )
}

export default Button
