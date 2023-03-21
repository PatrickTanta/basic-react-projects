import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        if (!fact) return

        const threeFirstWords = fact.split(' ').slice(0, 3).join('')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(response => response.json())
        .then(data => {
            const { url } = data
            setImageUrl(url)
        })
        .catch(error => {
            console.log(error)
        })
    }, [fact])
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
