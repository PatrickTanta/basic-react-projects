import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact()
            .then(fact => setFact(fact))
            .catch(error => setFactError(error))
    }

    useEffect(refreshFact(), [])

    return { fact, refreshFact }
}
