import React from 'react'

type CardProps = {
  servicio: string
}

export default function Card({servicio}: CardProps) {
  return (
    <div 
      className='bg-teal-400 w-60 min-h-56 text-center hover:bg-teal-600 hover:rotate-3 flex justify-center items-center transform'
    >
      <p>{servicio}</p>
    </div>
  )
}
