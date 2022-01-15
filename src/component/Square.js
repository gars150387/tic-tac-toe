import React, {useState} from 'react'
import './Square.css'

export const Square = (props) =>{
const [value, setValue] = useState(null)

    return (
        <button 
        className='square'
        onClick={()=> setValue('X')}>
            {value}
        </button>
    )
}