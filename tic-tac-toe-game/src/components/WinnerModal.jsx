import React from 'react'
import { Square } from './Square'

export const WinnerModal = ({ resetGame, winner }) => {
    if (winner === null) return null

    const winnerText = winner === false ? 'Equals' : 'Win'

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
            </div>

            <header className="win">
                {winner && <Square>{winner}</Square>}
            </header>

            <footer>
                <button onClick={resetGame}>Try again</button>
            </footer>
        </section>
    )
}
