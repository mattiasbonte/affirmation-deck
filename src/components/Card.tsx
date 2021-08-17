import React, { useState } from 'react'

const Card = ({ image, element }: { image: string; element: string }) => {
  const [zoom, setZoom] = useState(false)
  return (
    <div
      title={`${element} element card. ${zoom ? 'Click to shrink' : 'Click to enlarge'}`}
      onClick={() => setZoom(!zoom)}
      className={zoom ? 'w-screen h-screen duration-700 transition-all' : 'w-full h-full transition-all duration-200'}
      style={{ background: `center/contain no-repeat url(${image})` }}
    />
  )
}

export default Card
