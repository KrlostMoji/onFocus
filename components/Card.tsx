import React from 'react'

type CardProps = {
  servicio: string
}

export default function Card({servicio}: CardProps) {
  return (
    <div 
      className="bg-teal-400 w-52 md:w-60 h-44 md:h-56 text-center transition hover:scale-110 ease-in-out hover:bg-teal-600 flex justify-center items-center"
    >
      <p className='hover:animate-bounce'>{servicio}</p>
    </div>
  )
}
