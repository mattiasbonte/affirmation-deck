import React from 'react'

const Controls = ({ drawCard }: { drawCard: Function }) => {
  const general = 'uppercase'
  const font = 'text-lg uppercase'
  const gradient = 'bg-gradient-to-r from-[#d1913c] via-[#ffd194] to-[#d1913c]'
  const hover = 'hover:font-bold hover:via-amber-300'

  return (
    <div className="flex items-center justify-around w-full h-10 max-w-xs mx-auto rounded-lg">
      <button type="button" className={`${general} ${font} ${gradient} ${hover} flex-1`} title="Shuffle Deck">
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
      <button type="button" className={`${general} ${font} ${gradient} ${hover} flex-1`} title="Reset Deck">
        Reset
      </button>
    </div>
  )
}

export default Controls
