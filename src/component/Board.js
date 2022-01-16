import React, { useState } from 'react'
import './Board.css'
import { Square } from './Square'

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