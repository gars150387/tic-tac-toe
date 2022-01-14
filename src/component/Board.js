import React from 'react'
import { Square } from './Square'

export const Board = () =>{
    return (
        <div style={{
            backgroundColor:'skyblue',
            margin: 10,
            padding: 20
        }}>
            Board
            <Square/>
        </div>
    )
}