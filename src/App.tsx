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
  const [deck, setDeck]: [card[], Function] = useState(Deck)
  const [drawnCards, setDrawnCards]: [card[], Function] = useState([])
  const [activeCard, setActiveCard]: [card, Function] = useState({ element: 'intro', image: InfoCard })

  const drawCard = (): void => {
    const randIndex = Math.floor(Math.random() * deck.length)
    setActiveCard(deck[randIndex])
    setDrawnCards([...new Set([activeCard, ...drawnCards])])
    setDeck(deck.filter((el) => el !== activeCard))
    if (deck.length === 0) setActiveCard({ element: 'empty', image: Achterkant })
  }

  const shuffleDeck = (): void => {
    for (let index = deck.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1))
      ;[deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]]
    }
    setDeck(deck)
  }

  const resetDeck = (): void => {
    setDrawnCards([])
    setDeck(Deck)
    setActiveCard({ element: 'intro', image: InfoCard })
  }

  const reviewCard = (card: card): void => {
    setDrawnCards([activeCard, ...drawnCards])
    setActiveCard(card)
    setDrawnCards(drawnCards.filter((el) => el !== card))
  }

  //   useEffect()

  return (
    // <div className="bg-true-gray-200 dark:bg-gray-700 max-w-screen relative w-screen h-screen p-2 pt-5 overflow-hidden">
    <div className="grid-cols-1 grid w-screen h-screen justify-center items-center grid-rows-[9fr,1fr]">
      <div className="w-full h-full bg-orange-500">
        <Card image={activeCard.image} element={activeCard.element} />
      </div>
      <div className="flex items-center h-full row-span-1 bg-green-500">
        <Controls shuffleDeck={shuffleDeck} drawCard={drawCard} resetDeck={resetDeck} />
      </div>
      {/* <div className="">
          <Card image={activeCard.image} element={activeCard.element} />
        </div>
        <div className="whitespace-nowrap h-60 absolute top-0 overflow-x-hidden -translate-y-24">
          {drawnCards.map((card, index) => (
            <div
              onClick={() => reviewCard(card)}
              key={index}
              className="hover:scale-150 hover:translate-y-24 relative inline-block w-16 overflow-visible transition-all duration-500 cursor-pointer"
            >
              <Card image={card.image} element={card.element}></Card>
            </div>
          ))}
        </div>
        <div className="">
          <Controls shuffleDeck={shuffleDeck} drawCard={drawCard} resetDeck={resetDeck} />
        </div> */}
    </div>
    // </div>
  )
}

export default App
