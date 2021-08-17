import React, { useEffect, useState } from 'react'
import Controls from './components/Controls'
import Deck from './utils/Deck'
import Card from './components/Card'
import InfoCard from './assets/Kaarten/Varia/Info.webp'
import Achterkant from './assets/Kaarten/Varia/Achterkant.webp'

interface card {
  element: string
  image: string
}

const App = () => {
  const [activeCard, setActiveCard]: [card, Function] = useState({ element: 'intro', image: InfoCard })

  const drawCard = (): void => {
    const randIndex = Math.floor(Math.random() * Deck.length)
    setActiveCard(Deck[randIndex])
    if (Deck.length === 0) setActiveCard({ element: 'empty', image: Achterkant })
  }

  const showInfoCard = (): void => {
    setActiveCard({ element: 'intro', image: InfoCard })
  }

  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-500 dark:from-blue-gray-500 dark:via-blue-gray-600 dark:to-gray-700">
      <div className="grid-cols-1 grid w-screen h-screen p-2 justify-center items-center grid-rows-[9fr,1fr]">
        <div className="relative w-full h-full">
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
