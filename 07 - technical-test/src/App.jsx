import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = () => {
        refreshFact()
    }


    return (
        <main>
            <h1>App de cats</h1>

            <button onClick={handleClick}>Get new fact</button>

            <section>
                <p>
                    {fact && <p>{fact}</p>}
                    {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three workds for ${fact}`} />}
                </p>
            </section>
        </main>
    )
}

