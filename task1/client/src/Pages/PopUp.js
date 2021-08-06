import React from 'react'
import './PopUp.css'

const PopUp = (props) => {
    return (props.trigger) ?
        (<div className="pop_up">
            <div className="popUp_inner">

            {props.children}            

            </div>
        </div>)
        :""
    
}

export default PopUp
