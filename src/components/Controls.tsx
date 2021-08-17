import React from 'react'
interface Props {
  shuffleDeck: Function
  drawCard: Function
  resetDeck: Function
}

const Controls = ({ shuffleDeck, drawCard, resetDeck }: Props) => {
  const general = 'h-full z-20 border-2 border:true-gray-200 dark:border-gray-700'
  const font = 'text-[3vh] sm:text-lg'
  const gradient = 'bg-gradient-to-r from-[#d1913c] via-[#ffd194] to-[#d1913c]'
  const hover = 'hover:font-bold hover:via-amber-300'

  return (
    <div className="h-[8vh] sm:h-12 my-2 flex items-center justify-around w-full max-w-xs mx-auto overflow-hidden shadow-xl">
      <button
        onClick={() => shuffleDeck()}
        type="button"
        className={`${general} ${font} ${gradient} ${hover} flex-1 rounded-l-lg`}
        title="Shuffle Deck"
      >
        Shuffle
      </button>
      <button
        onClick={() => drawCard()}
        type="button"
        className={`${general} ${font} ${gradient} ${hover} flex-grow`}
        title="Draw A New Card"
      >
        Draw
      </button>
      <button
        onClick={() => resetDeck()}
        type="button"
        className={`${general} ${font} ${gradient} ${hover} flex-1 rounded-r-lg`}
        title="Reset Deck"
      >
        Reset
      </button>
    </div>
  )
}

export default Controls
