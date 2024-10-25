import React from 'react'

type CardProps = {
  servicio: string
}

export default function Card({servicio}: CardProps) {
  return (
    <div 
      className='bg-teal-400 w-60 min-h-56 text-center transition hover:scale-110 ease-in-out hover:bg-teal-600 hover:rotate-3 flex justify-center items-center'
    >
      <p className='hover:animate-bounce'>{servicio}</p>
    </div>
  )
}
