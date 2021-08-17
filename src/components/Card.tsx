import React from 'react'

const Card = ({ image, element }: { image: string; element: string }) => {
  return <div className="w-full h-full" style={{ background: `center/contain no-repeat url(${image})` }} />
}

export default Card
