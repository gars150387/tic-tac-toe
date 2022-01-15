import React from 'react'
import './Square.css'

export const Square = (props) =>{
    return (
        <div 
        className='square'>
            {props.value}
        </div>
    )
}