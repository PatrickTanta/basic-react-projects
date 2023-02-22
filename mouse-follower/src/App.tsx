import { useEffect, useState } from 'react'
import './App.css'

interface IPosition {
  clientX: number
  clientY: number
}


const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

  const handleMove = (event: MouseEvent) => {
    const { clientX, clientY }: IPosition = event
    setPosition({ x: clientX, y: clientY })
    console.log('handle', { clientX, clientY })
  }

  useEffect(() => {
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // executed when the component is unmounted or when the dependencies change
    return () => window.removeEventListener('pointermove', handleMove)
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          opacity: 0.8,
          borderRadius: '50%',
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
