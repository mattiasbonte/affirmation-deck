import React from 'react'

const Card = ({ image, element }: { image: string; element: string }) => {
  return image ?? image? <img src={image} className="object-contain w-full h-full" alt={element} /> : <p>No Cards</p>
}

export default Card
