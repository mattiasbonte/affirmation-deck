import React from 'react'
interface Props {
  drawCard: Function
  showInfoCard: Function
}

const Controls = ({ drawCard, showInfoCard }: Props) => {
  const gradient = ''
  const hover = ''

  return (
    <>
      <button
        onClick={() => drawCard()}
        type="button"
        className="sm:w-48 hover:text-white rounded-md sm:rounded-xl p-1 sm:p-3 sm:font-bold uppercase w-20 border hover:border-gray-300 border-yellow-600 bg-gradient-to-r from-[#d1913c] via-[#ffd194] to-[#d1913c] hover:font-bold hover:via-amber-300"
        title="Draw A New Card"
      >
        Draw
      </button>
      <button
        onClick={() => showInfoCard()}
        type="button"
        className="absolute m-6 bg-gray-700 left-0 bottom-0 h-8 w-8 text-white border border-gray-400 shadow-xl dark:bg-[#494946] rounded-full hover:shadow-2xl hover:scale-110 dark:hover:bg-gray-700 hover:bg-gray-900 hover:border-gray-700"
        title="See Information Card"
      >
        ?
      </button>
    </>
  )
}

export default Controls
