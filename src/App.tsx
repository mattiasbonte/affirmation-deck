import React, { useState, useEffect } from 'react'
import Controls from './components/Controls'
import Deck from './utils/Deck'
import Card from './components/Card'
import InfoCard from './assets/Kaarten/Varia/Info.webp'
import Achterkant from './assets/Kaarten/Varia/Achterkant.webp'
import plopSound from './assets/sounds/plopSound.mp3'
import takeCardSound from './assets/sounds/takeCardSound.mp3'

interface card {
  element: string
  image: string
}

const App = () => {
  const [activeCard, setActiveCard]: [card, Function] = useState({ element: 'intro', image: InfoCard })
  const [flipCard, setFlipCard] = useState(false)
  const takeCardEffect = new Audio(takeCardSound)
  const plopEffect = new Audio(plopSound)

  const drawCard = (card: card): void => {
    if (flipCard) return
    const randIndex = Math.floor(Math.random() * Deck.length)
    setFlipCard(!flipCard)
    setTimeout(() => {
      if (card) {
        setActiveCard(card)
      } else {
        setActiveCard(Deck[randIndex])
      }
    }, 300)
    plopEffect.play()
  }

  useEffect(() => {
    if (!flipCard) return
    setTimeout(() => {
      setFlipCard(!flipCard)
      takeCardEffect.play()
    }, 1400)
  }, [flipCard])

  const showInfoCard = (): void => {
    drawCard({ element: 'intro', image: InfoCard })
  }

  return (
    <div className="bg-dark-pattern overflow-hidden">
      <div className="grid-cols-1 grid w-screen h-screen p-2 justify-center items-center grid-rows-[9fr,1fr]">
        <div
          className={`relative w-full h-full transition-all ${
            flipCard ? 'translate-x-[-80%] translate-y-[-160%] -rotate-45 duration-300' : 'duration-700'
          }`}
        >
          <Card image={activeCard.image} element={activeCard.element} />
        </div>
        <div className=" flex items-center h-full row-span-1">
          <Controls drawCard={drawCard} showInfoCard={showInfoCard} />
        </div>
      </div>
    </div>
  )
}

export default App
