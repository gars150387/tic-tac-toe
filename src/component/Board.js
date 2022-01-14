import React from 'react'
import './Board.css'
import { Square } from './Square'

export const Board = () => {
    return (
        <div style={{
            backgroundColor: 'skyblue',
            margin: 10,
            padding: 20
        }}>
            Board
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}