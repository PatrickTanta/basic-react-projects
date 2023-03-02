import { useState } from 'react'
import confetti from 'canvas-confetti'

import './App.css'
import './index.css'

import { TURNS } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { checkWinner, checkEndGame } from './logic/board'
import { Board } from './components/Board'
import { Square } from './components/Square'

const App = () => {
    const [board, setBoard] = useState(() => {
        const boardFromLocalStorage = window.localStorage.getItem('board')
        if (boardFromLocalStorage) return JSON.parse(boardFromLocalStorage)
        return Array(9).fill(null)
    })
    const [turn, setTurn] = useState(() => {
        const turnFromLocalStorage = window.localStorage.getItem('turn')
        return turnFromLocalStorage ?? TURNS.X
    })
    const [winner, setWinner] = useState(null)

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
        resetGameStorage()
    }

    const saveInLocalStorage = (board, turn) => {
        window.localStorage.setItem('board', JSON.stringify(board))
        window.localStorage.setItem('turn', turn)
    }

    const resetGameStorage = (board, turn) => {
        window.localStorage.removeItem('board')
        window.localStorage.removeItem('turn')
    }

    const updateBoard = (index) => {
        if (board[index] || winner) return

        // Update board
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        // set new turn
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        saveInLocalStorage(newBoard, newTurn)

        const newWinner = checkWinner(newBoard)

        // check state of Game
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }

    return (
        <div className="board">
            <h1>Tic Tac Toe</h1>

            <button onClick={resetGame}>Try again</button>

            <Board board={board} updateBoard={updateBoard} />

            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal resetGame={resetGame} winner={winner} />
        </div>
    )
}

export default App
