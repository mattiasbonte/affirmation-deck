import React, { useState, useEffect } from 'react'
import Controls from './components/Controls'
import Deck from './utils/Deck'
import ActiveCard from './components/ActiveCard'
import InfoCard from './assets/Kaarten/Varia/Info.webp'

interface card {
  element: string
  image: string
}

const App = () => {
  const [activeCard, setActiveCard]: [card, Function] = useState({ element: 'intro', image: InfoCard })
  const [flipCard, setFlipCard] = useState(false)

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
  }

  useEffect(() => {
    if (!flipCard) return
    setTimeout(() => {
      setFlipCard(!flipCard)
    }, 1400)
  }, [flipCard])

  const showInfoCard = (): void => {
    const infoCard = { element: 'intro', image: InfoCard }
    if (activeCard.element === infoCard.element) return
    drawCard(infoCard)
  }

  return (
    <div className="bg-info-card sm:bg-pattern overflow-hidden bg-center bg-no-repeat bg-cover">
      <div className="dark:bg-opacity-80 sm:bg-opacity-5 bg-opacity-20 dark:bg-black bg-white">
        <div className="grid-cols-1 grid w-screen h-screen px-2 justify-center items-center grid-rows-[1fr,10fr,2fr] sm:grid-rows-[1fr,16fr,3fr]">
          <div></div>
          <div
            className={`z-30 w-full h-full transition-all ${
              flipCard ? 'translate-x-[-80%] translate-y-[-160%] -rotate-45 duration-300' : 'duration-700'
            }`}
          >
            <ActiveCard image={activeCard.image} element={activeCard.element} />
          </div>
          <div className="lg:max-w-xl z-10 flex items-center justify-between w-full h-full mx-auto">
            <Controls drawCard={drawCard} showInfoCard={showInfoCard} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
