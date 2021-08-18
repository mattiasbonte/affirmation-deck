import React, { useState, useEffect } from 'react'
import Controls from './components/Controls'
import Deck from './utils/Deck'
import ActiveCard from './components/ActiveCard'
import DeckCard from './components/DeckCard'
import InfoCard from './assets/Kaarten/Varia/Info.webp'
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
    const infoCard = { element: 'intro', image: InfoCard }
    if (activeCard.element === infoCard.element) return
    drawCard(infoCard)
  }

  return (
    <div className="bg-card-pattern overflow-hidden bg-center bg-no-repeat bg-cover">
      <div className="dark:bg-opacity-80 bg-opacity-10 dark:bg-black bg-white">
        <div className="relative -translate-x-20 -translate-y-56">
          {Deck.map((card, index) => (
            <div key={index} className={`right-[${index * 10}px] w-full h-full`}>
              <DeckCard drawCard={drawCard} key={index} />
            </div>
          ))}
        </div>
        <div className="grid-cols-1 grid w-screen h-screen p-2 justify-center items-center grid-rows-[1fr,8fr,1fr]">
          <div className="w-full h-full transition-all duration-700"></div>
          <div
            className={`relative w-full h-full transition-all ${
              flipCard ? 'translate-x-[-80%] translate-y-[-160%] -rotate-45 duration-300' : 'duration-700'
            }`}
          >
            <ActiveCard image={activeCard.image} element={activeCard.element} />
          </div>
          <div className=" z-10 flex items-center h-full mx-auto">
            <Controls drawCard={drawCard} showInfoCard={showInfoCard} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
