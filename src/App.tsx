import React, { useState } from 'react'
import Controls from './components/Controls'
import Deck from './utils/Deck'
import Card from './components/Card'
import InfoCard from './assets/Kaarten/Varia/Info.webp'
import Achterkant from './assets/Kaarten/Varia/Achterkant.webp'

const App = () => {
  const [deck, setDeck] = useState(Deck)
  const [activeCard, setActiveCard] = useState({ element: 'intro', image: InfoCard })

  const drawCard = (): void => {
    const randIndex = Math.floor(Math.random() * deck.length)
    setActiveCard(deck[randIndex])
    setDeck(deck.filter((el) => el !== activeCard))
    if (deck.length === 0) setActiveCard({ element: 'intro', image: Achterkant })
  }

  return (
    <div className="bg-dark-pattern max-w-screen flex flex-col w-screen h-screen p-2">
      <Card image={activeCard.image} element={activeCard.element} />
      <Controls drawCard={drawCard} />
    </div>
  )
}

export default App
