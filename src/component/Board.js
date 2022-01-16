import React, { useState } from 'react'
import './Board.css'
import { Square } from './Square'

export const Board = () => {
    const initialSquares = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]

    const [square, setSquare] = useState(initialSquares)

    const handleClickEvent = (i) =>{
        alert(`square ${i} clicked`)
    }

    const renderSquare = (i) => {
        return (
            <Square value={square[i]}
            onClickEvent={()=> handleClickEvent(i)} 
            />
        )
    }
    return (
        <div style={{
            backgroundColor: 'skyblue',
            margin: 10,
            padding: 20
        }}>
            Board
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}