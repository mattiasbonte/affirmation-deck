import React from 'react'
import Achterkant from '../assets/Kaarten/Varia/Achterkant.webp'

const Card = ({ drawCard }: { drawCard: Function }) => {
  return (
    <img
      onClick={() => drawCard()}
      className="rounded-xl hover:translate-x-4 hover:translate-y-4 hover:shadow-lg border-cool-gray-300 absolute w-40 h-auto transition-all duration-200 border-2 shadow-md cursor-pointer"
      title="Take A New Card"
      src={Achterkant}
      alt="Placeholder Card"
    />
  )
}

export default Card
