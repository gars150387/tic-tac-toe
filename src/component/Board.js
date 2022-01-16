import React, { useState } from 'react'
import './Board.css'
import { Winner } from './RulesToWin'
import { Square } from './Square'
import { CalculateWinner } from './RulesToWin'

export const Board = () => {
    // const initialSquares = [
    //     null,
    //     null,
    //     null,
    //     null,
    //     null,
    //     null,
    //     null,
    //     null,
    //     null,
    // ]
    //this is another way to declare an array of 9 slot defining each one as null
    const initialSquares = Array(9).fill(null)

    const [square, setSquare] = useState(initialSquares)

    const [xIsNext, setXIsNext] = useState(true) //this is the new variable to render 'X' and 'O'

    const handleClickEvent = (i) => {
        //we can not mutate directly. 

        //the right way to mutate

        //1. Make a copy of square state array
        const newSquare = [...square]
        //2. mutate the copy, setting the i-th element to 'x'
        newSquare[i] = xIsNext ? 'X' : 'O' //in the same variable, a ternary operator is added to render 'X' or 'O'
        //3. call the setSquare function with the mutated copy
        setSquare(newSquare)
        setXIsNext(!xIsNext) //to flip the boolean value

        alert(`square ${i} clicked`)
    }

    const renderSquare = (i) => {
        return (
            <Square value={square[i]}
                onClickEvent={() => handleClickEvent(i)}
            />
        )
    }

    const CalculateWinner = (square) =>{
        const lines = [
            [0,1,2], [3,4,5], [6,7,8], //rows
            [0,3,6],[1,4,7],[2,5,8], //columns
            [0,4,8],[2,4,6] //diagonals
        ]
    
        for (let line of lines){
            const [a,b,c] = line;
            if (square[a] && square[a] === square[b] && square[c]){
                return square[a] //whatever 'X or 'O
            }
        }
        return null
    }

    const winner = CalculateWinner(square)
    const status = winner ?
    `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div>
            <div className='status'>{status}</div>
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

